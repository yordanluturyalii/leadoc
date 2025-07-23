import React from 'react';
import Header from '@/features/marketing/component/Header';
import Footer from '@/features/marketing/component/Footer';

export default function LayoutMarketing({ children }: { children: React.ReactNode }) {
  return (
      <div className='bg-neutral-50 text-body-md'>
        <Header/>
        <main className='pt-16'>
          {children}
        </main>
        <Footer/>
      </div>
  );
}
