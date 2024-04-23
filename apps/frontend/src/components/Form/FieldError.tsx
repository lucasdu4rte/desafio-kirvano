import { PropsWithChildren } from "react";

export function FieldError({ children }: PropsWithChildren) {
  return (
    <div className="text-red-700 text-sm">
      {children}
    </div>
  )
}
