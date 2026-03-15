import type { Meta, StoryObj } from "@storybook/react-vite"

import { Slider } from "./slider"

const meta = {
  title: "Atoms/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: { control: "boolean" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    defaultValue: [40],
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    className: "w-64",
  },
}

// --- Default ---

export const Default: Story = {
  render: () => <Slider defaultValue={[50]} className="w-64" />,
}

// --- Range ---

export const Range: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-64">
      <Slider defaultValue={[20, 80]} className="w-full" />
      <Slider defaultValue={[10, 40, 70]} className="w-full" />
    </div>
  ),
}

// --- Step ---

export const WithStep: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-64">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">Step 10</span>
        <Slider defaultValue={[40]} step={10} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">Step 25</span>
        <Slider defaultValue={[50]} step={25} className="w-full" />
      </div>
    </div>
  ),
}

// --- Disabled ---

export const Disabled: Story = {
  render: () => <Slider defaultValue={[60]} disabled className="w-64" />,
}

// --- Vertical ---

export const Vertical: Story = {
  render: () => (
    <div className="flex gap-8 items-start h-48">
      <Slider defaultValue={[40]} orientation="vertical" className="h-full" />
      <Slider defaultValue={[20, 70]} orientation="vertical" className="h-full" />
    </div>
  ),
}
