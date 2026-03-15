import type { Meta, StoryObj } from "@storybook/react-vite"

import { Skeleton } from "./skeleton"

const meta = {
  title: "Atoms/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    className: "h-4 w-48",
  },
}

// --- Shapes ---

export const Shapes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-8 w-32" />
      <Skeleton className="size-12 rounded-full" />
      <Skeleton className="h-24 w-64 rounded-xl" />
    </div>
  ),
}

// --- Card Placeholder ---

export const CardPlaceholder: Story = {
  render: () => (
    <div className="flex flex-col gap-3 rounded-xl border p-4 w-72">
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
      <Skeleton className="h-32 w-full rounded-lg" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-3/5" />
      </div>
    </div>
  ),
}

// --- List Placeholder ---

export const ListPlaceholder: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-72">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-md" />
          <div className="flex flex-col gap-1.5 flex-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  ),
}
