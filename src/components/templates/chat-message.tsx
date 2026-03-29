import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const chatMessageVariants = cva("group/chat-message flex w-full gap-3", {
  variants: {
    role: {
      user: "flex-row-reverse",
      assistant: "flex-row",
    },
  },
  defaultVariants: {
    role: "assistant",
  },
})

function ChatMessage({
  className,
  role = "assistant",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof chatMessageVariants>) {
  return (
    <div
      data-slot="chat-message"
      data-role={role}
      className={cn(chatMessageVariants({ role }), className)}
      {...props}
    />
  )
}

function ChatMessageAvatar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="chat-message-avatar"
      className={cn("flex shrink-0 items-start pt-0.5", className)}
      {...props}
    />
  )
}

function ChatMessageContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="chat-message-content"
      className={cn("flex flex-1 flex-col gap-1", className)}
      {...props}
    />
  )
}

const chatMessageBubbleVariants = cva(
  "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
  {
    variants: {
      role: {
        user: "rounded-tr-sm bg-primary text-primary-foreground self-end",
        assistant: "rounded-tl-sm bg-muted text-foreground self-start",
      },
    },
    defaultVariants: {
      role: "assistant",
    },
  }
)

function ChatMessageBubble({
  className,
  role = "assistant",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof chatMessageBubbleVariants>) {
  return (
    <div
      data-slot="chat-message-bubble"
      data-role={role}
      className={cn(chatMessageBubbleVariants({ role }), className)}
      {...props}
    />
  )
}

function ChatMessageMeta({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="chat-message-meta"
      className={cn(
        "flex items-center gap-1.5 px-1 text-xs text-muted-foreground group-data-[role=user]/chat-message:flex-row-reverse",
        className
      )}
      {...props}
    />
  )
}

function ChatMessageActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="chat-message-actions"
      className={cn(
        "flex items-center gap-0.5 opacity-0 transition-opacity group-hover/chat-message:opacity-100 group-data-[role=user]/chat-message:flex-row-reverse",
        className
      )}
      {...props}
    />
  )
}

export {
  ChatMessage,
  ChatMessageAvatar,
  ChatMessageBubble,
  ChatMessageContent,
  ChatMessageMeta,
  ChatMessageActions,
  chatMessageVariants,
  chatMessageBubbleVariants,
}
