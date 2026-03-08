import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconCircleCheck,
  IconAlertCircle,
  IconClock,
  IconStar,
} from "@tabler/icons-react"

import { Badge } from "./badge"

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "success", "warning", "info"],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
}

// --- Variants ---

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
}

// --- With Leading Icon ---

export const WithLeadingIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">
        <IconCircleCheck data-icon="inline-start" />
        Completed
      </Badge>
      <Badge variant="destructive">
        <IconAlertCircle data-icon="inline-start" />
        Failed
      </Badge>
      <Badge variant="secondary">
        <IconClock data-icon="inline-start" />
        Pending
      </Badge>
      <Badge variant="outline">
        <IconStar data-icon="inline-start" />
        Featured
      </Badge>
    </div>
  ),
}

// --- With Trailing Icon ---

export const WithTrailingIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">
        New
        <IconStar data-icon="inline-end" />
      </Badge>
      <Badge variant="secondary">
        Beta
        <IconClock data-icon="inline-end" />
      </Badge>
      <Badge variant="outline">
        Open
        <IconCircleCheck data-icon="inline-end" />
      </Badge>
    </div>
  ),
}

// --- Status Showcase ---

export const StatusShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="w-28 text-sm text-muted-foreground">Build status</span>
        <Badge variant="default">
          <IconCircleCheck data-icon="inline-start" />
          Passing
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-28 text-sm text-muted-foreground">Coverage</span>
        <Badge variant="secondary">94%</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-28 text-sm text-muted-foreground">Deployment</span>
        <Badge variant="destructive">
          <IconAlertCircle data-icon="inline-start" />
          Failed
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-28 text-sm text-muted-foreground">Review</span>
        <Badge variant="outline">
          <IconClock data-icon="inline-start" />
          Pending
        </Badge>
      </div>
    </div>
  ),
}

// --- As Link ---

export const AsLink: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge asChild variant="default">
        <a href="#">v2.4.1</a>
      </Badge>
      <Badge asChild variant="outline">
        <a href="#">Documentation</a>
      </Badge>
      <Badge asChild variant="secondary">
        <a href="#">Learn more</a>
      </Badge>
    </div>
  ),
}
