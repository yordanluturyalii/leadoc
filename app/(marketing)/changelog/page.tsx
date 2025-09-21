import React from 'react';
import { TitleGradient } from '@/features/marketing/component/TitleGradient';
import Link from 'next/link';
import { CtaSection } from '@/features/marketing/component/CTASection';
import Image from 'next/image';

export default function ChanglogPage() {
  return (
    <main className='overflow-hidden xl:pt-20 pt-16 bg-neutral-100'>
      {/* About Section */}
      <section className='px-5 py-10 flex flex-col justify-center lg:items-center md:px-10 md:py-20'>
        <div className="flex flex-col items-start lg:w-[1200px] ">
          <TitleGradient className='from-green-100 via-orange-300 to-green-100'>
            Changelog
          </TitleGradient>

          <h1 className="text-title-sm mt-9 md:text-title-md lg:text-title-xl">
            New updates and <br className="md:hidden" /> improvements
          </h1>

          <div className="flex gap-4 items-center font-medium mt-5">
            <p>Follow us for updates:</p>
            <Link href='https://www.linkedin.com/company/interlandstudio' target='_blank' className='underline'>LinkedIn</Link>
            <Link href='https://www.instagram.com' target='_blank' className='underline'>Instagram</Link>
          </div>
        </div>
      </section>

      {/* Update Section */}
      <section className="px-5 py-20 bg-neutral-50 flex flex-col justify-center items-center gap-10 md:px-10">
        <section className="flex flex-col gap-6 max-w-[1200px] lg:flex-row lg:gap-10">
          <p className="font-medium text-neutral-600 w-[200px]">
            July 8, 2025
          </p>

          <div className="max-w-[960px]">
            <TitleGradient className='from-purple-100 via-green-300 to-purple-100'>
              Feature Improvements
            </TitleGradient>

            <h1 className="text-title-sm mt-6">README generator performance boosted</h1>
            <div className="grid gap-6 mt-8">
              <p className="font-medium">
                We’ve optimized how Leadoc processes and compiles your README. Generation is now noticeably faster,
                especially for larger repositories — so you can go from code to clean docs in less time.
              </p>
            </div>
          </div>
        </section>

        <div className='h-[1.5px] w-full bg-neutral-200 max-w-[1200px]' />

        <section className="flex flex-col gap-6 max-w-[1200px] lg:flex-row lg:gap-10">
          <p className="font-medium text-neutral-600 w-[200px]">
            July 1, 2025
          </p>

          <div className="max-w-[960px]">
            <TitleGradient className='from-indigo-100 via-pink-300 to-indigo-100'>
              New Feature
            </TitleGradient>

            <h1 className="text-title-sm mt-6">Introducing README Analytics</h1>

            <div className="grid gap-6 mt-8">
              <p className="font-medium">
                Keeping track of your documentation just got easier. With Leadoc Analytics, you can now see how your
                README is performing in real time. <br className='max-md:hidden' />
                From total views to interaction patterns, get a clear picture of how people engage with your project
                documentation.
              </p>

              <Image src='/Preview-Container.png' alt='Preview Container' width={960} height={400}
                className='rounded-xl' />

              <p className="font-medium">
                Find out which sections are getting the most attention — and which ones might need a little extra
                love. You’ll also be able to track when your README was last updated and how often it changes over
                time. These insights help you keep your documentation relevant, up to date, and more useful for anyone
                visiting your repository. No setup required. Just connect your repo, and Leadoc will take care of the
                rest.
              </p>
            </div>
          </div>
        </section>

      </section>

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
}
