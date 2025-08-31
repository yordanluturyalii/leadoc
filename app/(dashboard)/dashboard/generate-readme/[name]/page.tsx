"use client"

import React from 'react';
import { CreateReadme } from '@/features/generate-readme/components/CreateReadme';
import { LoadingPopup } from '@/features/generate-readme/components/LoadingPopup';
import { useReadmeContext } from '@/features/shared/context/ReadmeContext';

export default function ReadmePage() {
  const { isLoading } = useReadmeContext();

  return (
    <>
      <section className='flex-1 flex flex-col gap-2 relative'>
        <CreateReadme />
        {isLoading && (
          <LoadingPopup>Parsing content and building README...</LoadingPopup>
        )}
      </section>
    </>
  );
}