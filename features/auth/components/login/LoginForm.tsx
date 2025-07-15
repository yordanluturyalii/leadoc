"use client";

import React, { FormEvent } from 'react';
import Input from '@/features/shared/components/Input';
import Button from '@/features/shared/components/Button';

const LoginForm = () => {
  const handleSubmit = () => {
    console.log('handleSubmit');
  }

  return (
      <form className='flex flex-col gap-4'>
        <Input label='Email' name='email' type='email'/>
        <Input label='Password' name='password' type='password'/>

        <div className="mt-2">
          <Button type='submit' isDisable={false} isDark={true} handleClick={handleSubmit}>
            Continue
          </Button>
        </div>
      </form>
  );
};

export default LoginForm;