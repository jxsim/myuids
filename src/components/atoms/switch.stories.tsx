import type { Meta, StoryObj } from "@storybook/react-vite"

import { Switch } from "./switch"

const meta = {
  title: "UI/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default"],
    },
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    size: "default",
    disabled: false,
    defaultChecked: false,
  },
}

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Switch size="sm" defaultChecked />
        <span className="text-xs text-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Switch size="default" defaultChecked />
        <span className="text-xs text-muted-foreground">Default</span>
      </div>
    </div>
  ),
}

// --- States ---

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch />
        <span className="text-sm">Unchecked</span>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked />
        <span className="text-sm">Checked</span>
      </div>
      <div className="flex items-center gap-3">
        <Switch disabled />
        <span className="text-sm text-muted-foreground">Disabled (off)</span>
      </div>
      <div className="flex items-center gap-3">
        <Switch disabled defaultChecked />
        <span className="text-sm text-muted-foreground">Disabled (on)</span>
      </div>
    </div>
  ),
}

// --- In a Form ---

export const InAForm: Story = {
  render: () => (
    <div className="w-80 rounded-lg border p-4">
      <h3 className="mb-4 text-sm font-medium">Notification Preferences</h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Email notifications</p>
            <p className="text-xs text-muted-foreground">
              Receive updates via email
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Push notifications</p>
            <p className="text-xs text-muted-foreground">
              Receive push alerts on your device
            </p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Marketing emails</p>
            <p className="text-xs text-muted-foreground">
              News, updates, and promotions
            </p>
          </div>
          <Switch defaultChecked />
        </div>
      </div>
    </div>
  ),
}
