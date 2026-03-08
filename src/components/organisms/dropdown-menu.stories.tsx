import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconBell,
  IconChevronDown,
  IconCloud,
  IconCreditCard,
  IconKeyboard,
  IconLogout,
  IconMoon,
  IconPlus,
  IconSettings,
  IconSun,
  IconTrash,
  IconUser,
} from "@tabler/icons-react"

import { Button } from "@/components/atoms/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu"

const meta = {
  title: "Organisms/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Options
          <IconChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconUser />
          Profile
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconCreditCard />
          Billing
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconSettings />
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <IconLogout />
          Log out
          <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

// --- With Submenus ---

export const WithSubmenus: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <IconPlus />
          New
          <IconChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconUser />
            New Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconBell />
            New Notification
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <IconCloud />
            Export
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Export as PDF</DropdownMenuItem>
            <DropdownMenuItem>Export as CSV</DropdownMenuItem>
            <DropdownMenuItem>Export as JSON</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <IconTrash />
          Delete All
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

// --- Checkbox Items ---

export const CheckboxItems: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = useState(true)
    const [showActivityBar, setShowActivityBar] = useState(false)
    const [showPanel, setShowPanel] = useState(false)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">View Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

// --- Radio Items ---

export const RadioItems: Story = {
  render: () => {
    const [theme, setTheme] = useState("system")

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {theme === "light" ? (
              <IconSun />
            ) : theme === "dark" ? (
              <IconMoon />
            ) : (
              <IconKeyboard />
            )}
            Theme
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value="light">
              <IconSun />
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              <IconMoon />
              Dark
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              <IconKeyboard />
              System
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
