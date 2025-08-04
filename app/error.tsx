"use client";


import { TitleGradient } from '@/features/marketing/component/TitleGradient';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  return (
          <main className='flex justify-center items-center w-full h-dvh'>
            <section className='text-center'>
              <TitleGradient className='from-green-100 via-orange-300 to-green-100'>500</TitleGradient>
              <h1 className="text-title-sm md:text-title-md lg:text-title-xl mt-9">Something went wrong <br/> on our side</h1>
              <p className="max-md:font-medium md:text-body-xl mt-3">
                An unexpected error occurred. Please <br className='md:hidden'/> try again later or refresh the page.
              </p>
            </section>
          </main>
  );
}
