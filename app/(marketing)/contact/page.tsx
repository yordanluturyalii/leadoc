import React from 'react';
import { CtaSection } from '@/features/marketing/component/CTASection';
import { TitleGradient } from '@/features/marketing/component/TitleGradient';
import { socialMedia } from '@/features/marketing/lib/constant';
import Link from 'next/link';
import { ContactForm } from '@/features/marketing/component/ContactForm';

export default function ContactPage() {
  return (
      <main className='overflow-hidden xl:pt-20 pt-16 bg-neutral-100'>
        {/* About Section */}
        <section className="px-5 py-20 flex flex-col justify-center items-center gap-10">
          <div className="text-center">
            <TitleGradient className='from-green-100 via-orange-300 to-green-100'>Get in Touch</TitleGradient>

            <h1 className="mt-9 text-title-sm md:text-title-md lg:text-title-xl">
              Talk with our team
            </h1>

            <p className="mt-3 max-md:font-medium md:text-body-xl">
              Whether it’s a question a suggestion or just a quick hello we’re all ears and happy to chat.
              <br className="max-md:hidden"/> We love hearing
              from people like you and we’re always here to help however we can.
            </p>
          </div>

          <ContactForm/>

          <div className="flex justify-center items-center gap-6">
            {socialMedia.map((item) => (
                <Link key={item.name} href={item.link}>{item.name}</Link>
            ))}
          </div>
        </section>

        <CtaSection className='bg-neutral-100'/>
      </main>
  );
}