import React from "react";
import Input from "@/features/shared/components/Input";
import Button from "@/features/shared/components/Button";
import {
  ResetPassword,
  ResetPasswordPayload,
  ResetSchema,
} from "../../types/reset-type";
import { api } from "@/features/shared";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEmail } from "@/features/shared/hooks/useEmail";
import { useRouter } from "next/navigation";

const resetPasswordUser = async (data: ResetPasswordPayload) => {
  const response = await api.post("/api/auth/reset-password", data);
  return response.data;
};

const ResetPasswordForm = () => {
  const email = useEmail((state) => state.email);
  const token = useSearchParams().get("token");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, disabled, isValid },
    setError,
  } = useForm<ResetPassword>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: email || null,
      token: token || null,
    },
  });

  const mutation = useMutation({
    mutationFn: resetPasswordUser,
    onSuccess: (data) => {
      router.push("/login");
    },
    onError: (error) => {
      let err = error as any;
      if (err?.errors && Object.keys(err?.errors).length > 0) {
        Object.entries(err?.errors).forEach(
          ([field, { type, message }]: [string, any]) => {
            const fieldMap: { [key: string]: keyof ResetPassword } = {
              new_password: "new_password",
            };

            const formField = fieldMap[field];
            console.log(formField);
            if (formField) {
              setError(formField, { message });
            }
          }
        );
      }
    },
  });

  const onSubmit: SubmitHandler<ResetPassword> = (data) => {
    const { confirm_password, ...payload } = data;
    mutation.mutate({
      email: email,
      new_password: data.new_password,
      token: token
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <Input
        label="Password"
        type="password"
        {...register("new_password")}
        error={errors.new_password?.message}
        isDisabled={mutation.isPending}
      />
      <Input
        label="Confirm Password"
        type="password"
        {...register("confirm_password")}
        error={errors.confirm_password?.message}
        isDisabled={mutation.isPending}
      />

      <div className="mt-2">
        <Button
          type="submit"
          isDisable={mutation.isPending || !isValid || disabled}
          isDark={true}
          className="w-full h-[44px]"
        >
          Set New Password
        </Button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
