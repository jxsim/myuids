import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      sm: "max-w-screen-sm px-4 sm:px-6",
      md: "max-w-screen-md px-4 sm:px-6",
      lg: "max-w-screen-lg px-4 sm:px-6 lg:px-8",
      xl: "max-w-screen-xl px-4 sm:px-6 lg:px-8",
      "2xl": "max-w-screen-2xl px-4 sm:px-6 lg:px-8",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    size: "xl",
  },
})

function Container({
  className,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof containerVariants>) {
  return (
    <div
      data-slot="container"
      data-size={size ?? "xl"}
      className={cn(containerVariants({ size }), className)}
      {...props}
    />
  )
}

export { Container, containerVariants }
