import type { Meta, StoryObj } from "@storybook/react-vite"

import { Container } from "./container"

const meta = {
  title: "Organisms/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    size: "xl",
    children: (
      <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
        Container content — resize the window to see max-width clamping.
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background p-4">
        <Story />
      </div>
    ),
  ],
}

// --- All Sizes ---

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2 bg-background p-4">
      {(["sm", "md", "lg", "xl", "2xl", "full"] as const).map((size) => (
        <Container key={size} size={size}>
          <div className="flex items-center justify-between rounded-lg border border-dashed bg-muted/30 px-3 py-2 text-sm">
            <span className="font-mono font-medium">{size}</span>
            <span className="text-xs text-muted-foreground">
              {size === "sm" && "max-w-screen-sm"}
              {size === "md" && "max-w-screen-md"}
              {size === "lg" && "max-w-screen-lg"}
              {size === "xl" && "max-w-screen-xl"}
              {size === "2xl" && "max-w-screen-2xl"}
              {size === "full" && "max-w-none"}
            </span>
          </div>
        </Container>
      ))}
    </div>
  ),
}
