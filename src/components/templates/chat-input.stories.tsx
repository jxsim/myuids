import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconSend,
  IconPaperclip,
  IconMicrophone,
  IconChevronDown,
  IconSparkles,
} from "@tabler/icons-react"

import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import { ChatInput, ChatInputActions, ChatInputArea, ChatInputToolbar } from "./chat-input"

const meta = {
  title: "Templates/ChatInput",
  component: ChatInput,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ChatInput>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <div className="max-w-2xl">
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
    </div>
  ),
}

// --- With Model Selector ---

export const WithModelSelector: Story = {
  render: () => (
    <div className="max-w-2xl">
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
            <Badge variant="secondary" className="cursor-pointer gap-1 text-xs">
              <IconSparkles className="size-3" />
              GPT-4o
              <IconChevronDown className="size-3" />
            </Badge>
          </ChatInputActions>
          <Button size="icon-sm">
            <IconSend />
          </Button>
        </ChatInputToolbar>
      </ChatInput>
    </div>
  ),
}

// --- Disabled ---

export const Disabled: Story = {
  render: () => (
    <div className="max-w-2xl">
      <ChatInput className="opacity-60">
        <ChatInputArea placeholder="Waiting for response…" disabled />
        <ChatInputToolbar>
          <ChatInputActions>
            <Button variant="ghost" size="icon-sm" disabled>
              <IconPaperclip />
            </Button>
            <Button variant="ghost" size="icon-sm" disabled>
              <IconMicrophone />
            </Button>
          </ChatInputActions>
          <Button size="icon-sm" disabled>
            <IconSend />
          </Button>
        </ChatInputToolbar>
      </ChatInput>
    </div>
  ),
}
