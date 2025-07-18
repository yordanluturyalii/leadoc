import React from 'react';
import Input from '@/features/shared/components/Input';
import Button from '@/features/shared/components/Button';

const ResetPasswordForm = () => {
  return (
      <form className='flex flex-col gap-6'>
        <Input
            label='Password'
            name='Password'
            type='password'
        />
        <Input
            label='Confirm Password'
            name='Confirm Password'
            type='password'
        />

        <div className="mt-2">
          <Button type='submit' isDisable={false} isDark={true}>
            Reset Password
          </Button>
        </div>
      </form>
  );
};

export default ResetPasswordForm;