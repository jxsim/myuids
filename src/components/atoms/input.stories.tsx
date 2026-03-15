import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/molecules/field"
import { Input } from "./input"

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search", "date", "file"],
    },
    size: {
      control: "select",
      options: ["default", "sm"],
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
}

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div className="w-64">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="size-default">Default (h-8)</FieldLabel>
          <Input id="size-default" size="default" placeholder="Default size" />
        </Field>
        <Field>
          <FieldLabel htmlFor="size-sm">Small (h-7)</FieldLabel>
          <Input id="size-sm" size="sm" placeholder="Small size" />
        </Field>
      </FieldGroup>
    </div>
  ),
}

// --- Types ---

export const Types: Story = {
  render: () => (
    <div className="w-64">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="type-text">Text</FieldLabel>
          <Input id="type-text" type="text" placeholder="Enter text..." />
        </Field>
        <Field>
          <FieldLabel htmlFor="type-email">Email</FieldLabel>
          <Input id="type-email" type="email" placeholder="you@example.com" />
        </Field>
        <Field>
          <FieldLabel htmlFor="type-password">Password</FieldLabel>
          <Input id="type-password" type="password" placeholder="••••••••" />
        </Field>
        <Field>
          <FieldLabel htmlFor="type-number">Number</FieldLabel>
          <Input id="type-number" type="number" placeholder="0" />
        </Field>
        <Field>
          <FieldLabel htmlFor="type-date">Date</FieldLabel>
          <Input id="type-date" type="date" />
        </Field>
        <Field>
          <FieldLabel htmlFor="type-file">File</FieldLabel>
          <Input id="type-file" type="file" />
          <FieldDescription>Accepts any file format.</FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  ),
}

// --- States ---

export const States: Story = {
  render: () => (
    <div className="w-64">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="state-default">Default</FieldLabel>
          <Input id="state-default" placeholder="Placeholder text" />
        </Field>
        <Field>
          <FieldLabel htmlFor="state-value">With value</FieldLabel>
          <Input id="state-value" defaultValue="Filled value" />
        </Field>
        <Field data-disabled="true">
          <FieldLabel htmlFor="state-disabled">Disabled</FieldLabel>
          <Input id="state-disabled" disabled placeholder="Disabled input" />
        </Field>
        <Field data-disabled="true">
          <FieldLabel htmlFor="state-disabled-value">Disabled with value</FieldLabel>
          <Input id="state-disabled-value" disabled defaultValue="Disabled with value" />
        </Field>
        <Field data-invalid="true">
          <FieldLabel htmlFor="state-invalid">Invalid</FieldLabel>
          <Input id="state-invalid" aria-invalid="true" defaultValue="invalid@" />
        </Field>
      </FieldGroup>
    </div>
  ),
}
