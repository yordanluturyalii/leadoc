'use client'

import { useForm } from "react-hook-form"
import { RegisterData, RegisterSchema } from "../../types/register-types"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from "@/features/shared/components/Input"
import Button from "@/features/shared/components/Button"

const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, disabled, isLoading, isValid },
        setError
    } = useForm<RegisterData>({
        resolver: zodResolver(RegisterSchema)
    })

    const onSubmit = async(data: RegisterData) => {
        console.log(data);
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