import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconCopy,
  IconRefresh,
  IconThumbUp,
  IconThumbDown,
  IconSparkles,
} from "@tabler/icons-react"

import { Avatar, AvatarFallback } from "@/components/atoms/avatar"
import { Button } from "@/components/atoms/button"
import {
  ChatMessage,
  ChatMessageActions,
  ChatMessageAvatar,
  ChatMessageBubble,
  ChatMessageContent,
  ChatMessageMeta,
} from "./chat-message"

const meta = {
  title: "Templates/ChatMessage",
  component: ChatMessage,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ChatMessage>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-2xl">
      {/* User */}
      <ChatMessage role="user">
        <ChatMessageContent>
          <ChatMessageBubble role="user">
            How does retrieval-augmented generation work?
          </ChatMessageBubble>
          <ChatMessageMeta>
            <span>2:41 PM</span>
          </ChatMessageMeta>
        </ChatMessageContent>
      </ChatMessage>

      {/* Assistant */}
      <ChatMessage role="assistant">
        <ChatMessageAvatar>
          <Avatar size="sm">
            <AvatarFallback>
              <IconSparkles className="size-3.5" />
            </AvatarFallback>
          </Avatar>
        </ChatMessageAvatar>
        <ChatMessageContent>
          <ChatMessageBubble role="assistant">
            RAG combines a retrieval system with a generative model. When you ask a
            question, the system retrieves relevant documents from a knowledge base,
            then the language model uses those documents as context to generate a
            grounded, accurate response — reducing hallucinations without retraining.
          </ChatMessageBubble>
          <ChatMessageMeta>
            <span>2:41 PM</span>
            <span>· GPT-4o</span>
            <ChatMessageActions>
              <Button variant="ghost" size="icon-xs">
                <IconCopy />
              </Button>
              <Button variant="ghost" size="icon-xs">
                <IconRefresh />
              </Button>
              <Button variant="ghost" size="icon-xs">
                <IconThumbUp />
              </Button>
              <Button variant="ghost" size="icon-xs">
                <IconThumbDown />
              </Button>
            </ChatMessageActions>
          </ChatMessageMeta>
        </ChatMessageContent>
      </ChatMessage>
    </div>
  ),
}

// --- User Message ---

export const UserMessage: Story = {
  render: () => (
    <div className="max-w-2xl">
      <ChatMessage role="user">
        <ChatMessageContent>
          <ChatMessageBubble role="user">
            Can you write a Python function that checks if a string is a palindrome?
          </ChatMessageBubble>
          <ChatMessageMeta>
            <span>3:15 PM</span>
          </ChatMessageMeta>
        </ChatMessageContent>
      </ChatMessage>
    </div>
  ),
}

// --- Assistant Message ---

export const AssistantMessage: Story = {
  render: () => (
    <div className="max-w-2xl">
      <ChatMessage role="assistant">
        <ChatMessageAvatar>
          <Avatar size="sm">
            <AvatarFallback>
              <IconSparkles className="size-3.5" />
            </AvatarFallback>
          </Avatar>
        </ChatMessageAvatar>
        <ChatMessageContent>
          <ChatMessageBubble role="assistant">
            Here's a concise Python palindrome checker:
            {"\n\n"}
            def is_palindrome(s: str) → bool:{"\n"}
            {"    "}s = s.lower().replace(" ", ""){"\n"}
            {"    "}return s == s[::-1]
            {"\n\n"}
            It strips spaces and lowercases the input before comparing the string with
            its reverse.
          </ChatMessageBubble>
          <ChatMessageMeta>
            <span>3:15 PM</span>
            <span>· GPT-4o</span>
            <ChatMessageActions>
              <Button variant="ghost" size="icon-xs">
                <IconCopy />
              </Button>
              <Button variant="ghost" size="icon-xs">
                <IconRefresh />
              </Button>
            </ChatMessageActions>
          </ChatMessageMeta>
        </ChatMessageContent>
      </ChatMessage>
    </div>
  ),
}

// --- Typing Indicator ---

export const TypingIndicator: Story = {
  render: () => (
    <div className="max-w-2xl">
      <ChatMessage role="assistant">
        <ChatMessageAvatar>
          <Avatar size="sm">
            <AvatarFallback>
              <IconSparkles className="size-3.5" />
            </AvatarFallback>
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
    </div>
  ),
}
