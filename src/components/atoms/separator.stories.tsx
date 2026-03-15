import type { Meta, StoryObj } from "@storybook/react-vite"

import { Separator } from "./separator"

const meta = {
  title: "Atoms/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    orientation: "horizontal",
    className: "w-64",
  },
}

// --- Horizontal ---

export const Horizontal: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <div className="text-sm font-medium">Above separator</div>
      <Separator />
      <div className="text-sm text-muted-foreground">Below separator</div>
    </div>
  ),
}

// --- Vertical ---

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-8">
      <span className="text-sm">Home</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Docs</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Blog</span>
    </div>
  ),
}

// --- In Content ---

export const InContent: Story = {
  render: () => (
    <div className="w-72 space-y-4">
      <div>
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground mt-1">An open-source UI component library.</p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  ),
}
