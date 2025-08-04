// Input.tsx
'use client';

import { Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from "react";
import Link from 'next/link';

type InputProps = {
  label: string;
  helperText?: string;
  error?: string | null;
  isDisabled?: boolean;
  name: string;
  placeholder?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input = ({
                 label,
                 helperText,
                 error,
                 isDisabled = false,
                 name,
                 placeholder,
                 ...registerProps
               }: InputProps) => {
  const hasError = Boolean(error);

  const baseClass =
      "w-full rounded-lg px-3 py-2.5 outline-none transition pr-10";
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
        </div>

        <div className="relative">
          <textarea
              id={name}
              name={name}
              disabled={isDisabled}
              placeholder={placeholder}
              {...registerProps}
              rows={5}
              className={`${baseClass} ${stateClass}`}
          />

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