"use client";

import React, { FormEvent } from 'react';
import Input from '@/features/shared/components/Input';
import Button from '@/features/shared/components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginData, LoginSchema } from '@/features/auth/types/login-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { api } from '@/features/shared';

const loginUser = async (data: any) => {
  const response = await api.post("/api/auth/login", data);
  return response.data;
}

const LoginForm = () => {
  const route = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, disabled, isLoading, isValid },
    setError,
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema)
  })

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      route.push('/dashboard');
    },
    onError: (error) => {
      if (error?.errors && Object.keys(error?.errors).length > 0) {
        Object.entries(error?.errors).forEach(([index, { type, message }]: [string, any]) => {
          const fieldMap: { [key: string]: keyof LoginData } = {
            'email': 'email',
            'password': 'password',
          };

          const formField = fieldMap['email'];
          console.log(formField);
          if (formField) {
            setError(formField, { message });
          }
        });
      }
    }
  })

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    mutation.mutate({
      email: data.email,
      password: data.password,
    });
  }

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
          <Button type='submit' isDisable={!isValid || isLoading || disabled} isDark={true} className='h-[44px] w-full'>
            Continue
          </Button>
        </div>
      </form>
  );
};

export default LoginForm;