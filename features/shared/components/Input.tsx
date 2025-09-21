// Input.tsx
'use client';

import { Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, useState } from "react";
import Link from 'next/link';

type InputProps = {
  label: string;
  helperText?: string;
  error?: string | null;
  isDisabled?: boolean;
  isForgotPassword?: boolean;
  name: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
                 label,
                 helperText,
                 error,
                 isDisabled = false,
                 name,
                 type = "text",
                 isForgotPassword = false,
                 placeholder,
                 ...registerProps
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
        <div className="flex justify-between">
          <label
              htmlFor={name}
              className="text-body-md font-medium text-neutral-900"
          >
            {label}
          </label>
          {isForgotPassword && (
              <Link
                  href='/forgot-password'
                  className="text-body-md font-medium text-purple-600"
              >
                Forgot Password?
              </Link>
          )}
        </div>

        <div className="relative">
          <input
              id={name}
              name={name}
              type={inputType}
              disabled={isDisabled}
              placeholder={placeholder}
              {...registerProps}
              className={`${baseClass} ${stateClass}`}
          />

          {isPasswordField && !isDisabled && (
              <div
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-900 cursor-pointer"
              >
                {isPasswordVisible ? <EyeOff size={20}/> : <Eye size={20}/>}
              </div>
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