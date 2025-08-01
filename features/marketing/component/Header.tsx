"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { animationSection, socialMedia } from '@/features/marketing/lib/constant';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText)

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false)
  const [company, setCompany] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const yValue = useRef(0)

  useGSAP(() => {
    let lastScroll = window.scrollY;
    let down = 0;
    let up = 0;

    const handleScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScroll;

      if (delta > 0) {
        down += delta;
        up = 0;
        if (down > 130 && yValue.current === 0) {
          gsap.to('header', {
            y: '-100%',
            duration: 0.5,
            ease: 'power2.out',
          });
          yValue.current = -100;
          down = 0;
        }
      } else if (delta < 0) {
        up -= delta;
        down = 0;
        if (up > 20 && yValue.current !== 0) {
          gsap.to('header', {
            y: '0%',
            duration: 0.5,
            ease: 'power2.out',
          });
          yValue.current = 0;
          up = 0;
        }
      }

      lastScroll = current;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuHandler = () => {
    setMenu(!menu)
  }

  const companyHandler = () => {
    setCompany(!company)
  }

  return (
      <>
        <header
            className={`fixed w-full top-0 left-0 z-50 flex justify-center ${showDropdown || menu ? 'bg-neutral-50' : 'backdrop-blur-sm'}`}>
          <div className="w-full max-w-[1200px]">
            <nav className="flex justify-between items-center py-5 max-lg:px-10 ">
              <Link href='/' className='w-[161px]'>
                <Image src='/leadoc-logo.svg' alt='leadoc' height={24} width={100}/>
              </Link>

              <button
                  className="xl:hidden cursor-pointer"
                  onClick={menuHandler}
                  aria-label="Toggle menu"
                  type='button'
              >
                {menu ? <X/> : <Menu/>}
              </button>

              <ul className="hidden xl:flex gap-6 font-medium">
                <li className="">
                  <Link href='/#features'>
                    Features
                  </Link>
                </li>
                <li className="">
                  <Link href='/#pricing'>
                    Pricing
                  </Link>
                </li>
                <li className="group cursor-pointer"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                  <span>Company</span>

                  <HeaderHover/>
                </li>
                <li className="">
                  <Link href='/changelog'>
                    Changelog
                  </Link>
                </li>
              </ul>

              <div className="hidden xl:flex gap-4 items-center font-semibold">
                <Link href='/login' className="py-2 px-3 border border-neutral-200 rounded-lg">Sign in</Link>
                <Link href='/signup' className="py-2 px-3 bg-neutral-900 rounded-lg text-white">Sign Up</Link>
              </div>
            </nav>

            <HeaderHamburger isVisible={menu} menuHandler={menuHandler} company={company} companyHandler={companyHandler}/>
          </div>
        </header>

        <div className={`transition-all duration-300 ${
            showDropdown ? 'bg-black/35 backdrop-blur-sm fixed inset-0 z-40' : ''
        }`}/>
      </>
  );
};

const HeaderHover = () => {
  return (
      <div
          className="absolute top-full left-0 w-screen bg-white py-10 px-8 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
      >
        <div className="w-full max-w-[1200px] flex justify-between">
          <div>
            <h3 className="text-neutral-500 pl-2">COMPANY</h3>
            <div className="flex gap-14 mt-6">
              <Link href='/about' className="group hover:bg-neutral-100 duration-500 p-2 w-[400px]">
                <h3 className="mb-3">About</h3>
                <p className="text-neutral-500 group-hover:text-neutral-900 duration-500">
                  Discover what sparked Leadoc and how we're helping developers write better READMEs with less
                  effort.
                </p>
              </Link>
              <Link href='/contact' className="group hover:bg-neutral-100 duration-500 p-2 w-[350px]">
                <h3 className="mb-3">Contact</h3>
                <p className="text-neutral-500 group-hover:text-neutral-900 duration-500">
                  Have questions, feedback, or just want to say hi? We’d love to hear from you.
                </p>
              </Link>
            </div>
          </div>

          <div className='w-[160px]'>
            <h3 className="text-neutral-500">SOCIALS</h3>
            <ul className='mt-7 flex flex-col gap-2'>
              {socialMedia.map((social) => (
                  <li key={social.name}>
                    <Link href={social.link}>{social.name}</Link>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  )
}

const HeaderHamburger = ({ isVisible, menuHandler, company, companyHandler }: {
  isVisible: boolean,
  menuHandler: () => void,
  company: boolean,
  companyHandler: () => void
}) => {
  useGSAP(() => {
    if (isVisible) {
      gsap.to('.hamburger', {
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        duration: 0.2,
        ease: 'power2.out',
      })
    } else {
      gsap.timeline().to('.hamburger', {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.2,
        ease: 'power2.in',
      }).to('.hamburger', {
        y: -30,
        duration: 0.2,
        delay: 0.4
      })
    }
  }, [isVisible])

  return (
      <div
          style={{ opacity: 0, pointerEvents: 'none' }}
          className="hamburger fixed top-[64px] left-0 w-full h-[calc(100dvh-64px)] bg-white z-40 flex flex-col justify-between p-10 transition-opacity duration-700 xl:hidden overflow-hidden ease-in-out"
      >
        <ul className="flex flex-col gap-4">
          <li><Link href='/#features' onClick={menuHandler}>Features</Link></li>
          <div className='bg-neutral-100 h-px w-full'/>
          <li><Link href='/#pricing' onClick={menuHandler}>Pricing</Link></li>
          <div className='bg-neutral-100 h-px w-full'/>
          <button onClick={companyHandler} type='button'>
            <div className="w-full flex justify-between items-center">
              <span>Company</span>
              {company ? <ChevronUp color="#171717"/> : <ChevronDown color="#171717"/>}
            </div>
            <div className={`grid overflow-hidden transition-all duration-300 ${
                company ? 'grid-rows-[1fr] opacity-100 mt-7' : 'grid-rows-[0fr] opacity-0'
            }`}>
              <div className="text-left overflow-hidden text-neutral-600 font-medium flex flex-col gap-3">
                <Link className='cursor-pointer' onClick={menuHandler} href='/about'>About</Link>
                <Link className='cursor-pointer' onClick={menuHandler} href='/contact'>Contact</Link>
              </div>
            </div>
          </button>
          <div className='bg-neutral-100 h-px w-full'/>
          <li><Link href='/changelog' onClick={menuHandler}>Changelog</Link></li>
        </ul>

        <div className="flex flex-col gap-4 w-full text-center font-semibold">
          <Link href='/login' className="py-2 border border-neutral-200 rounded-lg">Sign in</Link>
          <Link href='/signup' className="py-2 bg-neutral-900 rounded-lg text-white">Sign Up</Link>
        </div>
      </div>
  )
}


export default Header;