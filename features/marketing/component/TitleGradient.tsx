"use client"

import React from 'react';

export const
    TitleGradient = ({ children, className }: { children: React.ReactNode, className: string }) => {
  return (
      <span
          className={`py-1 px-6 w-fit bg-gradient-to-r text-center font-medium rounded-sm md:py-1.5 ${className}`}
      >
            {children}
          </span>
  );
};
