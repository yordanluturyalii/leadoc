"use client";

import React from 'react';
import { TriangleAlert } from 'lucide-react';

type ToastProps = {
  children: React.ReactNode
  type: 'success' | 'error' | 'warning'
}

const Toast = ({ children, type }: ToastProps) => {
  return (
      <div
          className={`w-full p-3 flex items-center gap-3 border-2 rounded-lg text-body-md font-medium ${type === 'success' ? 'border-blue-300 bg-blue-50' : type === 'error' ? 'border-red-300 bg-red-50' : 'border-yellow-300 bg-yellow-50'}`}>

        {children}
      </div>
  );
};

export default Toast;