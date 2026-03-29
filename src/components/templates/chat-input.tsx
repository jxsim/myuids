import * as React from "react"

import { cn } from "@/lib/utils"

function ChatInput({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="chat-input"
      className={cn(
        "flex w-full flex-col rounded-xl border bg-background shadow-sm ring-1 ring-foreground/8 focus-within:ring-2 focus-within:ring-ring/50 transition-shadow",
        className
      )}
      {...props}
    />
  )
}

function ChatInputArea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="chat-input-area"
      rows={1}
      className={cn(
        "field-sizing-content max-h-40 min-h-10 w-full resize-none bg-transparent px-4 pt-3 text-sm outline-none placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function ChatInputToolbar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="chat-input-toolbar"
      className={cn(
        "flex items-center justify-between gap-2 px-2 pb-2",
        className
      )}
      {...props}
    />
  )
}

function ChatInputActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="chat-input-actions"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { ChatInput, ChatInputArea, ChatInputToolbar, ChatInputActions }
