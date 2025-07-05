'use client'

import { useForm } from "react-hook-form"
import { RegisterData, RegisterSchema } from "../../types/register-types"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from "@/features/shared/components/Input"
import Button from "@/features/shared/components/Button"
import { useMutation } from "@tanstack/react-query"
import { api } from "@/features/shared/hooks/useApi"
import { useRouter } from "next/navigation"

const createUser = async (data: any) => {
    const response = await api.post("/api/auth/register", data);
    return response.data;
}

const RegisterForm = () => {
    const route = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, disabled, isLoading, isValid },
        setError
    } = useForm<RegisterData>({
        resolver: zodResolver(RegisterSchema)
    })

    const mutation = useMutation({
        mutationFn: createUser,
        onSuccess: (data) => {
            route.push("/dashboard");
        },
        onError: (error) => {
            if (error?.errors && Object.keys(error?.errors).length > 0) {
                Object.entries(error?.errors).forEach(([index, {type, message}]: [string, any]) => {
                    const fieldMap: { [key: string]: keyof RegisterData } = {
                        'name': 'name',
                        'email': 'email',
                        'password': 'password',
                        'password_confirmation': 'passwordConfirmation'
                    };
                    
                    const formField = fieldMap['password_confirmation'];
                    console.log(formField);
                    if (formField) {
                        setError(formField, { message });
                    }
                });
            }
        }
    })

    const onSubmit = async (data: RegisterData) => {
        mutation.mutate({
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.passwordConfirmation
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Input
                label="Name"
                {...register("name")}
                error={errors.name?.message}
            />
            <Input
                label="Email"
                {...register("email")}
                error={errors.email?.message}
            />
            <Input
                label="Password"
                {...register("password")}
                type="password"
                error={errors.password?.message}
            />
            <Input
                label="Confirm Password"
                {...register("passwordConfirmation")}
                type="password"
                error={errors.passwordConfirmation?.message}
            />
            <div className="mt-2">
                <Button type="submit" isDisable={!isValid || isLoading || disabled} isDark={true} text="Create Account" handleClick={() => { }} />
            </div>
        </form>
    )
}

export default RegisterForm