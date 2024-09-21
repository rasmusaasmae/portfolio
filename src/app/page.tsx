import Link from 'next/link';

import HackerText from '@/components/hacker-text';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        <Link href="/whoami">
          <HackerText text="whoami" />
        </Link>
      </h1>
    </main>
  );
}
