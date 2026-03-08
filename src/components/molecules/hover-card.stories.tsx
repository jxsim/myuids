import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconBrandGithub,
  IconCalendar,
  IconLink,
  IconMapPin,
} from "@tabler/icons-react"

import { Button } from "@/components/atoms/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card"

const meta = {
  title: "Molecules/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@janedoe</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold">
            JD
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold">Jane Doe</h4>
            <p className="text-sm text-muted-foreground">
              Product designer and UI/UX enthusiast. Building beautiful
              interfaces one pixel at a time.
            </p>
            <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <IconCalendar className="size-3" />
                Joined March 2020
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

// --- User Profile Card ---

export const UserProfile: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-sm">
      Created by{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="h-auto p-0">
            <IconBrandGithub className="size-4" />
            @johndoe
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white">
                JD
              </div>
              <div>
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-muted-foreground">@johndoe</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Full-stack developer. Open source enthusiast. Coffee-powered.
            </p>
            <div className="flex flex-col gap-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <IconMapPin className="size-3" />
                San Francisco, CA
              </span>
              <span className="flex items-center gap-1.5">
                <IconLink className="size-3" />
                johndoe.dev
              </span>
              <span className="flex items-center gap-1.5">
                <IconCalendar className="size-3" />
                Joined January 2018
              </span>
            </div>
            <div className="flex gap-4 text-xs">
              <span>
                <strong className="text-foreground">248</strong>{" "}
                <span className="text-muted-foreground">Following</span>
              </span>
              <span>
                <strong className="text-foreground">1.2k</strong>{" "}
                <span className="text-muted-foreground">Followers</span>
              </span>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
}

// --- Link Preview ---

export const LinkPreview: Story = {
  render: () => (
    <p className="max-w-sm text-sm">
      Check out the{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="h-auto p-0">
            React documentation
          </Button>
        </HoverCardTrigger>
        <HoverCardContent side="top">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="flex size-6 items-center justify-center rounded bg-blue-500 text-xs font-bold text-white">
                R
              </div>
              <span className="text-sm font-semibold">React</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The library for web and native user interfaces. Build user
              interfaces out of individual pieces called components.
            </p>
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <IconLink className="size-3" />
              react.dev
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      for more details on how to get started.
    </p>
  ),
}
