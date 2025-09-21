"use client"

import Image from 'next/image';
import Link from 'next/link';

export const TeamCard = ({name, img, link, title}: {name: string, img: string, title: string, link: string}) => {
  return (
      <div className='w-full'>
        <div className="bg-neutral-200 w-full h-[220px] rounded-sm mb-3 flex justify-center">
          <Image src={`/team/${img}`} alt={name} height={220} width={288}/>
        </div>

        <div className="grid gap-2">
          <h2 className="text-[20px] font-semibold">
            {name}
          </h2>
          <p className='text-neutral-600 font-medium'>
            {title}
          </p>

          <Link href={link} target='_blank' className='text-neutral-600 underline'>Linkedin</Link>
        </div>
      </div>
  );
};
