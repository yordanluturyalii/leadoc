import React from 'react'
import SettingsSection from '../SettingsSection'
import UpdatePasswordForm from './UpdatePasswordForm'

const UpdatePassword = () => {
    return (
        <SettingsSection title='Password' description='Change your current password to a new one.'>
            <UpdatePasswordForm />
        </SettingsSection>
    )
}

export default UpdatePassword