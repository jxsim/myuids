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
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/molecules/field"
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

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">Default (h-8)</span>
        <InputGroup size="default">
          <InputGroupAddon align="inline-start">
            <IconSearch />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
        </InputGroup>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">Small (h-7)</span>
        <InputGroup size="sm">
          <InputGroupAddon align="inline-start">
            <IconSearch />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
        </InputGroup>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">Small with button</span>
        <InputGroup size="sm">
          <InputGroupAddon align="inline-start">
            <IconAt />
          </InputGroupAddon>
          <InputGroupInput placeholder="username" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-xs" aria-label="Clear">
              <IconX />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  ),
}

// --- In Field ---

export const InField: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="if-username" required>
            Username
          </FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <IconAt />
            </InputGroupAddon>
            <InputGroupInput id="if-username" placeholder="janedoe" />
          </InputGroup>
          <FieldDescription>Your public handle on the platform.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="if-website">Website</FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="if-website" type="url" placeholder="example.com" />
            <InputGroupAddon align="inline-end">
              <IconLink />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field data-invalid="true">
          <FieldLabel htmlFor="if-search" required>
            Search query
          </FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <IconSearch />
            </InputGroupAddon>
            <InputGroupInput
              id="if-search"
              aria-invalid="true"
              defaultValue="<script>"
            />
          </InputGroup>
          <FieldError>Query contains invalid characters.</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="if-message">Message</FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              id="if-message"
              placeholder="Write your message..."
              rows={3}
            />
            <InputGroupAddon align="block-end" className="border-t text-xs">
              Markdown supported
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </FieldGroup>
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
