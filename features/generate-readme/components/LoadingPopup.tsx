"use client"

import Image from 'next/image';
import React from 'react';

export const LoadingPopup = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div
            className="absolute bottom-5 top-6 inset-0 bg-gradient-to-r from-[#B151FF] via-[#FA0011] to-[#B151FF] blur-md"
        />
        <div
            className="relative bg-neutral-900 text-neutral-200 border rounded-lg flex justify-between px-3 py-3 mb-6 gap-2 md:px-4">
          <span className="max-md:font-semibold max-md:text-body-sm min-w-[231px] ">{children}</span>

          <svg className="size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>
  );
};
