import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconSearch,
  IconDownload,
  IconTrash,
  IconPlus,
  IconSettings,
} from "@tabler/icons-react"

import { Badge } from "./badge"
import { Button } from "./button"
import { Icon } from "./icon"

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placement: {
      control: "select",
      options: [undefined, "start", "end"],
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    as: IconSearch,
    placement: "start",
  },
}

// --- In Button (start) ---

export const ButtonStart: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">
        <Icon as={IconSearch} placement="start" />
        Search
      </Button>
      <Button size="sm">
        <Icon as={IconSearch} placement="start" />
        Search
      </Button>
      <Button>
        <Icon as={IconSearch} placement="start" />
        Search
      </Button>
      <Button size="lg">
        <Icon as={IconSearch} placement="start" />
        Search
      </Button>
    </div>
  ),
}

// --- In Button (end) ---

export const ButtonEnd: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">
        Download
        <Icon as={IconDownload} placement="end" />
      </Button>
      <Button size="sm">
        Download
        <Icon as={IconDownload} placement="end" />
      </Button>
      <Button>
        Download
        <Icon as={IconDownload} placement="end" />
      </Button>
      <Button size="lg">
        Download
        <Icon as={IconDownload} placement="end" />
      </Button>
    </div>
  ),
}

// --- In Badge ---

export const InBadge: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>
        <Icon as={IconPlus} placement="start" />
        New
      </Badge>
      <Badge variant="destructive">
        Deleted
        <Icon as={IconTrash} placement="end" />
      </Badge>
      <Badge variant="secondary">
        <Icon as={IconSettings} placement="start" />
        Config
      </Badge>
    </div>
  ),
}

// --- No Placement (inline, no padding adjustment) ---

export const NoPlacement: Story = {
  render: () => (
    <div className="flex flex-col gap-3 text-sm text-muted-foreground">
      <p>Without placement — no padding adjustment applied:</p>
      <div className="flex items-center gap-2">
        <Icon as={IconSearch} className="size-4" />
        <span>Inline icon without placement</span>
      </div>
      <p className="mt-2">With placement — padding automatically adjusts:</p>
      <Button>
        <Icon as={IconSearch} placement="start" />
        With placement start
      </Button>
    </div>
  ),
}
