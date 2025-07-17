"use client";

import React, { FormEvent, useState } from 'react';
import Input from '@/features/shared/components/Input';
import Button from '@/features/shared/components/Button';
import Toast from '@/features/shared/components/Toast';
import { TriangleAlert } from 'lucide-react';

const ForgotPasswordForm = () => {
  const [isToast, setIsToast] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsToast(true);
  }

  return (
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        {isToast && (
            <Toast type='success'>
              <TriangleAlert/> We’ll email you a reset link if the address is registered.
            </Toast>
        )}

        <Input
            label='Email'
            name='email'
        />

        <div className="mt-2">
          <Button type='submit' isDisable={false} isDark={true}>
            Continue
          </Button>
        </div>
      </form>
  );
};

export default ForgotPasswordForm;