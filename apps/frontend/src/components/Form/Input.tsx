import { cn } from '@/lib/utils';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import { MdCheckCircle } from 'react-icons/md';

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props}, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      className={cn("bg-slate-200 rounded-md px-4 py-3 text-sm", className)}
      {...props}
    />
  )
});

Input.displayName = "Input"

