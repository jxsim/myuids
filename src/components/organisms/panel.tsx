import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const panelVariants = cva("w-full rounded-xl", {
  variants: {
    variant: {
      default: "bg-card text-card-foreground",
      muted: "bg-muted/50 text-foreground",
      bordered: "border border-border bg-background text-foreground",
      inset: "bg-muted/30 ring-1 ring-inset ring-border/60 text-foreground",
      raised: "bg-card text-card-foreground shadow-md",
    },
    padding: {
      none: "",
      sm: "p-3",
      md: "p-5",
      lg: "p-7",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
  },
})

function Panel({
  className,
  variant,
  padding,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof panelVariants>) {
  return (
    <div
      data-slot="panel"
      data-variant={variant ?? "default"}
      className={cn(panelVariants({ variant, padding }), className)}
      {...props}
    />
  )
}

function PanelHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-header"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  )
}

function PanelTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="panel-title"
      className={cn("text-base font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
}

function PanelDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="panel-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function PanelAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-action"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-content"
      className={cn("", className)}
      {...props}
    />
  )
}

function PanelFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-footer"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

export {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelDescription,
  PanelAction,
  PanelContent,
  PanelFooter,
  panelVariants,
}
