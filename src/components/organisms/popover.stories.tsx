import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconSettings,
  IconUser,
  IconBell,
  IconPalette,
} from "@tabler/icons-react"

import { Button } from "@/components/atoms/button"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  PopoverTrigger,
} from "./popover"

const meta = {
  title: "UI/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverDescription>
            This is a description for the popover. It provides additional
            context for the user.
          </PopoverDescription>
        </PopoverHeader>
        <p className="text-sm text-muted-foreground">
          You can place any content inside this popover.
        </p>
      </PopoverContent>
    </Popover>
  ),
}

// --- Profile Settings ---

export const ProfileSettings: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <IconUser />
          <span className="sr-only">User settings</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <PopoverHeader>
          <PopoverTitle>Account Settings</PopoverTitle>
          <PopoverDescription>
            Manage your account preferences.
          </PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-1">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <IconUser className="size-4" />
            Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <IconBell className="size-4" />
            Notifications
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <IconPalette className="size-4" />
            Appearance
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <IconSettings className="size-4" />
            Advanced
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

// --- Form in Popover ---

export const FormInPopover: Story = {
  render: () => {
    const [name, setName] = React.useState("John Doe")
    const [email, setEmail] = React.useState("john@example.com")

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button>
            <IconSettings />
            Edit Profile
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <PopoverHeader>
            <PopoverTitle>Edit Profile</PopoverTitle>
            <PopoverDescription>
              Make changes to your profile here.
            </PopoverDescription>
          </PopoverHeader>
          <div className="grid gap-3">
            <div className="grid gap-1">
              <label className="text-xs font-medium" htmlFor="popover-name">
                Name
              </label>
              <input
                id="popover-name"
                className="h-8 rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-1">
              <label className="text-xs font-medium" htmlFor="popover-email">
                Email
              </label>
              <input
                id="popover-email"
                className="h-8 rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button size="sm" className="mt-1">
              Save Changes
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
}

// --- Placement Variants ---

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 place-items-center p-12">
      {(["start", "center", "end"] as const).map((align) => (
        <Popover key={align}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              align={align}
            </Button>
          </PopoverTrigger>
          <PopoverContent align={align}>
            <PopoverTitle>Aligned: {align}</PopoverTitle>
            <PopoverDescription>
              This popover is aligned to the {align}.
            </PopoverDescription>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}
