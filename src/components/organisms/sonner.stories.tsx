import type { Meta, StoryObj } from "@storybook/react-vite"
import { toast } from "sonner"
import {
  IconCircleCheck,
  IconInfoCircle,
  IconAlertTriangle,
  IconAlertOctagon,
  IconLoader,
} from "@tabler/icons-react"

import { Button } from "@/components/atoms/button"
import { Toaster } from "./sonner"

const meta = {
  title: "Organisms/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast("This is a default toast message.")}>
        Show Toast
      </Button>
    </div>
  ),
}

// --- Toast Types ---

export const ToastTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="default"
        onClick={() => toast("Default notification message.")}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Operation completed successfully!", {
            description: "Your changes have been saved.",
          })
        }
      >
        <IconCircleCheck />
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("Here is some useful information.", {
            description: "Check out the docs for more details.",
          })
        }
      >
        <IconInfoCircle />
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Proceed with caution.", {
            description: "This action may have unintended side effects.",
          })
        }
      >
        <IconAlertTriangle />
        Warning
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast.error("Something went wrong.", {
            description: "Please try again or contact support.",
          })
        }
      >
        <IconAlertOctagon />
        Error
      </Button>
    </div>
  ),
}

// --- With Description ---

export const WithDescription: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("File uploaded", {
          description: "report-q4-2025.pdf has been uploaded to your workspace.",
        })
      }
    >
      Upload File
    </Button>
  ),
}

// --- Loading Promise ---

export const LoadingPromise: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => {
        toast.promise(
          new Promise((resolve) => setTimeout(resolve, 2000)),
          {
            loading: "Saving changes…",
            success: "Changes saved successfully!",
            error: "Failed to save changes.",
          }
        )
      }}
    >
      <IconLoader />
      Save with Promise
    </Button>
  ),
}

// --- With Action ---

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Message deleted", {
          description: "The message has been removed from your inbox.",
          action: {
            label: "Undo",
            onClick: () => toast.success("Message restored."),
          },
        })
      }
    >
      Delete Message
    </Button>
  ),
}
