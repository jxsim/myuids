import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconMicrophone,
  IconBookmark,
} from "@tabler/icons-react"

import { Toggle } from "./toggle"

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
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
    disabled: { control: "boolean" },
    pressed: { control: "boolean" },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    children: "Toggle",
    variant: "default",
    size: "default",
    disabled: false,
  },
}

// --- Variants ---

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="default" aria-label="Default toggle">
        <IconBold />
        Default
      </Toggle>
      <Toggle variant="outline" aria-label="Outline toggle">
        <IconBold />
        Outline
      </Toggle>
    </div>
  ),
}

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle size="sm" aria-label="Small bold">
        <IconBold />
        Small
      </Toggle>
      <Toggle size="default" aria-label="Default bold">
        <IconBold />
        Default
      </Toggle>
      <Toggle size="lg" aria-label="Large bold">
        <IconBold />
        Large
      </Toggle>
    </div>
  ),
}

// --- Icon Only ---

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle size="sm" aria-label="Bold">
        <IconBold />
      </Toggle>
      <Toggle size="default" aria-label="Italic">
        <IconItalic />
      </Toggle>
      <Toggle size="lg" aria-label="Underline">
        <IconUnderline />
      </Toggle>
    </div>
  ),
}

// --- States ---

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="Unpressed">
        <IconBold />
        Unpressed
      </Toggle>
      <Toggle pressed aria-label="Pressed">
        <IconBold />
        Pressed
      </Toggle>
      <Toggle disabled aria-label="Disabled">
        <IconBold />
        Disabled
      </Toggle>
    </div>
  ),
}

// --- Text Formatting Toolbar ---

export const TextFormatting: Story = {
  render: () => (
    <div className="flex items-center gap-1 rounded-lg border p-1">
      <Toggle size="sm" variant="outline" aria-label="Bold">
        <IconBold />
      </Toggle>
      <Toggle size="sm" variant="outline" aria-label="Italic" pressed>
        <IconItalic />
      </Toggle>
      <Toggle size="sm" variant="outline" aria-label="Underline">
        <IconUnderline />
      </Toggle>
      <Toggle size="sm" variant="outline" aria-label="Strikethrough">
        <IconStrikethrough />
      </Toggle>
      <div className="mx-1 h-5 w-px bg-border" />
      <Toggle size="sm" variant="outline" aria-label="Align left" pressed>
        <IconAlignLeft />
      </Toggle>
      <Toggle size="sm" variant="outline" aria-label="Align center">
        <IconAlignCenter />
      </Toggle>
      <Toggle size="sm" variant="outline" aria-label="Align right">
        <IconAlignRight />
      </Toggle>
    </div>
  ),
}

// --- With Label ---

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Toggle variant="outline" aria-label="Mute microphone">
        <IconMicrophone />
        Mute
      </Toggle>
      <Toggle variant="outline" aria-label="Bookmark page" pressed>
        <IconBookmark />
        Bookmarked
      </Toggle>
    </div>
  ),
}
