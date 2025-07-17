"use client";

import ForgotPasswordForm from '@/features/auth/components/login/ForgotPasswordForm';
import Button from '@/features/shared/components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {
  const router = useRouter();

  return (
      <div className="flex justify-between w-full h-full gap-2.5">
        <div className='w-full lg:w-1/2 h-full bg-neutral-50 border-[1px] border-neutral-200 md:p-20 rounded-3xl p-5'>
          <div className="mb-10">
            <Image src={'/leadoc-logo.png'} alt='Leadoc' width={110} height={24}/>
          </div>
          <div className="mb-8">
            <h1 className="text-title-md text-neutral-900">Reset password</h1>
            <p className="text-body-md text-neutral-500">Enter your email and we'll send you a password reset link.</p>
          </div>

          <ForgotPasswordForm/>

          <div className="w-fit mt-6">
            <Button type='button' isDisable={false} isDark={false} handleClick={() => {
              router.push('/login')
            }}>
              Back to Sign in
            </Button>
          </div>
        </div>

        <div className="hidden w-1/2 lg:flex flex-col justify-end rounded-3xl p-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1">
              <span className="text-title-xl font-semibold text-neutral-900">4.8</span>
              <span className="text-title-xxs font-semibold text-neutral-500">/5</span>
            </div>
            <span className="w-full text-title-xxs text-neutral-600">
              "As a developer, I struggled to keep documentation updated with repository changes.
              Since using this GitHub automation tool, my workflow is more efficient.
              Every pull request generates clean, updated docs automatically.
              I can focus on building features instead of formatting documentation.
              It saves time and keeps our docs consistent."
            </span>
            <span
                className="text-body-xl text-neutral-900 font-semibold">John Doe, Backend Engineer @Interland.co</span>
          </div>
        </div>
      </div>
  );
};

export default ForgotPassword;