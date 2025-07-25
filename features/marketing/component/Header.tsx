"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronUp, CircleMinus, CirclePlus, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { socialMedia } from '@/features/marketing/lib/constant';

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false)
  const [company, setCompany] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  const menuHandler = () => {
    setMenu(!menu)
  }

  const companyHandler = () => {
    setCompany(!company)
  }

  return (
      <>
        <header className='fixed w-full top-0 left-0 bg-neutral-50 z-50'>
          <nav className="flex justify-between items-center py-5 px-10">
            <Link href='/'>
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

            <ul className="hidden xl:flex gap-6">
              <li className="">
                <Link href='#'>
                  Features
                </Link>
              </li>
              <li className="">
                <Link href='/'>
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
                <Link href='/'>
                  Changelog
                </Link>
              </li>
            </ul>

            <div className="hidden xl:flex gap-4 items-center font-semibold">
              <Link href='/login' className="py-2 px-3 border border-neutral-200 rounded-lg">Sign in</Link>
              <Link href='/signup' className="py-2 px-3 bg-neutral-900 rounded-lg text-white">Sign Up</Link>
            </div>
          </nav>

          <HeaderHamburger menu={menu} company={company} companyHandler={companyHandler}/>

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
          className="absolute top-full left-0 w-screen bg-white py-10 px-8 flex justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
      >
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
  )
}

const HeaderHamburger = ({ menu, company, companyHandler }: { menu: boolean, company: boolean, companyHandler: () => void }) => {
  return (
      <div className={`flex flex-col justify-between p-10 transition-opacity duration-700 xl:hidden overflow-hidden ease-in-out ${
        menu ? 'h-[92dvh] opacity-100 visible' : ' opacity-0 invisible hidden'
      }`}>
        <ul className="flex flex-col gap-4">
          <li className="">
            <Link href='/'>
              Features
            </Link>
          </li>

          <div className='bg-neutral-100 h-px w-full'/>

          <li className="">
            <Link href='/'>
              Pricing
            </Link>
          </li>

          <div className='bg-neutral-100 h-px w-full'/>

          <button
              type='button'
              onClick={companyHandler}
          >
            <div
                className="w-full flex justify-between items-center"
            >
              <span>Company</span>
              {company ? <ChevronUp color="#171717"/> : <ChevronDown color="#171717"/>}
            </div>

            <div className={`grid overflow-hidden transition-all duration-300 ${
                company ? 'grid-rows-[1fr] opacity-100 mt-7' : 'grid-rows-[0fr] opacity-0'
            }`}>
              <div className="text-left overflow-hidden text-neutral-600 font-medium flex flex-col gap-3">
                <Link className='overflow-hidden' href='/abouhait'>About</Link>
                <Link className='overflow-hidden' href='/about'>Contact</Link>
              </div>
            </div>
          </button>

          <div className='bg-neutral-100 h-px w-full'/>

          <li className="">
            <Link href='/'>
              Changelog
            </Link>
          </li>
        </ul>

        <div className="flex flex-col gap-4 w-full text-center font-semibold">
          <Link href='/login' className="py-2 border border-neutral-200 rounded-lg">
            Sign in
          </Link>
          <Link href='/signup' className="py-2 bg-neutral-900 rounded-lg text-white">Sign Up</Link>
        </div>
      </div>
  )
}

export default Header;