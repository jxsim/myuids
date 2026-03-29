import * as React from "react"

import { cn } from "@/lib/utils"

function ChatLayout({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="chat-layout"
      className={cn("flex h-svh w-full overflow-hidden bg-background", className)}
      {...props}
    />
  )
}

function ChatLayoutSidebar({
  className,
  ...props
}: React.ComponentProps<"aside">) {
  return (
    <aside
      data-slot="chat-layout-sidebar"
      className={cn(
        "flex w-64 shrink-0 flex-col border-r bg-sidebar",
        className
      )}
      {...props}
    />
  )
}

function ChatLayoutMain({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="chat-layout-main"
      className={cn("flex flex-1 flex-col overflow-hidden", className)}
      {...props}
    />
  )
}

function ChatLayoutHeader({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="chat-layout-header"
      className={cn(
        "flex h-14 shrink-0 items-center gap-2 border-b px-4",
        className
      )}
      {...props}
    />
  )
}

function ChatLayoutContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="chat-layout-content"
      className={cn(
        "flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-6",
        className
      )}
      {...props}
    />
  )
}

function ChatLayoutFooter({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer
      data-slot="chat-layout-footer"
      className={cn("shrink-0 border-t bg-background px-4 py-3", className)}
      {...props}
    />
  )
}

export {
  ChatLayout,
  ChatLayoutSidebar,
  ChatLayoutMain,
  ChatLayoutHeader,
  ChatLayoutContent,
  ChatLayoutFooter,
}
