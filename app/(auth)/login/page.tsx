import Image from 'next/image';
import LoginForm from '@/features/auth/components/login/LoginForm';
import Link from 'next/link';
import Button from '@/features/shared/components/Button';

export default function LoginPage() {

  const handleGithubAuth = async () => {
    window.location.replace('http://localhost:3001/api/auth')
  }

  return (
      <div className='w-full lg:w-1/2 h-full bg-neutral-50 border-[1px] border-neutral-200 md:p-20 rounded-3xl p-5'>
        <div className="mb-10">
          <Image src={'/leadoc-logo.png'} alt='Leadoc' width={110} height={24}/>
        </div>
        <div className="mb-8">
          <h1 className="text-title-md text-neutral-900">Sign in</h1>
          <p className="text-body-md text-neutral-500">Sign in to your account</p>
        </div>

        <Button icon='/github.png' type='button' isDisable={false} isDark={false}>
          Continue With Github
        </Button>

        <div className="my-6 w-full flex items-center gap-3">
          <span className="text-body-md text-neutral-500">Continue with Email</span>
          <div className="flex-1 h-px bg-neutral-200"/>
        </div>

        <LoginForm/>

        <div className="flex items-center gap-2 mt-6">
          <span className="text-body-md text-neutral-500">Already have an account?</span>

          <div className="w-fit">
            <Link
                className='w-full p-2 bg-white border border-neutral-200 hover:bg-neutral-50 rounded-xl text-body-md font-semibold'
                href='/login'
            >
              Back to Sign in
            </Link>
          </div>
        </div>
      </div>
  )
}
