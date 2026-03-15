import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "./label"
import { Checkbox } from "./checkbox"

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    disabled: false,
  },
}

// --- States ---

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="unchecked" />
        <Label htmlFor="unchecked">Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checked" defaultChecked />
        <Label htmlFor="checked">Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Disabled</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Disabled checked</Label>
      </div>
    </div>
  ),
}

// --- Invalid ---

export const Invalid: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="invalid" aria-invalid="true" />
        <Label htmlFor="invalid">Accept terms (required)</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="invalid-checked" aria-invalid="true" defaultChecked />
        <Label htmlFor="invalid-checked">Invalid checked</Label>
      </div>
    </div>
  ),
}

// --- In a List ---

export const InAList: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {["Notifications", "Marketing emails", "Security alerts", "Weekly digest"].map((item) => (
        <div key={item} className="flex items-center gap-2">
          <Checkbox id={item} defaultChecked={item === "Notifications" || item === "Security alerts"} />
          <Label htmlFor={item}>{item}</Label>
        </div>
      ))}
    </div>
  ),
}
