import React from 'react';
import Header from '@/features/marketing/component/Header';
import Footer from '@/features/marketing/component/Footer';

export default function LayoutMarketing({ children }: { children: React.ReactNode }) {
  return (
      <div className='text-body-md'>
        <Header/>
          {children}
        <Footer/>
      </div>
  );
}
