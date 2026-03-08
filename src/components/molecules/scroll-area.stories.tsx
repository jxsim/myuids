import type { Meta, StoryObj } from "@storybook/react-vite"

import { ScrollArea, ScrollBar } from "./scroll-area"
import { Separator } from "@/components/atoms/separator"

const meta = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = [
  "React", "TypeScript", "Tailwind CSS", "Radix UI", "Next.js",
  "Vite", "Node.js", "GraphQL", "REST API", "PostgreSQL",
  "MongoDB", "Redis", "Docker", "Kubernetes", "AWS",
  "Vercel", "GitHub Actions", "Jest", "Cypress", "Storybook",
]

const notifications = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Notification ${i + 1}`,
  description: `This is the description for notification ${i + 1}. It has some more detail about what happened.`,
  time: `${i + 1}m ago`,
}))

// --- Playground ---

export const Playground: Story = {
  args: {
    className: "h-64 w-72 rounded-md border",
  },
  render: (args) => (
    <ScrollArea {...args}>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="py-2 text-sm">{tag}</div>
            <Separator className="my-0" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

// --- Vertical Scroll ---

export const VerticalScroll: Story = {
  render: () => (
    <ScrollArea className="h-72 w-80 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-semibold">Notifications</h4>
        <div className="space-y-3">
          {notifications.map((n) => (
            <div key={n.id} className="flex flex-col gap-0.5 rounded-md p-2 hover:bg-muted">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{n.title}</span>
                <span className="text-xs text-muted-foreground">{n.time}</span>
              </div>
              <p className="text-xs text-muted-foreground">{n.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
}

// --- Horizontal Scroll ---

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea className="w-80 rounded-md border whitespace-nowrap">
      <div className="flex gap-3 p-4">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-md bg-muted text-sm font-medium"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

// --- Both Axes ---

export const BothAxes: Story = {
  render: () => (
    <ScrollArea className="h-56 w-80 rounded-md border">
      <div className="p-4" style={{ width: "600px" }}>
        <h4 className="mb-3 text-sm font-semibold whitespace-nowrap">
          Wide Content with Long Rows
        </h4>
        {Array.from({ length: 20 }, (_, row) => (
          <div key={row} className="flex gap-4 py-1 text-sm whitespace-nowrap border-b last:border-0">
            {Array.from({ length: 6 }, (_, col) => (
              <span key={col} className="w-20 shrink-0 text-muted-foreground">
                Row {row + 1}, Col {col + 1}
              </span>
            ))}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}
