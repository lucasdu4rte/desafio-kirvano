import { PropsWithChildren } from "react";

export function Label({ children }: PropsWithChildren) {
  return (
    <label className="font-medium text-xs text-slate-500">{children}</label>
  )
}
