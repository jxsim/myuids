import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sectionVariants = cva("w-full", {
  variants: {
    padding: {
      none: "",
      sm: "py-8",
      md: "py-12",
      lg: "py-16",
      xl: "py-24",
    },
  },
  defaultVariants: {
    padding: "md",
  },
})

function Section({
  className,
  padding,
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof sectionVariants>) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ padding }), className)}
      {...props}
    />
  )
}

function SectionHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="section-header"
      className={cn("mb-8 flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function SectionTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="section-title"
      className={cn("text-2xl font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

function SectionDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="section-description"
      className={cn("text-base text-muted-foreground", className)}
      {...props}
    />
  )
}

function SectionContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="section-content"
      className={cn("w-full", className)}
      {...props}
    />
  )
}

export {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionContent,
  sectionVariants,
}
