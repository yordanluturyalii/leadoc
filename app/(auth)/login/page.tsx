import Image from 'next/image';
import LoginForm from '@/features/auth/components/login/LoginForm';
import Link from 'next/link';
import Button from '@/features/shared/components/Button';

export default function LoginPage() {

  const handleGithubAuth = async () => {
    window.location.replace('http://localhost:3001/api/auth')
  }

  return (
      <div className="flex justify-between w-full h-full gap-2.5">
        <div className='w-full lg:w-1/2 h-full bg-neutral-50 border-[1px] border-neutral-200 py-5 px-4 md:p-20 rounded-3xl'>
          <div className="mb-10">
            <Image src={'/leadoc-logo.png'} alt='Leadoc' width={110} height={24}/>
          </div>
          <div className="mb-8">
            <h1 className="text-title-md text-neutral-900">Sign in</h1>
            <p className="text-body-md text-neutral-500">Sign in to your account</p>
          </div>

          <Button icon='/github.png' type='button' isDisable={false} isDark={false} className='w-full py-3'>
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
                  className='max-md:text-body-sm w-full p-2 bg-white border border-neutral-200 hover:bg-neutral-50 rounded-xl text-body-md font-semibold'
                  href='/register'
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden w-1/2 lg:flex flex-col justify-end rounded-3xl p-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1">
              <span className="text-title-md font-semibold text-neutral-900 leading-9">4.8</span>
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
  )
}
