'use client';

import { ChangeEvent, useState } from "react";

type InputProps = {
    label: string;
    placeholder?: string;
    helperText?: string;
    isDisabled?: boolean;
    name: string;
    type: "text" | "password" | "email";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string | null;
};

const Input = ({
    label,
    placeholder,
    helperText,
    isDisabled = false,
    name,
    type,
    value,
    onChange,
    error,
}: InputProps) => {
    const hasError = Boolean(error);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const isPasswordField = type === "password";
    const inputType = isPasswordField && isPasswordVisible ? "text" : type;

    const baseClass =
        "w-full h-11 rounded-lg px-3 py-2.5 outline-none transition pr-10";

    const stateClass = isDisabled
        ? "bg-neutral-50 text-neutral-400 border border-neutral-100 cursor-not-allowed"
        : hasError
            ? "bg-red-50 text-neutral-900 border border-red-400 focus:border-red-500"
            : "bg-white text-neutral-900 border border-neutral-200 focus:bg-neutral-100 focus:border-neutral-500";

    return (
        <div className="flex flex-col gap-1 relative">
            <label
                htmlFor={name}
                className="text-body-md font-medium text-neutral-900"
            >
                {label}
            </label>

            <div className="relative">
                <input
                    id={name}
                    name={name}
                    type={inputType}
                    value={value}
                    placeholder={placeholder}
                    disabled={isDisabled}
                    onChange={onChange}
                    className={`${baseClass} ${stateClass}`}
                />

                {isPasswordField && !isDisabled && (
                    <button
                        type="button"
                        onClick={() => setIsPasswordVisible((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-500 hover:text-neutral-700 focus:outline-none"
                    >
                        {isPasswordVisible ? "Hide" : "Show"}
                    </button>
                )}
            </div>

            <span className="text-body-sm font-medium text-neutral-400">
                {helperText}
            </span>

            {hasError && (
                <span className="text-red-600 text-body-sm font-medium">{error}</span>
            )}
        </div>
    );
};

export default Input;
