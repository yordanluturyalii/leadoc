import React from 'react';
import Header from '@/features/marketing/component/Header';
import Footer from '@/features/marketing/component/Footer';
import { CtaSection } from '@/features/marketing/component/CTASection';

export default function LayoutMarketing({ children }: { children: React.ReactNode }) {
  return (
      <div className='text-body-md'>
        <Header/>
          {children}
        <CtaSection/>
        <Footer/>
      </div>
  );
}