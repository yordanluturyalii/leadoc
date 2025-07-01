'use client'

import Image from 'next/image';
import React from 'react'

type ButtonProps = {
    text?: string;
    icon?: string;
    isDisable: boolean;
    handleClick: () => void;
}

const Button = ({text, icon, isDisable, handleClick}: ButtonProps) => {
  return (
    <button type='button' className='bg-white w-full h-11 flex items-center justify-center gap-2.5 cursor-pointer border border-neutral-200 rounded-xl hover:bg-neutral-50' onClick={handleClick}>
        {
            icon && <Image src={icon} alt='Github Icon' width={24} height={24} />
        }
        <span className='text-body-md font-semibold text-neutral-900 '>{text}</span>
    </button>
  )
}

export default Button