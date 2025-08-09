import React from 'react';
import { CreateReadme } from '@/features/generate-readme/components/CreateReadme';
import { LoadingPopup } from '@/features/generate-readme/components/LoadingPopup';

export default function ReadmePage() {
  return (
      <>
        <section className='flex-1 flex flex-col gap-2 relative'>
          <CreateReadme/>
          <LoadingPopup>Parsing content and building README...</LoadingPopup>
        </section>
      </>
  );
}
