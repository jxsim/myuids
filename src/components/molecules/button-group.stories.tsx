import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconAlignJustified,
  IconBold,
  IconItalic,
  IconUnderline,
  IconList,
  IconListNumbers,
  IconSearch,
} from "@tabler/icons-react"

import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "./button-group"
import { Button } from "@/components/atoms/button"

const meta = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="sm">
        <IconAlignLeft />
      </Button>
      <Button variant="outline" size="sm">
        <IconAlignCenter />
      </Button>
      <Button variant="outline" size="sm">
        <IconAlignRight />
      </Button>
      <Button variant="outline" size="sm">
        <IconAlignJustified />
      </Button>
    </ButtonGroup>
  ),
}

// --- Orientations ---

export const Orientations: Story = {
  render: () => (
    <div className="flex items-start gap-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-muted-foreground">Horizontal</p>
        <ButtonGroup orientation="horizontal">
          <Button variant="outline" size="sm">
            <IconBold />
          </Button>
          <Button variant="outline" size="sm">
            <IconItalic />
          </Button>
          <Button variant="outline" size="sm">
            <IconUnderline />
          </Button>
        </ButtonGroup>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-muted-foreground">Vertical</p>
        <ButtonGroup orientation="vertical">
          <Button variant="outline" size="sm">
            <IconList />
          </Button>
          <Button variant="outline" size="sm">
            <IconListNumbers />
          </Button>
          <Button variant="outline" size="sm">
            <IconAlignLeft />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  ),
}

// --- With Text Addon ---

export const WithTextAddon: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <ButtonGroupText>https://</ButtonGroupText>
        <input
          type="text"
          placeholder="example.com"
          className="flex h-9 rounded-lg border border-input bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </ButtonGroup>

      <ButtonGroup>
        <ButtonGroupText>
          <IconSearch />
        </ButtonGroupText>
        <input
          type="text"
          placeholder="Search..."
          className="flex h-9 rounded-lg border border-input bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        <Button variant="default" size="sm">
          Go
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <input
          type="text"
          placeholder="Enter coupon code"
          className="flex h-9 flex-1 rounded-lg border border-input bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        <Button variant="secondary" size="sm">
          Apply
        </Button>
      </ButtonGroup>
    </div>
  ),
}

// --- With Separator ---

export const WithSeparator: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline">Copy</Button>
        <ButtonGroupSeparator />
        <Button variant="outline" size="icon">
          <IconAlignCenter />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline" size="sm">
          <IconBold />
          Bold
        </Button>
        <ButtonGroupSeparator />
        <Button variant="outline" size="sm">
          <IconItalic />
          Italic
        </Button>
        <ButtonGroupSeparator />
        <Button variant="outline" size="sm">
          <IconUnderline />
          Underline
        </Button>
      </ButtonGroup>
    </div>
  ),
}

// --- Variants ---

export const ButtonVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <p className="text-sm text-muted-foreground">Default</p>
        <ButtonGroup>
          <Button>Save</Button>
          <Button>Publish</Button>
          <Button>Archive</Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-sm text-muted-foreground">Outline</p>
        <ButtonGroup>
          <Button variant="outline">Day</Button>
          <Button variant="outline">Week</Button>
          <Button variant="outline">Month</Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-sm text-muted-foreground">Ghost</p>
        <ButtonGroup>
          <Button variant="ghost" size="sm">Previous</Button>
          <Button variant="ghost" size="sm">Next</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
}
