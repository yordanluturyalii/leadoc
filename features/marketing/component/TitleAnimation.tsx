"use client"

import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText)

export const TitleAnimation = ({section, children}: {section: string, children: React.ReactNode}) => {
  useGSAP(() => {
    const titleSplit = new SplitText(`.${section}`, { type: 'chars, words' })

    gsap.from(titleSplit.chars, {
      opacity: 0,
      filter: 'blur(10px)',
      stagger: 0.01,
      scrollTrigger: {
        trigger: `.${section}-section`,
        start: 'top top',
        end: '+=1000',
        scrub: true,
        pin: true,
      },
    })
  }, [])

  return (
      <section className={`${section}-section h-screen px-5 flex flex-col items-center justify-center gap-9 text-center md:px-10`}>
        {children}
      </section>
  );
};
