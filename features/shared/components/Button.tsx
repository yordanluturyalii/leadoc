'use client'

import Image from 'next/image';
import React from 'react'

type ButtonProps = {
  children?: React.ReactNode;
  icon?: string;
  type: "button" | "reset" | "submit";
  isDisable: boolean;
  isDark: boolean;
  handleClick?: () => void;
}

const Button = ({children, icon, type, isDisable, isDark, handleClick}: ButtonProps) => {
  return (
      <button
          type={type}
          className={`${isDark ? 'bg-neutral-900' : 'bg-white border border-neutral-200 hover:bg-neutral-50'} w-full h-11 flex items-center justify-center gap-2.5 cursor-pointer rounded-xl`}
          onClick={handleClick}>
        {
            icon && <Image src={icon} alt='Github Icon' width={24} height={24} />
        }
        <span className={`text-body-md font-semibold ${isDark ? "text-white" : "text-neutral-900" }`}>{children}</span>
      </button>
  )
}

export default Button