import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconInfoCircle,
  IconAlertTriangle,
  IconCircleCheck,
  IconX,
} from "@tabler/icons-react"

import { Alert, AlertTitle, AlertDescription, AlertAction } from "./alert"
import { Button } from "./button"

const meta = {
  title: "Atoms/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <div className="w-96">
      <Alert {...args}>
        <IconInfoCircle />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the CLI.
        </AlertDescription>
      </Alert>
    </div>
  ),
}

// --- Variants ---

export const Variants: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <Alert variant="default">
        <IconInfoCircle />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          Your workspace is syncing. Changes will be reflected shortly.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <IconAlertTriangle />
        <AlertTitle>Destructive action</AlertTitle>
        <AlertDescription>
          This action cannot be undone. All data associated with this account
          will be permanently deleted.
        </AlertDescription>
      </Alert>
    </div>
  ),
}

// --- With Icon ---

export const WithIcon: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <Alert>
        <IconCircleCheck />
        <AlertTitle>Deployment successful</AlertTitle>
        <AlertDescription>
          Version 2.4.1 is now live on production.
        </AlertDescription>
      </Alert>

      <Alert>
        <IconInfoCircle />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          The new analytics dashboard is now available. Visit Settings to
          enable it for your workspace.
        </AlertDescription>
      </Alert>
    </div>
  ),
}

// --- Title Only ---

export const TitleOnly: Story = {
  render: () => (
    <div className="w-96">
      <Alert>
        <IconInfoCircle />
        <AlertTitle>Your trial ends in 3 days.</AlertTitle>
      </Alert>
    </div>
  ),
}

// --- With Action ---

export const WithAction: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <Alert>
        <IconInfoCircle />
        <AlertTitle>Update available</AlertTitle>
        <AlertDescription>
          A new version of the application is available. Restart to apply
          the update.
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            Restart now
          </Button>
        </AlertAction>
      </Alert>

      <Alert variant="destructive">
        <IconAlertTriangle />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>
          Your last payment was declined. Please update your billing
          information.
        </AlertDescription>
        <AlertAction>
          <Button size="icon-xs" variant="ghost" aria-label="Dismiss">
            <IconX />
          </Button>
        </AlertAction>
      </Alert>
    </div>
  ),
}

// --- No Icon ---

export const NoIcon: Story = {
  render: () => (
    <div className="w-96">
      <Alert>
        <AlertTitle>Scheduled maintenance</AlertTitle>
        <AlertDescription>
          The system will be unavailable on Saturday, 15 March from 02:00 to
          04:00 UTC for scheduled maintenance.
        </AlertDescription>
      </Alert>
    </div>
  ),
}
