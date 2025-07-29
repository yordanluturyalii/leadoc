"use client"

import Link from 'next/link';

export const CtaSection = () => {
  return (
      <section className="py-20 px-5 md:px-10 flex justify-center">
        <div
            className="w-full max-w-[1200px] bg-[url('/bg-CTA-section.png')] bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden">
          <div
              className="aspect-[30/13] w-full min-h-[420px] lg:h-auto bg-[#050505]/60 text-white text-center flex flex-col items-center justify-center">
            <div className='px-5 flex flex-col items-center'>
              <h1 className="text-title-sm md:text-title-md lg:text-title-xl">Ready to simplify your README?</h1>
              <p className="max-w-[465px] font-medium mt-4 mb-12 md:text-body-xl">
                Write better READMEs in seconds with Leadoc and let your code speak clearly, without the extra effort.
              </p>

              <div className="relative">
                <div
                    className="absolute -bottom-1 top-6 inset-0 bg-gradient-to-r from-[#B151FF] via-[#FA0011] to-[#B151FF] blur-md"
                />
                <Link href='/'
                      className='relative block h-[44px] py-3 px-4 bg-white rounded-lg text-neutral-900 font-medium'>
                  Get Started for Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};