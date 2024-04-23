import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";


type GhostButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const GhostButton = forwardRef<HTMLButtonElement, GhostButtonProps>(({ className, ...props}, ref) => {
  return (
    <button
      ref={ref}
      className={
        cn("rounded px-6 py-3 text-gray-500", className)
      }
      {...props}
    />
  )
});

GhostButton.displayName = "GhostButton"
