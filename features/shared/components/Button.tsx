'use client'

import Image from 'next/image';
import React from 'react'

type ButtonProps = {
  children?: React.ReactNode;
  icon?: string;
  type: "button" | "reset" | "submit";
  isDisable: boolean;
  isDark: boolean;
  isDanger?: boolean;
  handleClick?: () => void;
  className?: string
}

const Button = ({ children, icon, type, isDisable, isDark, handleClick, isDanger, className }: ButtonProps) => {
  const baseStyle = isDark
    ? 'bg-neutral-900 text-white hover:bg-neutral-800'
    : isDanger
      ? 'bg-white border border-neutral-200 text-red-600 hover:bg-neutral-50'
      : 'bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50'

  const disabledStyle = 'bg-neutral-100 border border-neutral-200 text-neutral-400 cursor-not-allowed opacity-60'

  return (
    <button
      type={type}
      className={`${isDisable ? disabledStyle : baseStyle} rounded-xl ${className} ${icon && children ? "flex items-center justify-center gap-2.5" : ""}`}
      onClick={isDisable ? undefined : handleClick}
      disabled={isDisable}
    >
      {icon && <Image src={icon} alt={`${icon} Icon`} width={24} height={24} />}
      {children && (
        <span className={`text-body-md font-semibold ${isDark && !isDisable ? "text-white" : ""}`}>
          {children}
        </span>
      )}
    </button>
  )
}

export default Button
