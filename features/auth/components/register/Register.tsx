'use client'

import Button from "@/features/shared/components/Button"
import Image from "next/image"
import RegisterForm from "./RegisterForm"
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query"
import { backendUrl } from "@/features/marketing/lib/constant"
import Link from "next/link"

const queryClient = new QueryClient();

const Register = () => {
    const handleGithubAuth = async () => {
        window.location.replace(`${backendUrl}/api/auth`)
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex justify-between w-full h-full gap-2.5">
                <div className="w-full lg:w-1/2 h-full bg-neutral-50 border pt-11 px-4 sm:px-[100px] md:px-20 sm:pt-20 border-neutral-200 rounded-3xl">
                    <Image src={"/leadoc-logo.png"} alt="Leadoc" width={110} height={24} className="cursor-pointer" />
                    <div className="mt-10 mb-8 gap-2">
                        <h1 className="text-title-md text-neutral-900">Create Account</h1>
                        <p className="text-body-md font-medium text-neutral-500">Turn your repository into clean documentation with just one click</p>
                    </div>
                    <Button handleClick={handleGithubAuth} isDark={false} isDisable={false} type="button" className="w-full py-4 flex justify-center items-center gap-4 cursor-pointer">
                        <div className="flex gap-4">
                            <Image src={"/github.png"} width={24} height={24} alt="Github Icon" />
                            <span>Continue With Github</span>
                        </div>
                    </Button>
                    <div className="my-6 w-full">
                        <div className="w-full">
                            <div className="flex items-center gap-4">
                                <span className="text-body-md text-neutral-500 whitespace-nowrap">
                                    Continue with Email
                                </span>
                                <div className="flex-1 h-px bg-neutral-200" />
                            </div>
                        </div>
                    </div>
                    <RegisterForm />
                    <div className="my-6">
                        <span className="text-body-md font-medium text-neutral-500">By creating an account you agree to our <Link href={"/term-of-service"} className="text-purple-600">Terms of Service</Link> and <Link href={"/privacy-policy"} className="text-purple-600">Privacy Policy</Link></span>
                    </div>
                    <div className="flex items-center gap-2 mt-6">
                        <span className="text-body-md text-neutral-500">Already have an account?</span>

                        <div className="w-fit">
                            <Link
                                className='max-md:text-body-sm w-full p-2 bg-white border border-neutral-200 hover:bg-neutral-50 rounded-xl text-body-md font-semibold'
                                href='/login'
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden w-1/2 min-h-full lg:flex flex-col justify-end rounded-3xl p-6">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-1">
                            <span className="text-title-xl font-semibold text-neutral-900">4.8</span>
                            <span className="text-title-xxs font-semibold text-neutral-500">/5</span>
                        </div>
                        <span className="w-full text-title-xxs text-neutral-600">
                            "As a developer, I struggled to keep documentation updated with repository changes. Since using this GitHub automation tool, my workflow is more efficient. Every pull request generates clean, updated docs automatically. I can focus on building features instead of formatting documentation. It saves time and keeps our docs consistent."
                        </span>
                        <span className="text-body-xl text-neutral-900 font-semibold">Daniel Rivera, Backend Engineer @Interland.co</span>
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    )
}

export default Register