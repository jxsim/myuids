import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconCommand, IconArrowUp } from "@tabler/icons-react"

import { Kbd, KbdGroup } from "./kbd"

const meta = {
  title: "Atoms/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    children: "K",
  },
}

// --- Single Keys ---

export const SingleKeys: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Kbd>K</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Enter</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Space</Kbd>
    </div>
  ),
}

// --- Icon Keys ---

export const IconKeys: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Kbd>
        <IconCommand />
      </Kbd>
      <Kbd>
        <IconArrowUp />
      </Kbd>
    </div>
  ),
}

// --- Key Groups ---

export const KeyGroups: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <KbdGroup>
        <Kbd>
          <IconCommand />
        </Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>
          <IconCommand />
        </Kbd>
        <Kbd>
          <IconArrowUp />
        </Kbd>
        <Kbd>Z</Kbd>
      </KbdGroup>
    </div>
  ),
}

// --- In Context ---

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-3 text-sm w-64">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">Search</span>
        <KbdGroup>
          <Kbd>
            <IconCommand />
          </Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">Command Palette</span>
        <KbdGroup>
          <Kbd>
            <IconCommand />
          </Kbd>
          <Kbd>P</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">Close</span>
        <Kbd>Esc</Kbd>
      </div>
    </div>
  ),
}
