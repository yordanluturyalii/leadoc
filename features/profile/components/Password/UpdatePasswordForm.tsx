'use client'

import Button from '@/features/shared/components/Button'
import Input from '@/features/shared/components/Input'
import React from 'react'

const UpdatePasswordForm = () => {
    return (
        <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-0 lg:justify-between">
                <label htmlFor="name" className="flex flex-col gap-0.5 w-1/2">
                    <span className="text-body-xl font-semibold text-neutral-900">Current Password</span>
                    <span className="text-body-md font-medium text-neutral-500">Enter your existing password to confirm it's you.</span>
                </label>
                <div className="lg:w-1/2 w-full">
                    <div className="lg:w-[296px] w-full">
                        <Input
                            id="current_password"
                            error={"The current password you entered is incorrect."}
                            label=""
                            name="current_password"
                            type="password"
                            value={'johndoebudi'}
                            onChange={() => { }}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-0.5 bg-neutral-100"></div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-0 lg:justify-between">
                <label htmlFor="email" className="flex flex-col gap-0.5 w-1/2">
                    <span className="text-body-xl font-semibold text-neutral-900">New Password</span>
                    <span className="text-body-md font-medium text-neutral-500">Choose a strong password you haven't used before.</span>
                </label>
                <div className="lg:w-1/2 w-full">
                    <div className="lg:w-[296px] w-full">
                        <Input
                            id="new_password"
                            label=""
                            name="new_password"
                            type="password"
                            value={"johndoe@gmail.com"}
                            onChange={() => { }}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-0 lg:justify-between">
                <label htmlFor="email" className="flex flex-col gap-0.5 w-1/2">
                    <span className="text-body-xl font-semibold text-neutral-900">Confirm New Password</span>
                    <span className="text-body-md font-medium text-neutral-500">Re-enter your new password to make sure it matches.</span>
                </label>
                <div className="lg:w-1/2 w-full">
                    <div className="lg:w-[296px] w-full">
                        <Input
                            id="confirm_new_password"
                            label=""
                            name="confirm_new_password"
                            type="password"
                            value={"johndoe@gmail.com"}
                            onChange={() => { }}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="w-36">
                <Button type='submit' isDisable={false} isDark={false} className="p-2">
                    Update Password
                </Button>
            </div>
        </form>
    )
}

export default UpdatePasswordForm