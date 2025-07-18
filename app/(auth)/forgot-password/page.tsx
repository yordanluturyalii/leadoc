import Image from 'next/image';
import ForgotPasswordForm from '@/features/auth/components/forgot-password/ForgotPasswordForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
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
          <Link
              className='w-full p-2 bg-white border border-neutral-200 hover:bg-neutral-50 rounded-xl text-body-md font-semibold'
              href='/login'
          >
            Back to Sign in
          </Link>
        </div>
      </div>
  )
}
