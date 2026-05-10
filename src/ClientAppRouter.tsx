'use client';

import dynamic from 'next/dynamic';

const AppRouter = dynamic(() => import('./AppRouter'), { ssr: false });

export default function ClientAppRouter() {
  return <AppRouter />;
}
