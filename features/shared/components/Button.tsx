'use client'

import Image from 'next/image';
import React from 'react'

type ButtonProps = {
    text?: string;
    icon?: string;
    isDisable: boolean;
    isDark: boolean;
    handleClick: () => void;
}

const Button = ({text, icon, isDisable, isDark, handleClick}: ButtonProps) => {
  return (
    <button type='button' className={`${isDark ? 'bg-neutral-900' : 'bg-white border border-neutral-200 hover:bg-neutral-50'}  w-full h-11 flex items-center justify-center gap-2.5 cursor-pointer rounded-xl`} onClick={handleClick}>
        {
            icon && <Image src={icon} alt='Github Icon' width={24} height={24} />
        }
        <span className={`text-body-md font-semibold ${isDark ? "text-white" : "text-neutral-900" }`}>{text}</span>
    </button>
  )
}

export default Button