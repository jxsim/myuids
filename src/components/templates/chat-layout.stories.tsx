import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconMessage,
  IconPlus,
  IconSearch,
  IconSettings,
  IconSparkles,
  IconSend,
  IconPaperclip,
  IconMicrophone,
  IconCopy,
  IconRefresh,
  IconChevronDown,
  IconDots,
} from "@tabler/icons-react"

import { Avatar, AvatarFallback } from "@/components/atoms/avatar"
import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import { Separator } from "@/components/atoms/separator"
import { Skeleton } from "@/components/atoms/skeleton"
import { Item, ItemContent, ItemTitle, ItemDescription } from "@/components/molecules/item"
import { ChatInput, ChatInputArea, ChatInputToolbar, ChatInputActions } from "./chat-input"
import { ChatMessage, ChatMessageAvatar, ChatMessageBubble, ChatMessageContent, ChatMessageMeta, ChatMessageActions } from "./chat-message"
import {
  ChatLayout,
  ChatLayoutContent,
  ChatLayoutFooter,
  ChatLayoutHeader,
  ChatLayoutMain,
  ChatLayoutSidebar,
} from "./chat-layout"

const meta = {
  title: "Templates/ChatLayout",
  component: ChatLayout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ChatLayout>

export default meta
type Story = StoryObj<typeof meta>

const conversations = [
  { id: "1", title: "How does RAG work?", preview: "Retrieval-Augmented Generation is…", time: "2m ago", active: true },
  { id: "2", title: "Write a cover letter", preview: "Sure! Here's a professional…", time: "1h ago" },
  { id: "3", title: "Debug my TypeScript", preview: "The error is caused by a missing…", time: "3h ago" },
  { id: "4", title: "Explain async/await", preview: "Async/await is syntactic sugar…", time: "Yesterday" },
  { id: "5", title: "React performance tips", preview: "To optimize renders, consider…", time: "Yesterday" },
]

const messages = [
  { role: "user" as const, content: "How does retrieval-augmented generation work?", time: "2:41 PM" },
  {
    role: "assistant" as const,
    content:
      "Retrieval-Augmented Generation (RAG) combines a retrieval system with a generative model. When you ask a question, the system first retrieves relevant documents from a knowledge base, then feeds those documents as context to the language model so it can generate a grounded, accurate response.\n\nThis helps reduce hallucinations and keeps answers up to date without retraining the model.",
    time: "2:41 PM",
    model: "GPT-4o",
  },
  { role: "user" as const, content: "What retrieval methods are commonly used?", time: "2:42 PM" },
  {
    role: "assistant" as const,
    content:
      "The most common retrieval methods are:\n\n• **Dense retrieval** — Embeds queries and documents into vectors and finds nearest neighbours (e.g. using FAISS or pgvector).\n• **Sparse retrieval** — Keyword-based search like BM25, fast and interpretable.\n• **Hybrid** — Combines both for better coverage.\n\nDense retrieval generally performs best for semantic questions, while sparse excels at exact keyword matches.",
    time: "2:43 PM",
    model: "GPT-4o",
  },
]

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <ChatLayout>
      <ChatLayoutSidebar>
        {/* Sidebar header */}
        <div className="flex h-14 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <IconSparkles className="size-5 text-primary" />
            <span className="text-sm font-semibold">Claude</span>
          </div>
          <Button variant="ghost" size="icon-sm">
            <IconPlus />
          </Button>
        </div>

        {/* Search */}
        <div className="px-3 pt-3">
          <div className="flex items-center gap-2 rounded-lg border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground">
            <IconSearch className="size-3.5 shrink-0" />
            <span>Search conversations</span>
          </div>
        </div>

        {/* Conversations */}
        <div className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-2 py-2">
          <p className="px-2 py-1 text-xs font-medium text-muted-foreground">Today</p>
          {conversations.map((conv) => (
            <Item
              key={conv.id}
              variant={conv.active ? "muted" : "default"}
              size="sm"
              className="cursor-pointer"
            >
              <ItemContent>
                <ItemTitle>{conv.title}</ItemTitle>
                <ItemDescription>{conv.preview}</ItemDescription>
              </ItemContent>
              <span className="text-xs text-muted-foreground shrink-0">{conv.time}</span>
            </Item>
          ))}
        </div>

        {/* Sidebar footer */}
        <Separator />
        <div className="p-3">
          <Item size="sm" className="cursor-pointer">
            <Avatar size="sm">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <ItemContent>
              <ItemTitle>John Doe</ItemTitle>
              <ItemDescription>Free plan</ItemDescription>
            </ItemContent>
            <Button variant="ghost" size="icon-xs">
              <IconSettings />
            </Button>
          </Item>
        </div>
      </ChatLayoutSidebar>

      <ChatLayoutMain>
        {/* Header */}
        <ChatLayoutHeader>
          <div className="flex flex-1 items-center gap-2">
            <IconSparkles className="size-4 text-primary" />
            <span className="text-sm font-medium">How does RAG work?</span>
          </div>
          <div className="flex items-center gap-1">
            <Badge variant="secondary" className="gap-1 text-xs">
              GPT-4o
              <IconChevronDown className="size-3" />
            </Badge>
            <Button variant="ghost" size="icon-sm">
              <IconDots />
            </Button>
          </div>
        </ChatLayoutHeader>

        {/* Messages */}
        <ChatLayoutContent>
          {messages.map((msg, i) => (
            <ChatMessage key={i} role={msg.role}>
              {msg.role === "assistant" && (
                <ChatMessageAvatar>
                  <Avatar size="sm">
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                </ChatMessageAvatar>
              )}
              <ChatMessageContent>
                <ChatMessageBubble role={msg.role}>
                  {msg.content}
                </ChatMessageBubble>
                <ChatMessageMeta>
                  <span>{msg.time}</span>
                  {msg.model && <span>· {msg.model}</span>}
                  <ChatMessageActions>
                    <Button variant="ghost" size="icon-xs">
                      <IconCopy />
                    </Button>
                    {msg.role === "assistant" && (
                      <Button variant="ghost" size="icon-xs">
                        <IconRefresh />
                      </Button>
                    )}
                  </ChatMessageActions>
                </ChatMessageMeta>
              </ChatMessageContent>
            </ChatMessage>
          ))}
        </ChatLayoutContent>

        {/* Input */}
        <ChatLayoutFooter>
          <ChatInput>
            <ChatInputArea placeholder="Ask anything…" />
            <ChatInputToolbar>
              <ChatInputActions>
                <Button variant="ghost" size="icon-sm">
                  <IconPaperclip />
                </Button>
                <Button variant="ghost" size="icon-sm">
                  <IconMicrophone />
                </Button>
              </ChatInputActions>
              <Button size="icon-sm">
                <IconSend />
              </Button>
            </ChatInputToolbar>
          </ChatInput>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            AI can make mistakes. Verify important information.
          </p>
        </ChatLayoutFooter>
      </ChatLayoutMain>
    </ChatLayout>
  ),
}

// --- Loading State ---

export const Loading: Story = {
  render: () => (
    <ChatLayout>
      <ChatLayoutSidebar>
        <div className="flex h-14 items-center gap-2 border-b px-4">
          <IconSparkles className="size-5 text-primary" />
          <span className="text-sm font-semibold">Claude</span>
        </div>
        <div className="flex flex-col gap-2 p-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full rounded-lg" />
          ))}
        </div>
      </ChatLayoutSidebar>

      <ChatLayoutMain>
        <ChatLayoutHeader>
          <Skeleton className="h-4 w-40" />
        </ChatLayoutHeader>

        <ChatLayoutContent>
          {/* User message */}
          <ChatMessage role="user">
            <ChatMessageContent>
              <ChatMessageBubble role="user">How does RAG work?</ChatMessageBubble>
            </ChatMessageContent>
          </ChatMessage>

          {/* AI typing */}
          <ChatMessage role="assistant">
            <ChatMessageAvatar>
              <Avatar size="sm">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            </ChatMessageAvatar>
            <ChatMessageContent>
              <ChatMessageBubble role="assistant">
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-current" />
                </div>
              </ChatMessageBubble>
            </ChatMessageContent>
          </ChatMessage>
        </ChatLayoutContent>

        <ChatLayoutFooter>
          <ChatInput>
            <ChatInputArea placeholder="Ask anything…" disabled />
            <ChatInputToolbar>
              <ChatInputActions>
                <Button variant="ghost" size="icon-sm" disabled>
                  <IconPaperclip />
                </Button>
              </ChatInputActions>
              <Button size="icon-sm" disabled>
                <IconSend />
              </Button>
            </ChatInputToolbar>
          </ChatInput>
        </ChatLayoutFooter>
      </ChatLayoutMain>
    </ChatLayout>
  ),
}

// --- Empty State ---

export const EmptyState: Story = {
  render: () => (
    <ChatLayout>
      <ChatLayoutSidebar>
        <div className="flex h-14 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <IconSparkles className="size-5 text-primary" />
            <span className="text-sm font-semibold">Claude</span>
          </div>
          <Button variant="ghost" size="icon-sm">
            <IconPlus />
          </Button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 p-6 text-center">
          <IconMessage className="size-8 text-muted-foreground/50" />
          <p className="text-sm text-muted-foreground">No conversations yet</p>
        </div>
      </ChatLayoutSidebar>

      <ChatLayoutMain>
        <ChatLayoutHeader />

        <ChatLayoutContent className="items-center justify-center">
          <div className="flex max-w-md flex-col items-center gap-4 text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
              <IconSparkles className="size-7 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">How can I help you?</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Start a conversation, ask a question, or explore ideas.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-2">
              {["Explain a concept", "Write code", "Summarise text", "Brainstorm ideas"].map((s) => (
                <button
                  key={s}
                  className="rounded-lg border bg-muted/40 px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </ChatLayoutContent>

        <ChatLayoutFooter>
          <ChatInput>
            <ChatInputArea placeholder="Ask anything…" />
            <ChatInputToolbar>
              <ChatInputActions>
                <Button variant="ghost" size="icon-sm">
                  <IconPaperclip />
                </Button>
                <Button variant="ghost" size="icon-sm">
                  <IconMicrophone />
                </Button>
              </ChatInputActions>
              <Button size="icon-sm">
                <IconSend />
              </Button>
            </ChatInputToolbar>
          </ChatInput>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            AI can make mistakes. Verify important information.
          </p>
        </ChatLayoutFooter>
      </ChatLayoutMain>
    </ChatLayout>
  ),
}
