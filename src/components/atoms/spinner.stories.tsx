import type { Meta, StoryObj } from "@storybook/react-vite"

import { Spinner } from "./spinner"

const meta = {
  title: "UI/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: { control: "text" },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {},
}

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-4" />
        <span className="text-xs text-muted-foreground">size-4 (default)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-6" />
        <span className="text-xs text-muted-foreground">size-6</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-8" />
        <span className="text-xs text-muted-foreground">size-8</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-12" />
        <span className="text-xs text-muted-foreground">size-12</span>
      </div>
    </div>
  ),
}

// --- Colors ---

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <Spinner className="size-6 text-foreground" />
      <Spinner className="size-6 text-primary" />
      <Spinner className="size-6 text-muted-foreground" />
      <Spinner className="size-6 text-destructive" />
    </div>
  ),
}

// --- In Context ---

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Spinner />
        <span>Loading data…</span>
      </div>
      <div className="flex items-center gap-2 rounded-lg border p-4">
        <Spinner className="size-5" />
        <div>
          <p className="text-sm font-medium">Uploading file</p>
          <p className="text-xs text-muted-foreground">Please wait…</p>
        </div>
      </div>
    </div>
  ),
}
