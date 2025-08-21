"use client"

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Fira_Code } from 'next/font/google';
import remarkGfm from 'remark-gfm';

const fira = Fira_Code({
  subsets: ["latin"],
  style: "normal",
});

export const CreateReadme = () => {
  const [value, setValue] = useState('')
  const [tabs, setTabs] = useState(1)

  const handleTabs = (tab: number) => {
    setTabs(tab)
  }

  return (
      <>
        <div
            className="flex h-fit text-center font-semibold gap-[10px] bg-neutral-200 border border-neutral-100 rounded-xl p-1">
          <div onClick={() => handleTabs(1)}
               className={`${tabs === 1 && 'bg-white'} w-full  rounded-[10px] py-2 cursor-pointer`}
          >
            Editor
          </div>
          <div onClick={() => handleTabs(2)}
               className={`${tabs === 2 && 'bg-white'} w-full rounded-[10px] py-2 cursor-pointer`}
          >
            Preview
          </div>
        </div>
        {tabs === 1 && (
            <textarea
                className={`${fira.className} w-full overflow-scroll h-[calc(100dvh-240px)] bg-white border border-neutral-200 rounded-xl p-9 focus:outline-0 md:p-10`}
                value={value} onChange={(e) => setValue(e.target.value)}
            />
        )}
        {tabs === 2 && (
            <div
                className="max-w-full overflow-scroll h-[calc(100dvh-240px)] bg-white border border-neutral-200 rounded-xl p-9 focus:outline-0 prose md:p-10">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
            </div>
        )}
      </>
  );
};

