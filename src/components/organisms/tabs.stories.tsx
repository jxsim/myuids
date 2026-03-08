import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconUser,
  IconLock,
  IconBell,
  IconCreditCard,
  IconCode,
  IconEye,
} from "@tabler/icons-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    defaultValue: "account",
    orientation: "horizontal",
  },
  render: (args) => (
    <Tabs {...args} className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-2">
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </TabsContent>
      <TabsContent value="password" className="p-2">
        <p className="text-sm text-muted-foreground">
          Change your password to keep your account secure.
        </p>
      </TabsContent>
      <TabsContent value="notifications" className="p-2">
        <p className="text-sm text-muted-foreground">
          Configure how and when you receive notifications.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

// --- Default Variant ---

export const DefaultVariant: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[480px]">
      <TabsList variant="default">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-2 rounded-lg border p-4">
        <h3 className="mb-1 text-sm font-medium">Overview</h3>
        <p className="text-sm text-muted-foreground">
          A high-level summary of your project's activity and key metrics.
        </p>
      </TabsContent>
      <TabsContent value="analytics" className="mt-2 rounded-lg border p-4">
        <h3 className="mb-1 text-sm font-medium">Analytics</h3>
        <p className="text-sm text-muted-foreground">
          Detailed analytics and usage data for your application.
        </p>
      </TabsContent>
      <TabsContent value="reports" className="mt-2 rounded-lg border p-4">
        <h3 className="mb-1 text-sm font-medium">Reports</h3>
        <p className="text-sm text-muted-foreground">
          Generated reports and exportable summaries.
        </p>
      </TabsContent>
      <TabsContent value="notifications" className="mt-2 rounded-lg border p-4">
        <h3 className="mb-1 text-sm font-medium">Notifications</h3>
        <p className="text-sm text-muted-foreground">
          Your notification preferences and history.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

// --- Line Variant ---

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="preview" className="w-[480px]">
      <TabsList variant="line">
        <TabsTrigger value="preview">
          <IconEye />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <IconCode />
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="mt-4 rounded-lg border p-6">
        <div className="flex h-24 items-center justify-center rounded-md bg-muted text-sm text-muted-foreground">
          Component preview renders here
        </div>
      </TabsContent>
      <TabsContent value="code" className="mt-4">
        <pre className="rounded-lg bg-muted p-4 text-xs">
          {`<Button variant="default">\n  Click me\n</Button>`}
        </pre>
      </TabsContent>
    </Tabs>
  ),
}

// --- Vertical Orientation ---

export const VerticalOrientation: Story = {
  render: () => (
    <Tabs defaultValue="profile" orientation="vertical" className="w-[560px]">
      <TabsList className="w-40">
        <TabsTrigger value="profile">
          <IconUser />
          Profile
        </TabsTrigger>
        <TabsTrigger value="security">
          <IconLock />
          Security
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <IconBell />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="billing">
          <IconCreditCard />
          Billing
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="rounded-lg border p-4">
        <h3 className="mb-1 text-sm font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Update your name, avatar, and personal details.
        </p>
      </TabsContent>
      <TabsContent value="security" className="rounded-lg border p-4">
        <h3 className="mb-1 text-sm font-medium">Security</h3>
        <p className="text-sm text-muted-foreground">
          Manage your password, two-factor authentication, and active sessions.
        </p>
      </TabsContent>
      <TabsContent value="notifications" className="rounded-lg border p-4">
        <h3 className="mb-1 text-sm font-medium">Notifications</h3>
        <p className="text-sm text-muted-foreground">
          Choose which events you want to be notified about.
        </p>
      </TabsContent>
      <TabsContent value="billing" className="rounded-lg border p-4">
        <h3 className="mb-1 text-sm font-medium">Billing</h3>
        <p className="text-sm text-muted-foreground">
          View your invoices and manage your subscription plan.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

// --- With Icons ---

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="profile" className="w-[480px]">
      <TabsList>
        <TabsTrigger value="profile">
          <IconUser />
          Profile
        </TabsTrigger>
        <TabsTrigger value="security">
          <IconLock />
          Security
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <IconBell />
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="mt-2 rounded-lg border p-4">
        <p className="text-sm text-muted-foreground">
          Update your personal information and avatar.
        </p>
      </TabsContent>
      <TabsContent value="security" className="mt-2 rounded-lg border p-4">
        <p className="text-sm text-muted-foreground">
          Manage your password and authentication settings.
        </p>
      </TabsContent>
      <TabsContent value="notifications" className="mt-2 rounded-lg border p-4">
        <p className="text-sm text-muted-foreground">
          Configure your notification preferences.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

// --- Disabled Tab ---

export const DisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-80">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="draft">Draft</TabsTrigger>
        <TabsTrigger value="archived" disabled>
          Archived
        </TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="mt-2 p-2">
        <p className="text-sm text-muted-foreground">Active items appear here.</p>
      </TabsContent>
      <TabsContent value="draft" className="mt-2 p-2">
        <p className="text-sm text-muted-foreground">Draft items appear here.</p>
      </TabsContent>
    </Tabs>
  ),
}
