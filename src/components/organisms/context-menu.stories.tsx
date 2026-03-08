import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconClipboard,
  IconCopy,
  IconCut,
  IconEdit,
  IconExternalLink,
  IconShare,
  IconTrash,
} from "@tabler/icons-react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./context-menu"

const meta = {
  title: "Organisms/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
          Right-click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <IconEdit />
          Edit
          <ContextMenuShortcut>⌘E</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <IconCopy />
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <IconCut />
          Cut
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <IconClipboard />
          Paste
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <IconTrash />
          Delete
          <ContextMenuShortcut>⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

// --- Full Featured ---

export const FullFeatured: Story = {
  render: () => {
    const [bookmarked, setBookmarked] = useState(true)
    const [notifications, setNotifications] = useState(false)
    const [view, setView] = useState("comfortable")

    return (
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="flex h-40 w-72 items-center justify-center rounded-xl border border-dashed bg-muted/30 text-sm text-muted-foreground select-none">
            Right-click for full context menu
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          <ContextMenuLabel>File Actions</ContextMenuLabel>
          <ContextMenuGroup>
            <ContextMenuItem>
              <IconEdit />
              Edit
              <ContextMenuShortcut>⌘E</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <IconCopy />
              Duplicate
              <ContextMenuShortcut>⌘D</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <IconShare />
                Share
              </ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>
                  <IconExternalLink />
                  Copy Link
                </ContextMenuItem>
                <ContextMenuItem>Email</ContextMenuItem>
                <ContextMenuItem>Slack</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuLabel>Preferences</ContextMenuLabel>
          <ContextMenuCheckboxItem
            checked={bookmarked}
            onCheckedChange={setBookmarked}
          >
            Bookmarked
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={notifications}
            onCheckedChange={setNotifications}
          >
            Notifications
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>View</ContextMenuLabel>
          <ContextMenuRadioGroup value={view} onValueChange={setView}>
            <ContextMenuRadioItem value="comfortable">
              Comfortable
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="compact">Compact</ContextMenuRadioItem>
            <ContextMenuRadioItem value="list">List</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive">
            <IconTrash />
            Delete
            <ContextMenuShortcut>⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}
