import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconPlus,
  IconSearch,
  IconTrash,
  IconDownload,
} from "@tabler/icons-react"

import { Button } from "./button"

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "default", "lg", "icon-xs", "icon-sm", "icon", "icon-lg"],
    },
    disabled: { control: "boolean" },
    asChild: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
  },
}

// --- Variants ---

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

// --- With Icons ---

export const WithLeadingIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">
        <IconSearch data-icon="inline-start" />
        Search
      </Button>
      <Button size="sm">
        <IconSearch data-icon="inline-start" />
        Search
      </Button>
      <Button>
        <IconSearch data-icon="inline-start" />
        Search
      </Button>
      <Button size="lg">
        <IconSearch data-icon="inline-start" />
        Search
      </Button>
    </div>
  ),
}

export const WithTrailingIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">
        Download
        <IconDownload data-icon="inline-end" />
      </Button>
      <Button size="sm">
        Download
        <IconDownload data-icon="inline-end" />
      </Button>
      <Button>
        Download
        <IconDownload data-icon="inline-end" />
      </Button>
      <Button size="lg">
        Download
        <IconDownload data-icon="inline-end" />
      </Button>
    </div>
  ),
}

// --- Icon Only ---

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="icon-xs" aria-label="Add item">
        <IconPlus />
      </Button>
      <Button size="icon-sm" aria-label="Add item">
        <IconPlus />
      </Button>
      <Button size="icon" aria-label="Add item">
        <IconPlus />
      </Button>
      <Button size="icon-lg" aria-label="Add item">
        <IconPlus />
      </Button>
    </div>
  ),
}

export const IconOnlyVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="icon" variant="default" aria-label="Add">
        <IconPlus />
      </Button>
      <Button size="icon" variant="outline" aria-label="Add">
        <IconPlus />
      </Button>
      <Button size="icon" variant="secondary" aria-label="Add">
        <IconPlus />
      </Button>
      <Button size="icon" variant="ghost" aria-label="Add">
        <IconPlus />
      </Button>
      <Button size="icon" variant="destructive" aria-label="Delete">
        <IconTrash />
      </Button>
    </div>
  ),
}

// --- States ---

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button disabled>Default</Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
      <Button variant="destructive" disabled>
        Destructive
      </Button>
      <Button variant="link" disabled>
        Link
      </Button>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button aria-invalid="true">Default</Button>
      <Button variant="outline" aria-invalid="true">
        Outline
      </Button>
    </div>
  ),
}

// --- AsChild ---

export const AsLink: Story = {
  render: () => (
    <Button asChild>
      <a href="#">Open link</a>
    </Button>
  ),
}
