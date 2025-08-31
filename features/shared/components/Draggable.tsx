"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useDraggable } from '@/features/shared/hooks/useDraggable';

export const Draggable = ({ dataItem }: { dataItem: string[] }) => {
  let oldIndex = 0
  let newIndex = 0
  const [todoItems, setTodoItems] = useState(dataItem);

  useEffect(() => {
    setTodoItems(dataItem);
  }, [dataItem]);

  const removeData = useDraggable((state) => state.removeData)

  return (
      dataItem.length > 0 && (
          <ul
              onDragStart={(e) => {
                const target = e.target as HTMLDivElement;
                const li = target.closest('li') as HTMLLIElement;
                oldIndex = Number(li.id)
              }}
              onDrag={(e) => {
                const target = e.target as HTMLDivElement;
                const li = target.closest('li') as HTMLLIElement;
                oldIndex = Number(li.id)
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const target = e.target as HTMLDivElement;
                const li = target.closest('li') as HTMLLIElement;
                newIndex = Number(li.id)
                const itemCopy = [...todoItems]
                const itemText = itemCopy[oldIndex]
                itemCopy.splice(oldIndex, 1)
                itemCopy.splice(newIndex, 0, itemText)
                setTodoItems(itemCopy)
              }}
              className='bg-neutral-200 p-2 rounded-lg grid gap-1.5'
          >
            {todoItems.map((item, i) => (
                <li key={i} id={String(i)} draggable
                    className="bg-white py-[10px] px-2 flex justify-between rounded-lg cursor-pointer">
                  <div className='flex items-center gap-2'>
                    <Image src='/Grip.svg' alt='grip' width={18} height={18}/>
                    <span className="font-semibold">{item}</span>
                  </div>
                  <Trash2 className='hover:text-red-500 cursor-pointer duration-300' onClick={() => {
                    removeData(item)
                  }}/>
                </li>
            ))}
          </ul>)
  );
};
