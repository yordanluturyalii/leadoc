"use client";

import React, { useState } from "react";
import Input from "@/features/shared/components/Input";
import Button from "@/features/shared/components/Button";
import Toast from "@/features/shared/components/Toast";
import { TriangleAlert } from "lucide-react";
import { api } from "@/features/shared";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

const ForgotSchema = z.object({
  email: z.string().email(),
});

type ForgotPassword = z.infer<typeof ForgotSchema>;

const forgotPassword = async (data: ForgotPassword) => {
  const response = await api.post("/api/auth/send-email", data);
  return response.data;
};

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, disabled, isLoading, isValid },
    setError,
  } = useForm<ForgotPassword>({
    resolver: zodResolver(ForgotSchema),
  });

  const mutation = useMutation({
    mutationFn: forgotPassword,
    onError: (err: any) => {
      const errors = err?.response?.data?.errors;
      if (errors?.email) {
        setError("email", { message: errors.email.message });
      }
    },
  });

  const onSubmit: SubmitHandler<ForgotPassword> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {mutation.isSuccess && (
        <Toast type="success">
          <TriangleAlert /> We’ll email you a reset link if the address is
          registered.
        </Toast>
      )}

      <Input
        label="Email"
        {...register("email")}
        error={errors.email?.message}
      />

      <div className="mt-2">
        <Button
          type="submit"
          isDisable={isLoading || !isValid || disabled}
          isDark={true}
          className="w-full h-[44px]"
        >
          Send Link
        </Button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
