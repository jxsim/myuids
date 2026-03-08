import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "./label"
import { Input } from "./input"

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search", "date", "file"],
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
}

// --- Types ---

export const Types: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="type-text">Text</Label>
        <Input id="type-text" type="text" placeholder="Enter text..." />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="type-email">Email</Label>
        <Input id="type-email" type="email" placeholder="you@example.com" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="type-password">Password</Label>
        <Input id="type-password" type="password" placeholder="••••••••" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="type-number">Number</Label>
        <Input id="type-number" type="number" placeholder="0" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="type-date">Date</Label>
        <Input id="type-date" type="date" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="type-file">File</Label>
        <Input id="type-file" type="file" />
      </div>
    </div>
  ),
}

// --- States ---

export const States: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <Label>Default</Label>
        <Input placeholder="Placeholder text" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>With value</Label>
        <Input defaultValue="Filled value" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Disabled</Label>
        <Input disabled placeholder="Disabled input" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Disabled with value</Label>
        <Input disabled defaultValue="Disabled with value" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Invalid</Label>
        <Input aria-invalid="true" defaultValue="invalid@" />
      </div>
    </div>
  ),
}
