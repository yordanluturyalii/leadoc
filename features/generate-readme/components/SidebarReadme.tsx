"use client"

import { Draggable } from '@/features/shared';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AdditionalList } from '@/features/generate-readme/components/AdditionalList';
import { useDraggable } from '@/features/shared/hooks/useDraggable';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isDesktop;
}


export const SidebarReadme = () => {
  const [show, setShow] = useState(false)
  const isDekstop = useIsDesktop();

  const draggableItem = useDraggable((state) => state.data)

  return (
      <div
          className='bg-neutral-100 border border-neutral-200 rounded-xl p-3 md:w-[320px] h-full md:h-[calc(100dvh-180px)] overflow-scroll'
      >
        <h1 className="text-body-xl font-semibold md:mb-4">Sections</h1>
        <div
            onClick={() => setShow(!show)}
            className="md:hidden bg-neutral-50 border border-neutral-200 py-[7px] font-semibold text-body-sm text-center w-full rounded-lg mb-4"
        >
          {show ? 'Hide Sections' : 'Show Sections'}
        </div>

        {(isDekstop || show) && (
            <>
              <div className="relative">
                <div
                    className="absolute -bottom-1 top-6 inset-0 bg-gradient-to-r from-[#B151FF] via-[#FA0011] to-[#B151FF] blur-md"
                />
                <div className="relative bg-white border border-[#9333EA80] rounded-lg flex justify-between p-2 mb-6">
                  <span className="font-semibold pl-1">Smart Section Picker</span>
                  <div className="flex items-center gap-1">
                    <Image src='/coins.svg' alt='coins' width={20} height={20}/>
                    <span className="font-semibold text-body-xl">10</span>
                  </div>
                </div>
              </div>


              <Draggable dataItem={draggableItem}/>

              <AdditionalList/>
            </>
        )}
      </div>
  );
};
