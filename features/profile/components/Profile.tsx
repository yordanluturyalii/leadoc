import DeleteProfileForm from "./DeleteProfileForm"
import ProfileForm from "./ProfileForm"
import SettingsSection from "./SettingsSection"

const Profile = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-5">
                <SettingsSection title="Profile" description="Manage your account identity details.">
                    <ProfileForm />
                </SettingsSection>
                <SettingsSection title="Delete Account" color="danger" description="This will permanently delete your account and all related information. The process is irreversible.">
                    <DeleteProfileForm />
                </SettingsSection>
            </div>
        </>
    )
}

export default Profile