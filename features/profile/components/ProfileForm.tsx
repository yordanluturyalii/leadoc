'use client';

import Button from "@/features/shared/components/Button"
import Input from "@/features/shared/components/Input"

const ProfileForm = () => {
    return (
        <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-0 lg:justify-between">
                <label htmlFor="name" className="flex flex-col gap-0.5 w-1/2">
                    <span className="text-body-xl font-semibold text-neutral-900">Name</span>
                    <span className="text-body-md font-medium text-neutral-500">Name to show on your profile</span>
                </label>
                <div className="lg:w-1/2 w-full">
                    <div className="lg:w-[296px] w-full">
                        <Input
                            id="name"
                            label=""
                            name="name"
                            type="text"
                            value={"John Doe"}
                            onChange={() => { }}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-0.5 bg-neutral-100"></div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-0 lg:justify-between">
                <label htmlFor="email" className="flex flex-col gap-0.5 w-1/2">
                    <span className="text-body-xl font-semibold text-neutral-900">Email</span>
                    <span className="text-body-md font-medium text-neutral-500">Used for login, notifications, and billing.</span>
                </label>
                <div className="lg:w-1/2 w-full">
                    <div className="lg:w-[296px] w-full">
                        <Input
                            id="email"
                            label=""
                            name="email"
                            type="email"
                            value={"johndoe@gmail.com"}
                            onChange={() => { }}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="w-28">
                <Button type='submit' isDisable={false} isDark={false} className="p-2">
                    Save Changes
                </Button>
            </div>
        </form>
    )
}

export default ProfileForm