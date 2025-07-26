"use client"

import { CircleMinus, CirclePlus } from 'lucide-react';
import React, { useState } from 'react';

export const Accordion = ({title, children}: {title: string, children: React.ReactNode}) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)

  return (
      <button
          type='button'
          onClick={() => setAccordionOpen(!accordionOpen)}
          className='p-3 w-full max-w-[720px] bg-white border-2 border-neutral-200 cursor-pointer text-left rounded-xl md:p-6'
      >
        <div className="flex justify-between w-full">
          <span className='text-body-xl md:text-title-xxs font-semibold'>{title}</span>
          {accordionOpen ? <CircleMinus/> : <CirclePlus/>}
        </div>

        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}>
          <p className="font-medium overflow-hidden">{children}</p>
        </div>
      </button>
  );
};
