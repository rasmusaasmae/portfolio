import { FolderClosed, Maximize2, Minus, X } from 'lucide-react';

import { cn } from '@/lib/utils';

function CloseButton(props: {}) {
  return (
    <button
      disabled
      className="grid h-3 w-3 place-content-center rounded-full bg-[#d9515d]"
    >
      <X
        className="h-2 w-2 text-black opacity-0 group-hover:opacity-80"
        strokeWidth={4}
      />
    </button>
  );
}
function MinimizeButton(props: {}) {
  return (
    <button
      disabled
      className="grid h-3 w-3 place-content-center rounded-full bg-[#f4c025]"
    >
      <Minus
        className="h-2 w-2 text-black opacity-0 group-hover:opacity-80"
        strokeWidth={4}
      />
    </button>
  );
}
function MaximizeButton(props: {}) {
  return (
    <button
      disabled
      className="grid h-3 w-3 place-content-center rounded-full bg-[#3ec930]"
    >
      <Maximize2
        className="h-2 w-2 text-black opacity-0 group-hover:opacity-80"
        strokeWidth={4}
      />
    </button>
  );
}
function Buttons(props: {}) {
  return (
    <div className="group flex flex-row space-x-2">
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
      <FolderClosed className="mr-1 inline h-4 w-4" strokeWidth={3} />
      <span>
        {dirName} — -zsh — 80
        <X className="inline h-3 w-3" strokeWidth={4} />
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
        'flex h-7 w-full flex-row items-center justify-between border-b border-b-black bg-[#353637] px-2',
        `${isFocused ? '' : 'bg-[#252627]'}`,
      )}
    >
      <Buttons />
      <Title dirName={dirName} />
      <div className="w-[52px]" />
    </div>
  );
}
