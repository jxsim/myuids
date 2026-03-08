import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconAlertTriangle, IconTrash } from "@tabler/icons-react"

import { Button } from "@/components/atoms/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"
import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"

const meta = {
  title: "Organisms/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Jane Doe" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@janedoe" />
          </div>
        </div>
        <DialogFooter showCloseButton>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

// --- Confirmation Dialog ---

export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <IconTrash />
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">
            <IconTrash />
            Delete Account
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

// --- Alert Dialog ---

export const Alert: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <IconAlertTriangle />
          Show Alert
        </Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Session Expiring</DialogTitle>
          <DialogDescription>
            Your session will expire in 5 minutes. Please save your work or
            click continue to extend your session.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Sign out</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Continue session</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

// --- Controlled ---

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Controlled Dialog</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled Dialog</DialogTitle>
              <DialogDescription>
                This dialog is controlled via external state. The open/close
                state is managed by the parent component.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter showCloseButton>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}
