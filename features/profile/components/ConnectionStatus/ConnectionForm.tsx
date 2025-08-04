import Button from '@/features/shared/components/Button';
import Image from 'next/image';
import React from 'react'

const ConnectionForm = () => {
    const status = true;
    return (
        <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-0 lg:justify-between">
                <label htmlFor="name" className="flex flex-col gap-0.5 w-1/2">
                    <span className="text-body-xl font-semibold text-neutral-900">Connection Status</span>
                    <span className="text-body-md font-medium text-neutral-500">Connect GitHub to sync and document your repositories</span>
                </label>
                <div className="w-1/2">
                    {
                        status ? (
                            <span className='bg-purple-100 text-purple-600 text-body-md py-2.5 px-3 font-semibold rounded-lg w-20 h-7'>Connected</span>
                        ) : (
                            <span className="bg-neutral-100 text-neutral-600 py-2.5 px-3 font-semibold rounded-lg w-20 h-7">Not Connected</span>
                        )
                    }
                </div>
            </div>
            <div className="w-full h-0.5 bg-neutral-100"></div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-0 lg:justify-between">
                <label htmlFor="email" className="flex flex-col gap-0.5">
                    <span className="text-body-xl font-semibold text-neutral-900">GitHub Account</span>
                    <span className="text-body-md font-medium text-neutral-500">Link your GitHub account to access your repositories.</span>
                </label>
                <div className="w-1/2">
                    {
                        status ? (
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2">
                                    <div className="bg-neutral-100 h-10 w-10 rounded-full flex items-center justify-center">
                                        <Image src={"https://fastly.picsum.photos/id/660/200/200.jpg?hmac=5UOdBCKDcPq_zS0RAVkvSD934EYVyCEdExCagJur-g8"} alt='profile picture' width={28} height={28} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className='text-body-xl font-medium text-neutral-900'>John Doe</span>
                                        <span className='text-body-md font-medium text-neutral-500'>Personal account</span>
                                    </div>
                                </div>
                                <div className="bg-neutral-50 border border-neutral-200 rounded-xl py-2.5 px-3 w-full lg:w-fit">
                                    <span className="text-body-md font-medium text-neutral-900">
                                        https://github.com/johndoe
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span className="bg-neutral-100 text-neutral-600 py-2.5 px-3 font-semibold rounded-lg w-20 h-7">No account connected</span>
                        )
                    }
                </div>
            </div>
            <div className="w-36">
                {
                    status ? (
                        <Button type='button' isDisable={true} isDark={false} className="p-2">
                            Connect GitHub
                        </Button>
                    ) : (
                        <Button type='button' isDisable={false} isDark={true} className="p-2">
                            Connect GitHub
                        </Button>
                    )
                }
            </div>
        </form>
    )
}

export default ConnectionForm