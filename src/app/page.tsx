import Link from 'next/link';

import HackerText from '@/components/hacker-text';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <section className="flex flex-col items-center space-y-4">
        <h1 className="text-center text-6xl font-bold">who are you?</h1>
        <div className="flex flex-row space-x-6 text-xl">
          <Link href="/biologist">biologist</Link>
          <Link href="/hacker">
            <HackerText />
          </Link>
        </div>
      </section>
    </main>
  );
}
