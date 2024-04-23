import { cn } from '@/lib/utils';
import React, { forwardRef, SelectHTMLAttributes } from 'react';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  return (
    <select
      ref={ref}
      className={
        cn("bg-slate-200 rounded-md px-4 pr-6 py-3 text-sm", props.className)
      }
      {...props}
    />
  )
});

Select.displayName = "Select"

