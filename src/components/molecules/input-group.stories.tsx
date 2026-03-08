import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconAt,
  IconCopy,
  IconEye,
  IconEyeOff,
  IconLink,
  IconSearch,
  IconX,
} from "@tabler/icons-react"
import { useState } from "react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "./input-group"

const meta = {
  title: "Molecules/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <div className="w-72">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <IconSearch />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    </div>
  ),
}

// --- Inline Addons ---

export const InlineAddons: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <IconSearch />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <IconAt />
        </InputGroupAddon>
        <InputGroupInput placeholder="username" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="yoursite" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
        <InputGroupAddon align="inline-end">
          <IconLink />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

// --- With Buttons ---

export const WithButtons: Story = {
  render: () => {
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState("")

    return (
      <div className="flex w-72 flex-col gap-4">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <IconSearch />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {value && (
            <InputGroupAddon align="inline-end">
              <InputGroupButton onClick={() => setValue("")} aria-label="Clear">
                <IconX />
              </InputGroupButton>
            </InputGroupAddon>
          )}
        </InputGroup>

        <InputGroup>
          <InputGroupInput
            type={visible ? "text" : "password"}
            placeholder="Password"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              onClick={() => setVisible((v) => !v)}
              aria-label="Toggle visibility"
            >
              {visible ? <IconEyeOff /> : <IconEye />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput defaultValue="https://myapp.com/invite/abc123" readOnly />
          <InputGroupAddon align="inline-end">
            <InputGroupButton aria-label="Copy">
              <IconCopy />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    )
  },
}

// --- Block Addons ---

export const BlockAddons: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <InputGroup>
        <InputGroupAddon align="block-start" className="border-b text-xs">
          Repository name
        </InputGroupAddon>
        <InputGroupInput placeholder="my-awesome-project" />
      </InputGroup>

      <InputGroup>
        <InputGroupTextarea placeholder="Write your message..." rows={3} />
        <InputGroupAddon align="block-end" className="border-t text-xs">
          Markdown supported
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

// --- Invalid State ---

export const InvalidState: Story = {
  render: () => (
    <div className="w-72">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <IconAt />
        </InputGroupAddon>
        <InputGroupInput
          aria-invalid="true"
          defaultValue="invalid username!"
        />
      </InputGroup>
    </div>
  ),
}
