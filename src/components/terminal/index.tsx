'use client';

import { useEffect, useRef, useState } from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { useEditor } from '@/hooks/terminal/use-editor';
import useFileSystem from '@/hooks/terminal/use-file-system';

import TerminalContent from './terminal-content';
import TerminalEditor from './terminal-editor';
import TerminalHeader from './terminal-header';

export default function Terminal(props: {}) {
  // Refs
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollIntoViewRef = useRef<HTMLDivElement>(null);
  // State
  const [isFocused, setIsFocused] = useState(true);
  const [lines, setLines] = useState<string[]>([
    'Welcome! Type "help" to see available commands.',
  ]);
  // Hooks
  const { editorValue, caretIndex } = useEditor(handleCommand, isFocused);
  const { path, cd, ls, pwd, cat } = useFileSystem();

  const promptPath = ('/' + path.join('/')).replace('/home/rasmus', '~');
  const prompt = `root@macbook ${promptPath} %`;

  function handleCommand(inputValue: string) {
    addLine(`${prompt} ${inputValue}`);
    const [cmd, ...args] = inputValue.split(' ');
    runCommand(cmd, args);
  }

  function addLine(text: string) {
    setLines((lines) => [...lines, text]);
  }

  function runCommand(cmd: string, args: string[] = []) {
    switch (cmd) {
      case 'pwd':
        if (args.length > 0) addLine('pwd: too many arguments');
        else {
          const path = pwd();
          addLine(path);
        }
        break;
      case 'cd':
        if (args.length === 0) {
          try {
            cd();
          } catch (error) {
            if (error instanceof Error) addLine(error.message);
          }
        } else if (args.length === 1) {
          try {
            cd(args[0]);
          } catch (error) {
            if (error instanceof Error) addLine(error.message);
          }
        } else addLine('cd: too many arguments');
        break;
      case 'ls':
        if (args.length === 0) {
          try {
            const names = ls();
            for (const name of names) {
              addLine(name);
            }
          } catch (error) {
            if (error instanceof Error) addLine(error.message);
          }
        } else if (args.length === 1) {
          try {
            const names = ls(args[0]);
            for (const name of names) {
              addLine(name);
            }
          } catch (error) {
            if (error instanceof Error) addLine(error.message);
          }
        } else {
          for (const path of args) {
            try {
              const names = ls(path);
              addLine(path + ':');
              for (const name of names) {
                addLine(name);
              }
            } catch (error) {
              if (error instanceof Error) addLine(error.message);
            }
          }
        }
        break;
      case 'cat':
        if (args.length === 0) addLine('cat: missing file operand');
        else {
          for (const path of args) {
            try {
              const content = cat(path);
              addLine(content);
            } catch (error) {
              if (error instanceof Error) addLine(error.message);
            }
          }
        }
        break;
      case 'clear':
        setLines([]);
        break;
      case 'help':
        runCommand('cat', ['/home/rasmus/help.txt']);
        break;
      default:
        addLine(`zsh: command not found: ${cmd}`);
    }
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current?.contains(e.target as Node)) {
        e.preventDefault();
        setIsFocused(true);
      } else setIsFocused(false);
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    // Scroll to the bottom
    scrollIntoViewRef.current?.scrollIntoView({
      behavior: 'auto',
      block: 'nearest',
    });
  }, [lines, editorValue, caretIndex]);

  return (
    <div
      ref={wrapperRef}
      className="flex aspect-[3/2] max-h-96 w-full max-w-[36rem] flex-col rounded-md border border-[#4b4b4b] border-t-[#757677] bg-[#1e1e1e]"
    >
      <TerminalHeader isFocused={isFocused} dirName={path[path.length - 1]} />
      <ScrollArea className="my-1 flex-grow px-1">
        <TerminalContent lines={lines} />
        <TerminalEditor
          editorValue={editorValue}
          caretIndex={caretIndex}
          prompt={prompt}
          isFocused={isFocused}
        />
        <div ref={scrollIntoViewRef} />
      </ScrollArea>
    </div>
  );
}
