import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./resizable"

const meta = {
  title: "Molecules/Resizable",
  component: ResizablePanelGroup,
  parameters: {
    layout: "padded",
  },
  args: {
    orientation: "horizontal" as const,
  },
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: (args) => (
    <ResizablePanelGroup
      {...args}
      className="min-h-48 max-w-2xl rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium text-sm text-muted-foreground">
            Left Panel
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium text-sm text-muted-foreground">
            Right Panel
          </span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

// --- Horizontal Split ---

export const HorizontalSplit: Story = {
  render: () => (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-48 max-w-2xl rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-sm text-muted-foreground">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-sm text-muted-foreground">Main Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

// --- Vertical Split ---

export const VerticalSplit: Story = {
  render: () => (
    <ResizablePanelGroup
      orientation="vertical"
      className="min-h-64 max-w-2xl rounded-lg border"
    >
      <ResizablePanel defaultSize={40}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-sm text-muted-foreground">Top Panel</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-sm text-muted-foreground">Bottom Panel</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

// --- Three Panels ---

export const ThreePanels: Story = {
  render: () => (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-64 max-w-3xl rounded-lg border"
    >
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-sm text-muted-foreground">Nav</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={55}>
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize={60}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-muted-foreground">Editor</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={40}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-muted-foreground">Terminal</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-sm text-muted-foreground">Inspector</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

// --- Without Handle Indicator ---

export const WithoutHandleIndicator: Story = {
  render: () => (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-48 max-w-2xl rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="text-sm text-muted-foreground">Left</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="text-sm text-muted-foreground">Right</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
