import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconAlignJustified,
  IconList,
  IconLayoutGrid,
  IconLayoutList,
} from "@tabler/icons-react"

import { ToggleGroup, ToggleGroupItem } from "./toggle-group"

const meta = {
  title: "Molecules/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  args: {
    type: "single" as const,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    spacing: {
      control: "number",
    },
  },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    type: "single",
    variant: "default",
    size: "default",
    orientation: "horizontal",
    spacing: 0,
    defaultValue: "center",
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <IconAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <IconAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <IconAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

// --- Variants ---

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">Default</span>
        <ToggleGroup type="single" variant="default" defaultValue="bold">
          <ToggleGroupItem value="bold" aria-label="Bold">
            <IconBold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <IconItalic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <IconUnderline />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">Outline</span>
        <ToggleGroup type="single" variant="outline" defaultValue="bold">
          <ToggleGroupItem value="bold" aria-label="Bold">
            <IconBold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <IconItalic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <IconUnderline />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
}

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">Small</span>
        <ToggleGroup type="single" size="sm" variant="outline" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="Align left">
            <IconAlignLeft />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <IconAlignCenter />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <IconAlignRight />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">Default</span>
        <ToggleGroup type="single" size="default" variant="outline" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="Align left">
            <IconAlignLeft />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <IconAlignCenter />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <IconAlignRight />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">Large</span>
        <ToggleGroup type="single" size="lg" variant="outline" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="Align left">
            <IconAlignLeft />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <IconAlignCenter />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <IconAlignRight />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
}

// --- Multiple Selection ---

export const MultipleSelection: Story = {
  render: () => (
    <ToggleGroup type="multiple" variant="outline" defaultValue={["bold", "italic"]}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <IconBold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <IconItalic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <IconUnderline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

// --- With Spacing ---

export const WithSpacing: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">spacing=0 (joined)</span>
        <ToggleGroup type="single" variant="outline" spacing={0} defaultValue="grid">
          <ToggleGroupItem value="list" aria-label="List view">
            <IconLayoutList />
          </ToggleGroupItem>
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <IconLayoutGrid />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">spacing=1 (gapped)</span>
        <ToggleGroup type="single" variant="outline" spacing={1} defaultValue="grid">
          <ToggleGroupItem value="list" aria-label="List view">
            <IconLayoutList />
          </ToggleGroupItem>
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <IconLayoutGrid />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
}

// --- Vertical Orientation ---

export const VerticalOrientation: Story = {
  render: () => (
    <ToggleGroup
      type="single"
      variant="outline"
      orientation="vertical"
      defaultValue="left"
    >
      <ToggleGroupItem value="left" aria-label="Align left">
        <IconAlignLeft />
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <IconAlignCenter />
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <IconAlignRight />
        Right
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify">
        <IconAlignJustified />
        Justify
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

// --- With Text Labels ---

export const WithTextLabels: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" defaultValue="list">
      <ToggleGroupItem value="list" aria-label="List view">
        <IconList />
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="grid" aria-label="Grid view">
        <IconLayoutGrid />
        Grid
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}
