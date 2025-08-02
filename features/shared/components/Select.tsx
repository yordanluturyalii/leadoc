"use client";

import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type SelectContextType = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectContext = createContext<SelectContextType | undefined>(undefined);

export const Select = ({
                         label,
                         name,
                         children,
                       }: {
  label: string;
  name: string;
  children: ReactNode;
}) => {
  const [value, setValue] = useState<string>('Select one option');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
      <div className="flex flex-col gap-1 relative">
        <div className="flex justify-between">
          <label
              htmlFor={name}
              className="text-body-md font-medium text-neutral-900"
          >
            {label}
          </label>
        </div>

        <div className="relative">
          <button className='w-full' onClick={() => setIsOpen(!isOpen)} type="button">
            <div
                className="w-full flex justify-between items-center h-11 cursor-pointer rounded-lg px-3 py-2.5 transition bg-white text-neutral-900 font-medium border border-neutral-200">
              <span>{value}</span>
              {isOpen ? <ChevronUp color="#171717"/> : <ChevronDown color="#171717"/>}
            </div>

            <div
                className={`bg-white text-neutral-900 border rounded-lg border-neutral-200 grid overflow-hidden transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-1 px-3 py-2.5' : 'grid-rows-[0fr] opacity-0'
                }`}
            >
              <div className="text-left overflow-hidden font-medium flex flex-col gap-1">
                <SelectContext.Provider value={{ setValue, setIsOpen }}>
                  {children}
                </SelectContext.Provider>
              </div>
            </div>
          </button>
        </div>
      </div>
  );
};

export const SelectItem = ({ children }: { children: string }) => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error("SelectItem must be used within a <Select>");
  }

  const { setValue, setIsOpen } = context;

  const handleClick = () => {
    setValue(children);
    setIsOpen(false);
  };

  return (
      <span className="cursor-pointer p-2 hover:bg-neutral-100" onClick={handleClick}>
      {children}
    </span>
  );
};
