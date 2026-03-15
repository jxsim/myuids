import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconInfoCircle } from "@tabler/icons-react"

import { Label } from "./label"
import { Input } from "./input"

const meta = {
  title: "Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    children: "Email address",
    htmlFor: "email",
  },
}

// --- With Input ---

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="email-field">Email address</Label>
      <Input id="email-field" type="email" placeholder="you@example.com" />
    </div>
  ),
}

// --- With Icon ---

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="with-icon">
        Username
        <IconInfoCircle className="size-3.5 text-muted-foreground" />
      </Label>
      <Input id="with-icon" placeholder="@handle" />
    </div>
  ),
}

// --- Required ---

export const Required: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="required-field">
        Password
        <span className="text-destructive">*</span>
      </Label>
      <Input id="required-field" type="password" />
    </div>
  ),
}
