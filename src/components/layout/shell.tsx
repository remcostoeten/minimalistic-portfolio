import { cn } from "@/core/utillities/utils"
import * as React from "react"


interface ShellProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Shell({ children, className, ...props }: ShellProps) {
  return (
    <div className={cn("grid items-start gap-8", className)} {...props}>
      {children}
    </div>
  )
}
