import type { Meta, StoryObj } from "@storybook/react-vite"

import { Stack } from "./stack"

const meta = {
  title: "Molecules/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
    gap: {
      control: "select",
      options: ["0", "1", "2", "3", "4", "5", "6", "8", "10", "12"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "evenly"],
    },
  },
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

function Box({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`flex h-10 min-w-16 items-center justify-center rounded-lg border border-dashed bg-muted/40 px-3 text-xs font-mono text-muted-foreground ${className ?? ""}`}
    >
      {label}
    </div>
  )
}

// --- Playground ---

export const Playground: Story = {
  args: {
    direction: "vertical",
    gap: "4",
  },
  render: (args) => (
    <div className="w-64">
      <Stack {...args}>
        <Box label="Item 1" />
        <Box label="Item 2" />
        <Box label="Item 3" />
      </Stack>
    </div>
  ),
}

// --- Vertical (default) ---

export const Vertical: Story = {
  render: () => (
    <div className="w-64">
      <Stack direction="vertical" gap="4">
        <Box label="Item 1" />
        <Box label="Item 2" />
        <Box label="Item 3" />
      </Stack>
    </div>
  ),
}

// --- Horizontal ---

export const Horizontal: Story = {
  render: () => (
    <Stack direction="horizontal" gap="4" align="center">
      <Box label="Item 1" />
      <Box label="Item 2" />
      <Box label="Item 3" />
    </Stack>
  ),
}

// --- Gap Variants ---

export const GapVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(["2", "4", "6", "8", "12"] as const).map((gap) => (
        <div key={gap} className="flex flex-col gap-1.5">
          <span className="text-xs text-muted-foreground font-mono">gap="{gap}"</span>
          <Stack direction="horizontal" gap={gap} align="center">
            <Box label="A" />
            <Box label="B" />
            <Box label="C" />
          </Stack>
        </div>
      ))}
    </div>
  ),
}

// --- Alignment ---

export const Alignment: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(["start", "center", "end"] as const).map((align) => (
        <div key={align} className="flex flex-col gap-1.5">
          <span className="text-xs text-muted-foreground font-mono">align="{align}"</span>
          <Stack direction="horizontal" gap="3" align={align} className="h-20 rounded-lg border border-dashed p-2">
            <Box label="Short" />
            <Box label="Taller" className="h-14" />
            <Box label="Med" className="h-10" />
          </Stack>
        </div>
      ))}
    </div>
  ),
}

// --- Justify ---

export const Justify: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6">
      {(["start", "center", "end", "between", "evenly"] as const).map((justify) => (
        <div key={justify} className="flex flex-col gap-1.5">
          <span className="text-xs text-muted-foreground font-mono">justify="{justify}"</span>
          <Stack direction="horizontal" gap="2" justify={justify} className="w-full">
            <Box label="A" />
            <Box label="B" />
            <Box label="C" />
          </Stack>
        </div>
      ))}
    </div>
  ),
}

// --- Wrapping ---

export const Wrapping: Story = {
  render: () => (
    <div className="w-72">
      <Stack direction="horizontal" gap="2" wrap="wrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <Box key={i} label={`Item ${i + 1}`} />
        ))}
      </Stack>
    </div>
  ),
}
