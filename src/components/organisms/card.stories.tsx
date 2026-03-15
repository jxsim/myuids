import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconDots } from "@tabler/icons-react"

import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"

const meta = {
  title: "Organisms/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    size: "default",
    className: "w-80",
    children: undefined,
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Card content area for your main information.</p>
      </CardContent>
    </Card>
  ),
}

// --- Default ---

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div>Your subscription is expiring soon.</div>
          <div>New comment on your post.</div>
          <div>Payment received successfully.</div>
        </div>
      </CardContent>
    </Card>
  ),
}

// --- With Footer ---

export const WithFooter: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Team Plan</CardTitle>
        <CardDescription>For teams up to 20 members</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$49<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
        <ul className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
          <li>✓ Unlimited projects</li>
          <li>✓ Priority support</li>
          <li>✓ Advanced analytics</li>
        </ul>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">Contact sales</Button>
        <Button className="flex-1">Upgrade</Button>
      </CardFooter>
    </Card>
  ),
}

// --- With Action ---

export const WithAction: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Monthly Revenue</CardTitle>
        <CardDescription>Jan 2025 – Dec 2025</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label="Options">
            <IconDots />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">$24,350</div>
        <div className="mt-1 flex items-center gap-1.5 text-sm">
          <Badge variant="success">+12.5%</Badge>
          <span className="text-muted-foreground">vs last month</span>
        </div>
      </CardContent>
    </Card>
  ),
}

// --- Small Size ---

export const SmallSize: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card size="sm" className="w-56">
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Active accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,284</div>
        </CardContent>
      </Card>
      <Card size="sm" className="w-56">
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
          <CardDescription>This month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$8,420</div>
        </CardContent>
      </Card>
    </div>
  ),
}

// --- With Image ---

export const WithImage: Story = {
  render: () => (
    <Card className="w-72 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        alt="Mountain landscape"
        className="w-full h-40 object-cover"
      />
      <CardHeader>
        <CardTitle>Alpine Trek</CardTitle>
        <CardDescription>Switzerland · 5 days</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Explore the stunning Swiss Alps on this guided hiking adventure.
        </p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm">Book now</Button>
      </CardFooter>
    </Card>
  ),
}
