'use client';

import { useRef } from 'react';

export default function HackerText({
  text,
  speed = 0.25,
}: {
  text: string;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  function handleHackerHover() {
    let iterations = 0;
    const interval = setInterval(() => {
      if (!ref.current) return;
      ref.current.innerText = ref.current.innerText
        .split('')
        .map((char, index) => {
          if (index < iterations) return ref.current?.dataset.value?.[index];
          return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        })
        .join('');

      if (iterations >= (ref.current.dataset.value?.length ?? 10))
        clearInterval(interval);

      iterations += speed;
    }, 30);
  }

  return (
    <span
      ref={ref}
      className="font-mono"
      onMouseOver={handleHackerHover}
      data-value={text}
    >
      {text}
    </span>
  );
}
