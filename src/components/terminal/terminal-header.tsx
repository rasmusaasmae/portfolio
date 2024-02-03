import { FolderClosed, Maximize2, Minus, X } from 'lucide-react';

import { cn } from '@/lib/utils';

function CloseButton(props: {}) {
  return (
    <button
      disabled
      className="w-3 h-3 rounded-full bg-[#d9515d] grid place-content-center"
    >
      <X
        className="w-2 h-2 text-black group-hover:opacity-80 opacity-0"
        strokeWidth={4}
      />
    </button>
  );
}
function MinimizeButton(props: {}) {
  return (
    <button
      disabled
      className="w-3 h-3 rounded-full bg-[#f4c025] grid place-content-center"
    >
      <Minus
        className="w-2 h-2 group-hover:opacity-80 text-black opacity-0"
        strokeWidth={4}
      />
    </button>
  );
}
function MaximizeButton(props: {}) {
  return (
    <button
      disabled
      className="w-3 h-3 rounded-full bg-[#3ec930] grid place-content-center"
    >
      <Maximize2
        className="w-2 h-2 group-hover:opacity-80 text-black opacity-0"
        strokeWidth={4}
      />
    </button>
  );
}
function Buttons(props: {}) {
  return (
    <div className="flex flex-row space-x-2 group">
      <CloseButton />
      <MinimizeButton />
      <MaximizeButton />
    </div>
  );
}
function Title(props: { dirName: string }) {
  const { dirName } = props;
  return (
    <div className="text-sm font-semibold opacity-70">
      <FolderClosed className="inline w-4 h-4 mr-1" strokeWidth={3} />
      <span>
        {dirName} — -zsh — 80
        <X className="inline w-3 h-3" strokeWidth={4} />
        24
      </span>
    </div>
  );
}
export default function TerminalHeader(props: {
  isFocused: boolean;
  dirName: string;
}) {
  const { isFocused, dirName } = props;
  return (
    <div
      className={cn(
        'w-full h-7 border-b border-b-black bg-[#353637] flex flex-row items-center justify-between px-2',
        `${isFocused ? '' : 'bg-[#252627]'}`,
      )}
    >
      <Buttons />
      <Title dirName={dirName} />
      <div className="w-[52px]" />
    </div>
  );
}
