import React from 'react'
import SettingsSection from '../SettingsSection'
import ConnectionForm from './ConnectionForm'

const Connection = () => {
  return (
    <SettingsSection title='Connection Status' description='Connect GitHub to sync and document your repositories'>
        <ConnectionForm />
    </SettingsSection>
  )
}

export default Connection