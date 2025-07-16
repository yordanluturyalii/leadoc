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
            {...register('password')}
            error={errors.password?.message}
        />

        <div className="mt-2">
          <Button type='submit' isDisable={!isValid || isLoading || disabled} isDark={true}>
            Continue
          </Button>
        </div>
      </form>
  );
};

export default LoginForm;