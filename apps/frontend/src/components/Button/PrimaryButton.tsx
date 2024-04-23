import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";


type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(({ className, ...props}, ref) => {
  return (
    <button
      ref={ref}
      className={
        cn("bg-blue-400 rounded px-10 py-3 text-white shadow-md", className)
      }
      {...props}
    />
  )
});

PrimaryButton.displayName = "PrimaryButton"
