 "use client";

import React, { FormEvent } from 'react';
import Input from '@/features/shared/components/Input';
import Button from '@/features/shared/components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginData, LoginSchema } from '@/features/auth/types/login-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: {errors, disabled, isLoading, isValid},
    setError,
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema)
  })
  const onSubmit: SubmitHandler<LoginData> = (data) => console.log(data)

  return (
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <Input
            label='Email'
            {...register('email')}
            error={errors.email?.message}
        />
        <Input
            label='Password'
            type='password'
            {...register('password')}
            error={errors.password?.message}
            isForgotPassword={true}
        />

        <div className="mt-2">
          <Button type='submit' isDisable={false} isDark={true} className='h-[44px] w-full'>
            Continue
          </Button>
        </div>
      </form>
  );
};

export default LoginForm;