"use client";

import Image from 'next/image';
import { footerCompany, footerFeatures, socialMedia } from '@/features/marketing/lib/constant';
import Link from 'next/link';

const Footer = () => {
  return (
      <footer className='bg-neutral-950 px-5 pt-20 pb-10 flex flex-col gap-18 text-white'>
        <div className="flex flex-col gap-11 md:flex-row md:justify-between">
          <div className="flex flex-col gap-6 md:justify-between">
            <Image src='/leadoc-logo-negative.svg' alt='leadoc' height={24} width={100}/>
            <span>The fastest way to turn code into clear documentation</span>
          </div>

          <div className="flex justify-around gap-10 w-full">
            <div>
              <h3 className='text-neutral-300'>FEATURES</h3>

              <ul className='flex flex-col gap-3 mt-5'>
                {footerFeatures.map((feature) => (
                    <li key={feature.name}>
                      <Link href={feature.link}>{feature.name}</Link>
                    </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-neutral-300'>COMPANY</h3>

              <ul className='flex flex-col gap-3 mt-5'>
                {footerCompany.map((feature) => (
                    <li key={feature.name}>
                      <Link href={feature.link}>{feature.name}</Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Image src='/footer-leadoc-vec.svg' alt='leadoc' height={277} width={1120} className='w-full h-auto'/>

        <div className="flex flex-col gap-4 items-center md:flex-row-reverse md:justify-between">
          <ul className="flex gap-6">
            {socialMedia.map((social) => (
                <li key={social.name}>
                  <Link href={social.link}>{social.name}</Link>
                </li>
            ))}
          </ul>

          <div className="flex flex-col gap-6 items-center md:flex-row-reverse">
            <ul className="flex gap-6">
              <li>
                <Link href='/term-of-service'>Term of Service</Link>
              </li>
              <li>
                <Link href='/privacy-policy'>Privacy Policy</Link>
              </li>
            </ul>

            <span>@ Leadoc 2025</span>
          </div>
        </div>
      </footer>
  );
};

export default Footer;