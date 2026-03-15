import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconChevronDown, IconSelector } from "@tabler/icons-react"

import { Button } from "./button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible"

const meta = {
  title: "Atoms/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <Collapsible className="w-72">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Toggle content
          <IconSelector className="size-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 rounded-lg border p-3 text-sm text-muted-foreground">
        This content is collapsible. Click the button above to hide it.
      </CollapsibleContent>
    </Collapsible>
  ),
}

// --- Default Open ---

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-72">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          <span className="font-medium">@shadcn starred 3 repos</span>
          <IconSelector className="size-4 text-muted-foreground" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-1 mt-1">
        <div className="rounded-md border px-3 py-2 text-sm font-mono">@radix-ui/primitives</div>
        <div className="rounded-md border px-3 py-2 text-sm font-mono">@radix-ui/colors</div>
        <div className="rounded-md border px-3 py-2 text-sm font-mono">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

// --- Controlled ---

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex flex-col gap-4 w-72">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Advanced options</span>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setOpen(!open)}
            aria-label="Toggle"
          >
            <IconChevronDown
              className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </Button>
        </div>
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleContent className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div>Cache TTL: 3600s</div>
            <div>Retry attempts: 3</div>
            <div>Timeout: 30s</div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    )
  },
}
