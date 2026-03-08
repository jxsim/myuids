import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconPlus } from "@tabler/icons-react"

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "./avatar"

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    size: "default",
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage
        src="https://i.pravatar.cc/150?img=12"
        alt="Jane Cooper"
      />
      <AvatarFallback>JC</AvatarFallback>
    </Avatar>
  ),
}

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="User" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="User" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="User" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
}

// --- Fallback ---

export const Fallback: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
    </div>
  ),
}

// --- With Badge ---

export const WithBadge: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Avatar size="sm">
        <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="User" />
        <AvatarFallback>U1</AvatarFallback>
        <AvatarBadge className="bg-green-500" />
      </Avatar>
      <Avatar size="default">
        <AvatarImage src="https://i.pravatar.cc/150?img=2" alt="User" />
        <AvatarFallback>U2</AvatarFallback>
        <AvatarBadge className="bg-green-500" />
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User" />
        <AvatarFallback>U3</AvatarFallback>
        <AvatarBadge>
          <IconPlus />
        </AvatarBadge>
      </Avatar>
    </div>
  ),
}

// --- Group ---

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted-foreground">
          Default size
        </p>
        <AvatarGroup>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=10" alt="Alice" />
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="Bob" />
            <AvatarFallback>BO</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Carol" />
            <AvatarFallback>CA</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=13" alt="Dave" />
            <AvatarFallback>DA</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+5</AvatarGroupCount>
        </AvatarGroup>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted-foreground">Large size</p>
        <AvatarGroup>
          <Avatar size="lg">
            <AvatarImage src="https://i.pravatar.cc/150?img=20" alt="Emma" />
            <AvatarFallback>EM</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://i.pravatar.cc/150?img=21" alt="Frank" />
            <AvatarFallback>FR</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://i.pravatar.cc/150?img=22" alt="Grace" />
            <AvatarFallback>GR</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+12</AvatarGroupCount>
        </AvatarGroup>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted-foreground">Small size</p>
        <AvatarGroup>
          <Avatar size="sm">
            <AvatarImage src="https://i.pravatar.cc/150?img=30" alt="Hank" />
            <AvatarFallback>HA</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarImage src="https://i.pravatar.cc/150?img=31" alt="Iris" />
            <AvatarFallback>IR</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="Jake" />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
      </div>
    </div>
  ),
}
