import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconFolder,
  IconInbox,
  IconSearch,
  IconUserOff,
  IconAlertCircle,
} from "@tabler/icons-react"

import { Button } from "@/components/atoms/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./empty"

const meta = {
  title: "Molecules/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <Empty className="max-w-sm">
      <EmptyHeader>
        <EmptyMedia>
          <IconInbox className="size-12 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No messages yet</EmptyTitle>
        <EmptyDescription>
          When you receive messages they will appear here.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}

// --- With Action ---

export const WithAction: Story = {
  render: () => (
    <Empty className="max-w-sm">
      <EmptyHeader>
        <EmptyMedia>
          <IconFolder className="size-12 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No files found</EmptyTitle>
        <EmptyDescription>
          Get started by creating your first file or uploading existing ones.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create file</Button>
        <Button variant="outline">Upload</Button>
      </EmptyContent>
    </Empty>
  ),
}

// --- Icon Variant ---

export const IconVariant: Story = {
  render: () => (
    <Empty className="max-w-sm">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconSearch />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your search or filter to find what you are looking for.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Clear filters</Button>
      </EmptyContent>
    </Empty>
  ),
}

// --- Showcase ---

export const Showcase: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Empty className="max-w-xs">
        <EmptyHeader>
          <EmptyMedia>
            <IconInbox className="size-10 text-muted-foreground" />
          </EmptyMedia>
          <EmptyTitle>Empty Inbox</EmptyTitle>
          <EmptyDescription>You have no new messages.</EmptyDescription>
        </EmptyHeader>
      </Empty>

      <Empty className="max-w-xs">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconUserOff />
          </EmptyMedia>
          <EmptyTitle>No users found</EmptyTitle>
          <EmptyDescription>
            No users match your current filter criteria.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Invite user</Button>
        </EmptyContent>
      </Empty>

      <Empty className="max-w-xs">
        <EmptyHeader>
          <EmptyMedia>
            <IconAlertCircle className="size-10 text-muted-foreground" />
          </EmptyMedia>
          <EmptyTitle>Something went wrong</EmptyTitle>
          <EmptyDescription>
            Failed to load data. Please try again.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm" variant="outline">
            Retry
          </Button>
        </EmptyContent>
      </Empty>

      <Empty className="max-w-xs">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconSearch />
          </EmptyMedia>
          <EmptyTitle>No results</EmptyTitle>
          <EmptyDescription>
            Try a different search term.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  ),
}
