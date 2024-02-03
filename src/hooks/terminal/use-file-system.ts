'use client';

import { useState } from 'react';

type FileNode = {
  type: 'file';
  content: string;
};

type DirNode = {
  type: 'dir';
  children: { [key: string]: FileNode | DirNode };
};

const fileSystem: DirNode = {
  type: 'dir',
  children: {
    home: {
      type: 'dir',
      children: {
        rasmus: {
          type: 'dir',
          children: {
            'private.txt': {
              type: 'file',
              content: 'This is private! How dare you look at it!?',
            },
            'help.txt': {
              type: 'file',
              content:
                'Available commands:\n  cat <file_name> - print file contents\n  cd [dir_name]   - change directory\n  clear           - clear terminal screen\n  help            - print list of commands\n  ls [dir_name]   - list directory contents\n  pwd             - print working directoryh\n',
            },
          },
        },
      },
    },
  },
};

export default function useFileSystem() {
  const [path, setPath] = useState<string[]>(['home', 'rasmus']);

  const findNode = (
    path: string[],
    currentNode: DirNode | FileNode = fileSystem,
  ): DirNode | FileNode => {
    for (const part of path) {
      if (currentNode === undefined)
        throw new Error('no such file or directory');
      if (currentNode.type !== 'dir') throw new Error('not a directory');
      currentNode = currentNode.children[part];
    }
    if (currentNode === undefined) throw new Error('no such file or directory');
    return currentNode;
  };

  const cd = (pathStr: string = ''): void => {
    try {
      if (pathStr === '') {
        const newPath = ['home', 'rasmus'];
        findNode(newPath);
        setPath(newPath);
        return;
      }
      const parts = pathStr.split('/').filter(Boolean);
      const newPath: string[] = pathStr.startsWith('/') ? [] : [...path];

      for (const part of parts) {
        if (part === '..' && newPath.length > 0) newPath.pop();
        else if (part === '.') continue;
        else if (part === '~') newPath.push('home', 'rasmus');
        else newPath.push(part);
        const node = findNode(newPath);
        if (node.type !== 'dir') throw new Error('not a directory');
      }
      setPath(newPath);
    } catch (error) {
      throw new Error(`cd: ${(error as Error).message}: ${pathStr}`);
    }
  };

  const ls = (pathStr: string = ''): string[] => {
    try {
      const parts = path ? pathStr.split('/').filter(Boolean) : [];
      const finalPath = pathStr.startsWith('/')
        ? [...parts]
        : [...path, ...parts];
      const node = findNode(finalPath);
      if (node.type === 'file') return [pathStr];
      else return Object.keys(node.children);
    } catch (error) {
      throw new Error(`ls: ${pathStr}: ${(error as Error).message}`);
    }
  };

  const pwd = (): string => {
    return '/' + path.join('/');
  };

  const cat = (pathStr: string): string => {
    try {
      const parts = pathStr.split('/').filter(Boolean);
      const finalPath = pathStr.startsWith('/')
        ? [...parts]
        : [...path, ...parts];
      const node = findNode(finalPath);
      if (node.type === 'dir') throw new Error('is a directory');
      return node.content;
    } catch (error) {
      throw new Error(`cat: ${pathStr}: ${(error as Error).message}`);
    }
  };

  return { path, cd, ls, pwd, cat };
}
