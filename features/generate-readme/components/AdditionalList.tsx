"use client"

import { useDraggable } from '@/features/shared/hooks/useDraggable';

export const AdditionalList = () => {
  const sectionData = useDraggable((state) => state.sectionData);
  const addToList = useDraggable((state) => state.addToData)

  console.log(sectionData);
  return (
      <div className='bg-neutral-200 p-2 rounded-lg grid gap-1 mt-4'>
            <span className="px-3 py-1 font-semibold text-body-sm">
                Click a section to add it to your README.
            </span>

        <div className="grid gap-1.5">
          {sectionData.map((item, i) => (
              <div className='bg-white py-[10px] px-3 font-semibold rounded-lg cursor-pointer' key={i}
                   onClick={() => addToList(item)}>
                {item}
              </div>
          ))}
        </div>
      </div>
  );
};
