import { PropsWithChildren } from "react";

export function FormField({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-2">
      {children}
    </div>
  )
}
