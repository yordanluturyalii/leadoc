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

const Button = ({children, icon, type, isDisable, isDark, handleClick, isDanger, className}: ButtonProps) => {
  return (
      <button
          type={type}
          className={`${isDark ? 'bg-neutral-900' : 'bg-white border border-neutral-200 hover:bg-neutral-50'} cursor-pointer rounded-xl ${className} ${icon && children ? "flex items-center justify-center gap-2.5" : ""}`}
          onClick={handleClick}>
        {
            icon && <Image src={icon} alt={`${icon} Icon`} width={24} height={24} />
        }
        <span className={`text-body-md font-semibold ${isDark ? "text-white" : isDanger ? 'text-red-600' : "text-neutral-900" }`}>{children}</span>
      </button>
  )
}

export default Button