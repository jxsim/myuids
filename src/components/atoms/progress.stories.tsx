import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Progress } from "./progress"

const meta = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    value: 60,
    className: "w-80",
  },
}

// --- Values ---

export const Values: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0%</span>
          <span>Empty</span>
        </div>
        <Progress value={0} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>25%</span>
          <span>Quarter</span>
        </div>
        <Progress value={25} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>50%</span>
          <span>Half</span>
        </div>
        <Progress value={50} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>75%</span>
          <span>Three quarters</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>100%</span>
          <span>Complete</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
}

// --- Animated ---

export const Animated: Story = {
  render: () => {
    const [value, setValue] = React.useState(0)

    React.useEffect(() => {
      const interval = setInterval(() => {
        setValue((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 5
        })
      }, 200)
      return () => clearInterval(interval)
    }, [])

    return (
      <div className="w-80 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Loading...</span>
          <span className="text-muted-foreground">{value}%</span>
        </div>
        <Progress value={value} />
      </div>
    )
  },
}

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="space-y-1">
        <span className="text-xs text-muted-foreground">Default (h-1)</span>
        <Progress value={65} />
      </div>
      <div className="space-y-1">
        <span className="text-xs text-muted-foreground">Medium (h-2)</span>
        <Progress value={65} className="h-2" />
      </div>
      <div className="space-y-1">
        <span className="text-xs text-muted-foreground">Large (h-3)</span>
        <Progress value={65} className="h-3" />
      </div>
      <div className="space-y-1">
        <span className="text-xs text-muted-foreground">Extra Large (h-4)</span>
        <Progress value={65} className="h-4" />
      </div>
    </div>
  ),
}
