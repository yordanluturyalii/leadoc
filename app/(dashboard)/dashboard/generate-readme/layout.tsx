'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Button from '@/features/shared/components/Button';
import { SidebarReadme } from '@/features/generate-readme/components/SidebarReadme';
import { useCurrentUser } from '@/features/shared/hooks/useCurrentUser';
import { ReadmeProvider, useReadmeContext } from '@/features/shared/context/ReadmeContext';

const GenerateLayoutContent = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const { isPending, error, data } = useCurrentUser();
  const { handleGenerate, canGenerate, isLoading } = useReadmeContext();

  return (
    <div className="py-3">
      <div className="flex flex-col md:flex-row gap-2">
        <div
          className="w-full bg-neutral-100 p-3 rounded-xl flex items-center gap-[10px] border border-neutral-200 md:w-[320px]">
          <Image src='/github.png' alt='github icon' width={20} height={20} />
          <h1 className="font-semibold">{params.name}</h1>
        </div>

        <div className="flex-1 flex flex-col items-start gap-2 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <Button
              type='button'
              isDisable={!canGenerate || isLoading}
              isDark={true}
              className='px-3 py-2 md:p-3'
              handleClick={handleGenerate}
            >
              {isLoading ? 'Generating...' : 'Generate README'}
            </Button>
            <div className='flex gap-1 items-center'>
              <Image src='/coins.svg' alt='coins' width={20} height={20} />
              <span className='font-semibold text-body-xl'>{data?.data?.user?.coin || 0} Credits</span>
            </div>
          </div>
          <div
            className="max-md:w-full flex items-center gap-[10px] bg-white border border-neutral-200 p-3 rounded-xl cursor-pointer hover:bg-gray-50">
            <Image src='/copy.svg' alt='copy' width={24} height={24} />
            <span className="font-semibold">Copy</span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5 lg:flex-row lg:gap-10">
        <div className="w-full flex flex-col md:flex-row gap-2 pt-2">
          <SidebarReadme />
          {children}
        </div>
      </div>
    </div>
  );
};

const GenerateLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ReadmeProvider>
      <GenerateLayoutContent>
        {children}
      </GenerateLayoutContent>
    </ReadmeProvider>
  );
};

export default GenerateLayout