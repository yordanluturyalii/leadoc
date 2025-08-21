
import { TitleGradient } from '@/features/marketing/component/TitleGradient';
import Button from '@/features/shared/components/Button';
import { Metadata } from 'next';
import Header from '@/features/marketing/component/Header';
import Footer from '@/features/marketing/component/Footer';
import React from 'react';

export const metadata: Metadata = {
  title: '404 - Not Found'
}

export default function NotFound() {
  return (
      <div className='text-body-md'>
        <Header/>
        <main className='xl:pt-20 pt-16 flex justify-center items-center'>
          <div className="py-20 px-5 text-center flex flex-col justify-center items-center">
            <TitleGradient className='from-green-100 via-orange-300 to-green-100'>404</TitleGradient>
            <h1 className="text-title-sm mt-9 md:text-title-md lg:text-title-xl">
              Page you’re looking for is not available
            </h1>
            <p className="mt-3 max-md:font-medium md:text-body-xl">
              This page is no longer here. Let’s get you back on track.
            </p>
            <Button type='button' isDisable={false} isDark={true} className='px-6 py-3 mt-10'>
              Go to homepage
            </Button>
          </div>
        </main>
        <Footer/>
      </div>
  );
}
