import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconCalculator,
  IconCalendar,
  IconCreditCard,
  IconFolder,
  IconHash,
  IconMoodSmile,
  IconMusic,
  IconSearch,
  IconSettings,
  IconUser,
} from "@tabler/icons-react"

import { Button } from "@/components/atoms/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command"

const meta = {
  title: "Organisms/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <Command className="w-72 rounded-xl border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <IconCalendar />
            Calendar
          </CommandItem>
          <CommandItem>
            <IconMoodSmile />
            Search Emoji
          </CommandItem>
          <CommandItem>
            <IconCalculator />
            Calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <IconUser />
            Profile
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconCreditCard />
            Billing
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconSettings />
            Settings
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

// --- With Shortcuts ---

export const WithShortcuts: Story = {
  render: () => (
    <Command className="w-72 rounded-xl border shadow-md">
      <CommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <IconFolder />
            Open File
            <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconSearch />
            Find in Files
            <CommandShortcut>⇧⌘F</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconMusic />
            Toggle Music
            <CommandShortcut>⌘M</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconHash />
            Go to Line
            <CommandShortcut>⌃G</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

// --- Dialog ---

export const DialogStory: Story = {
  name: "Command Dialog",
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          <IconSearch />
          Open Command Palette
          <CommandShortcut>⌘K</CommandShortcut>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem onSelect={() => setOpen(false)}>
                  <IconCalendar />
                  Calendar
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <IconMoodSmile />
                  Search Emoji
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <IconCalculator />
                  Calculator
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem onSelect={() => setOpen(false)}>
                  <IconUser />
                  Profile
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <IconSettings />
                  Settings
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </>
    )
  },
}
