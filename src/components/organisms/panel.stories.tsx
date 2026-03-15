import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@/components/atoms/button"
import {
  Panel,
  PanelAction,
  PanelContent,
  PanelDescription,
  PanelFooter,
  PanelHeader,
  PanelTitle,
} from "./panel"

const meta = {
  title: "Organisms/Panel",
  component: Panel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <div className="w-96">
      <Panel>
        <PanelHeader>
          <PanelTitle>Panel Title</PanelTitle>
          <PanelDescription>A short description of the panel content.</PanelDescription>
        </PanelHeader>
        <PanelContent className="mt-4">
          <div className="h-24 rounded-lg border border-dashed bg-muted/30" />
        </PanelContent>
        <PanelFooter className="mt-4 justify-end">
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button size="sm">Save</Button>
        </PanelFooter>
      </Panel>
    </div>
  ),
}

// --- Variants ---

export const Variants: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      {(["default", "muted", "bordered", "inset", "raised"] as const).map((variant) => (
        <Panel key={variant} variant={variant}>
          <PanelHeader>
            <PanelTitle>variant="{variant}"</PanelTitle>
            <PanelDescription>Surface appearance variant.</PanelDescription>
          </PanelHeader>
        </Panel>
      ))}
    </div>
  ),
}

// --- Padding Sizes ---

export const PaddingSizes: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      {(["none", "sm", "md", "lg"] as const).map((padding) => (
        <Panel key={padding} variant="bordered" padding={padding}>
          <div className="rounded bg-muted/40 py-2 text-center text-xs text-muted-foreground font-mono">
            padding="{padding}"
          </div>
        </Panel>
      ))}
    </div>
  ),
}

// --- With Action ---

export const WithAction: Story = {
  render: () => (
    <div className="w-96">
      <Panel variant="bordered">
        <div className="flex items-start justify-between">
          <PanelHeader>
            <PanelTitle>API Keys</PanelTitle>
            <PanelDescription>Manage your API access credentials.</PanelDescription>
          </PanelHeader>
          <PanelAction>
            <Button size="sm">Generate Key</Button>
          </PanelAction>
        </div>
        <PanelContent className="mt-4">
          <div className="flex flex-col gap-2">
            {["Production", "Staging", "Development"].map((env) => (
              <div
                key={env}
                className="flex items-center justify-between rounded-lg bg-muted/40 px-3 py-2 text-sm"
              >
                <span className="font-medium">{env}</span>
                <span className="font-mono text-xs text-muted-foreground">sk-••••••••</span>
              </div>
            ))}
          </div>
        </PanelContent>
      </Panel>
    </div>
  ),
}

// --- Nested Panels ---

export const NestedPanels: Story = {
  render: () => (
    <div className="w-96">
      <Panel variant="bordered">
        <PanelHeader>
          <PanelTitle>Workspace Settings</PanelTitle>
          <PanelDescription>Configure your workspace preferences.</PanelDescription>
        </PanelHeader>
        <PanelContent className="mt-4 flex flex-col gap-3">
          <Panel variant="inset" padding="sm">
            <PanelTitle className="text-sm">General</PanelTitle>
            <PanelDescription className="mt-0.5 text-xs">Name, logo, and timezone settings.</PanelDescription>
          </Panel>
          <Panel variant="inset" padding="sm">
            <PanelTitle className="text-sm">Members</PanelTitle>
            <PanelDescription className="mt-0.5 text-xs">Manage access and permissions.</PanelDescription>
          </Panel>
          <Panel variant="inset" padding="sm">
            <PanelTitle className="text-sm">Billing</PanelTitle>
            <PanelDescription className="mt-0.5 text-xs">Plan and payment information.</PanelDescription>
          </Panel>
        </PanelContent>
        <PanelFooter className="mt-4 justify-end">
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button size="sm">Save Changes</Button>
        </PanelFooter>
      </Panel>
    </div>
  ),
}
