import type { ReactNode } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
