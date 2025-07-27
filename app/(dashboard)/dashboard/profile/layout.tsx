import NavigationMenu from "@/features/profile/components/NavigationMenu"

const ProfileLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="p-3 lg:px-7 lg:py-3">
            <h1 className="text-neutral-900 text-title-xxs font-semibold mb-2 lg:mb-6">Account Settings</h1>
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
                <NavigationMenu />
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout