'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

export default function TerminalEditor(props: {
  editorValue: string;
  caretIndex: number;
  prompt: string;
  isFocused: boolean;
}) {
  const { editorValue, caretIndex, prompt, isFocused } = props;
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    // Calculate and update caret position
    const wrapper = document.getElementById('terminalEditorWrapper');
    if (!wrapper) return;

    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.whiteSpace = 'pre-wrap';
    span.style.fontSize = window.getComputedStyle(wrapper).fontSize;
    span.style.fontFamily = window.getComputedStyle(wrapper).fontFamily;
    span.innerText = editorValue.slice(caretIndex);
    document.body.appendChild(span);
    const width = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    setCaretPosition(-width);
  }, [editorValue, caretIndex]);

  return (
    <div
      id="terminalEditorWrapper"
      className="w-full whitespace-pre-wrap font-mono text-sm"
    >
      {prompt} {editorValue}
      <span className="opacity-50">
        <span
          style={{ left: caretPosition }}
          className={cn(
            'relative bg-gray-400',
            `${isFocused ? 'animate-blink' : ''}`,
          )}
        >
          _
        </span>
      </span>
    </div>
  );
}
