import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconUser,
  IconSettings,
  IconBell,
  IconShield,
  IconChevronRight,
  IconDots,
} from "@tabler/icons-react"

import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "./item"

const meta = {
  title: "Molecules/Item",
  component: Item,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "muted"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "xs"],
    },
  },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Item content",
    className: "w-72",
  },
}

// --- Variants ---

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-72">
      <Item variant="default">
        <ItemContent>
          <ItemTitle>Default variant</ItemTitle>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline variant</ItemTitle>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted variant</ItemTitle>
        </ItemContent>
      </Item>
    </div>
  ),
}

// --- With Icon ---

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-72">
      <Item>
        <ItemMedia variant="icon">
          <IconUser />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Profile</ItemTitle>
          <ItemDescription>Manage your personal information</ItemDescription>
        </ItemContent>
        <ItemActions>
          <IconChevronRight className="size-4 text-muted-foreground" />
        </ItemActions>
      </Item>
      <Item>
        <ItemMedia variant="icon">
          <IconSettings />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Settings</ItemTitle>
          <ItemDescription>Configure your preferences</ItemDescription>
        </ItemContent>
        <ItemActions>
          <IconChevronRight className="size-4 text-muted-foreground" />
        </ItemActions>
      </Item>
      <Item>
        <ItemMedia variant="icon">
          <IconBell />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Notifications</ItemTitle>
          <ItemDescription>Manage alerts and reminders</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="secondary">3</Badge>
          <IconChevronRight className="size-4 text-muted-foreground" />
        </ItemActions>
      </Item>
    </div>
  ),
}

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground px-1">Default</span>
        <Item size="default" variant="outline">
          <ItemMedia variant="icon">
            <IconShield />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Security</ItemTitle>
            <ItemDescription>Two-factor authentication enabled</ItemDescription>
          </ItemContent>
        </Item>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground px-1">Small</span>
        <Item size="sm" variant="outline">
          <ItemMedia variant="icon">
            <IconShield />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Security</ItemTitle>
            <ItemDescription>Two-factor authentication enabled</ItemDescription>
          </ItemContent>
        </Item>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground px-1">Extra Small</span>
        <Item size="xs" variant="outline">
          <ItemMedia variant="icon">
            <IconShield />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Security</ItemTitle>
            <ItemDescription>Two-factor authentication enabled</ItemDescription>
          </ItemContent>
        </Item>
      </div>
    </div>
  ),
}

// --- Item Group ---

export const WithGroup: Story = {
  render: () => (
    <ItemGroup className="w-72">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <IconUser />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Jane Doe</ItemTitle>
          <ItemDescription>jane@example.com</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon-xs" aria-label="Options">
            <IconDots />
          </Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia variant="icon">
          <IconUser />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Smith</ItemTitle>
          <ItemDescription>john@example.com</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon-xs" aria-label="Options">
            <IconDots />
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
}
