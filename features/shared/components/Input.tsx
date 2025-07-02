'use client';

import { ChangeEvent } from "react";

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

    const baseClass = "w-full h-11 rounded-lg px-3 py-2.5 outline-none transition";

    const stateClass = isDisabled
        ? "bg-neutral-50 text-neutral-400 border border-neutral-100"
        : hasError
            ? "bg-red-50 text-neutral-900 border border-red-400 focus:border-red-500"
            : "bg-white text-neutral-900 border border-neutral-200 focus:bg-neutral-100 focus:border-neutral-500";

    return (
        <div className="flex flex-col gap-1">
            <label
                htmlFor={name}
                className="text-body-md font-medium text-neutral-900"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                disabled={isDisabled}
                onChange={onChange}
                className={`${baseClass} ${stateClass}`}
            />

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
