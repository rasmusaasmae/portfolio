export default function TerminalContent(props: { lines: any[] }) {
  const { lines } = props;
  return (
    <ul className="w-full font-mono text-sm">
      {lines.map((line, idx) => (
        <li key={idx} className="whitespace-pre-wrap">
          {line}
        </li>
      ))}
    </ul>
  );
}
