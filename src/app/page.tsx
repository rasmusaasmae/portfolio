import Link from 'next/link';

import HackerText from '@/components/hacker-text';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <section className="flex flex-col items-center space-y-4">
        <h1 className="text-6xl font-bold text-center">who are you?</h1>
        <div className="flex flex-row space-x-6 text-xl">
          <Link href="/gamer" className="pointer-events-none">
            gamer
          </Link>
          <Link href="/normal" className="pointer-events-none">
            &apos;normal&apos;
          </Link>
          <Link href="/hacker">
            <HackerText />
          </Link>
        </div>
      </section>
    </main>
  );
}
