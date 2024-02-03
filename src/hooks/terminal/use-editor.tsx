'use client';

import { useEffect, useState } from 'react';

function splitStringAtIndex(str: string, index: number) {
  return [str.slice(0, index), str.slice(index)];
}

export const useEditor = (
  onSubmit: (inputValue: string) => void,
  isFocused: boolean,
  isEnabled: boolean = true,
) => {
  const [history, setHistory] = useState<string[]>([]);
  const [buffer, setBuffer] = useState<string[]>([...history, '']);
  const [bufferIndex, setBufferIndex] = useState<number>(0);
  const [caretIndex, setCaretIndex] = useState<number>(0);

  useEffect(() => {
    // Update buffer to reflect new history
    setBuffer([...history, '']);
    setBufferIndex(history.length);
  }, [history]);

  function appendToHistory(command: string) {
    setHistory((history) => history.concat(command));
  }

  /* ===== Process key press ===== */
  const handleKeyDownEvent = (event: KeyboardEvent) => {
    if (!isFocused) return;
    if (!isEnabled) return;

    event.preventDefault();

    const eventKey = event.key;
    const command = buffer[bufferIndex];

    if (eventKey === 'Enter') {
      appendToHistory(command);
      onSubmit(command);
      return;
    }

    let nextCommand: string = command;
    let nextBufferIndex: number = bufferIndex;
    let nextCaretIndex: number = caretIndex;

    if (eventKey === 'Backspace') {
      const [textBefore, textAfter] = splitStringAtIndex(command, caretIndex);
      nextCommand = textBefore.slice(0, -1) + textAfter;
      nextCaretIndex = Math.max(caretIndex - 1, 0);
    } else if (eventKey === 'ArrowUp') {
      nextBufferIndex = Math.max(bufferIndex - 1, 0);
      nextCaretIndex = buffer[nextBufferIndex].length;
    } else if (eventKey === 'ArrowDown') {
      nextBufferIndex = Math.min(bufferIndex + 1, buffer.length - 1);
      nextCaretIndex = buffer[nextBufferIndex].length;
    } else if (eventKey === 'ArrowLeft') {
      nextCaretIndex = Math.max(caretIndex - 1, 0);
    } else if (eventKey === 'ArrowRight') {
      nextCaretIndex = Math.min(caretIndex + 1, command.length);
    } else if (
      (event.metaKey || event.ctrlKey) &&
      eventKey.toLowerCase() === 'v'
    ) {
      if (navigator.clipboard.readText !== undefined) {
        navigator.clipboard.readText().then((pastedText) => {
          const [textBefore, textAfter] = splitStringAtIndex(
            command,
            caretIndex,
          );
          nextCommand = textBefore + pastedText + textAfter;
          nextCaretIndex = caretIndex + pastedText.length;
        });
      }
    } else if (
      (event.metaKey || event.ctrlKey) &&
      eventKey.toLowerCase() === 'c'
    ) {
      const selectedText = window.getSelection()?.toString() ?? '';
      navigator.clipboard.writeText(selectedText);
    } else if (eventKey && eventKey.length === 1) {
      const [textBefore, textAfter] = splitStringAtIndex(command, caretIndex);
      nextCommand = textBefore + eventKey + textAfter;
      nextCaretIndex = caretIndex + 1;
    }
    // Update state
    if (nextCommand !== command)
      setBuffer((buffer) => [
        ...buffer.slice(0, bufferIndex),
        nextCommand,
        ...buffer.slice(bufferIndex + 1),
      ]);
    if (nextCaretIndex !== caretIndex) setCaretIndex(nextCaretIndex);
    if (nextBufferIndex !== bufferIndex) setBufferIndex(nextBufferIndex);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDownEvent);
    return () => {
      document.removeEventListener('keydown', handleKeyDownEvent);
    };
  });

  return {
    editorValue: buffer[bufferIndex],
    caretIndex,
  };
};
