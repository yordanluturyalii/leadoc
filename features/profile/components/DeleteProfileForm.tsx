'use client';

import Button from "@/features/shared/components/Button"

const DeleteProfileForm = () => {
    return (
        <form className="w-flex">
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
                <label htmlFor="name" className="flex flex-col gap-0.5 w-full lg:w-[376px]">
                    <span className="text-body-xl font-semibold text-neutral-900">Delete Account</span>
                    <span className="text-body-md font-medium text-neutral-500">Deleting your account will permanently remove all associated data from our systems. This action is final and cannot be undone.</span>
                </label>
                <div className="w-44">
                    <Button isDanger={true} isDark={false} type="button" handleClick={() => alert("Delete Profile")} icon={"/trash.svg"} isDisable={false} className="p-2">
                        Delete Profile
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default DeleteProfileForm