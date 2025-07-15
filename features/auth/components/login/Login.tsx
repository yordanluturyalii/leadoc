"use client";

import LoginForm from '@/features/auth/components/login/LoginForm';
import Button from '@/features/shared/components/Button';
import Link from 'next/link';
import Image from 'next/image';

const Login = () => {

  const handleGithubAuth = async () => {
    window.location.replace('http://localhost:3001/api/auth')
  }
  return (
      <div className='bg-neutral-50 border-[1px] border-neutral-200 md:p-20 rounded-3xl p-5'>
        <div className="mb-10">
          <Image src={'/leadoc-logo.png'} alt='Leadoc' width={110} height={24}/>
        </div>
        <div className="mb-8">
          <h1 className="text-title-md text-neutral-900">Create account</h1>
          <p className="text-body-md text-neutral-500">Turn your repository into clean documentation with just one
            click</p>
        </div>

        <Button icon='/github.png' type='button' isDisable={false} isDark={false} handleClick={handleGithubAuth}>
          Continue With Github
        </Button>

        <div className="my-6 w-full flex items-center gap-3">
          <span className="text-body-md text-neutral-500">Continue with Email</span>
          <div className="flex-1 h-px bg-neutral-200"/>
        </div>

        <LoginForm/>

        <div className="my-6">
          <span className="text-body-md text-neutral-500">By creating an account you agree to our {' '}
            <Link href='/' className='text-purple-600'>Terms of Service</Link>
            {' '} and {' '}
            <Link href='/' className='text-purple-600'>Privacy Policy</Link>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-body-md text-neutral-500">Already have an account?</span>
          <div className="w-16">
            <Button type='button' isDisable={false} isDark={false} handleClick={() => {
              console.log('hai')
            }}>
              Sign In
            </Button>
          </div>
        </div>
      </div>
  );
};

export default Login;