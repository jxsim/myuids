import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconCommand, IconInfo, IconTrash } from "@tabler/icons-react"

import { Button } from "@/components/atoms/button"
import { Kbd, KbdGroup } from "@/components/atoms/kbd"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"

const meta = {
  title: "Organisms/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>Tooltip content</TooltipContent>
    </Tooltip>
  ),
}

// --- Sides ---

export const Sides: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 place-items-center p-12">
      <div />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>
      <div />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Tooltip on left</TooltipContent>
      </Tooltip>
      <div />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Tooltip on right</TooltipContent>
      </Tooltip>
      <div />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>
      <div />
    </div>
  ),
}

// --- With Keyboard Shortcut ---

export const WithKeyboardShortcut: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Delete">
            <IconTrash />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Delete
          <KbdGroup>
            <Kbd>Del</Kbd>
          </KbdGroup>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Open command palette">
            <IconCommand />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Command palette
          <KbdGroup>
            <Kbd>
              <IconCommand />
            </Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

// --- On Icon Button ---

export const OnIconButton: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="More information">
            <IconInfo />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          This field is required for account verification.
        </TooltipContent>
      </Tooltip>
      <span className="text-sm">Email address</span>
    </div>
  ),
}
