import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  size = "default",
  ...props
}: React.ComponentProps<"input"> & { size?: "default" | "sm" }) {
  return (
    <input
      type={type}
      data-slot="input"
      data-size={size}
      className={cn(
        "w-full min-w-0 rounded-lg border border-input bg-muted/40 px-2.5 py-1 text-base transition-[background,box-shadow,border-color,color] duration-150 outline-none file:inline-flex file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:bg-background focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:focus-visible:bg-background dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        "data-[size=default]:h-8 data-[size=default]:file:h-6 data-[size=default]:file:text-sm data-[size=default]:md:text-sm",
        "data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),12px)] data-[size=sm]:text-xs data-[size=sm]:file:h-5 data-[size=sm]:file:text-xs",
        className
      )}
      {...props}
    />
  )
}

export { Input }
