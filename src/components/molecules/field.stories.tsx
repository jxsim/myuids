import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconInfoCircle } from "@tabler/icons-react"

import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "./field"

const meta = {
  title: "Molecules/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <div className="w-80">
      <Field>
        <FieldLabel htmlFor="playground-input">Email address</FieldLabel>
        <Input id="playground-input" type="email" placeholder="you@example.com" />
        <FieldDescription>We will never share your email.</FieldDescription>
      </Field>
    </div>
  ),
}

// --- Vertical (default) ---

export const Vertical: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup>
        <Field orientation="vertical">
          <FieldLabel htmlFor="v-first">First name</FieldLabel>
          <Input id="v-first" placeholder="Jane" />
        </Field>
        <Field orientation="vertical">
          <FieldLabel htmlFor="v-last">Last name</FieldLabel>
          <Input id="v-last" placeholder="Doe" />
          <FieldDescription>Your full legal name.</FieldDescription>
        </Field>
        <Field orientation="vertical">
          <FieldLabel htmlFor="v-email">Email</FieldLabel>
          <Input id="v-email" type="email" placeholder="jane@example.com" />
        </Field>
      </FieldGroup>
    </div>
  ),
}

// --- Horizontal ---

export const Horizontal: Story = {
  render: () => (
    <div className="w-96">
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="h-name">Name</FieldLabel>
          <Input id="h-name" placeholder="Jane Doe" />
        </Field>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="h-email">Email</FieldLabel>
          <Input id="h-email" type="email" placeholder="jane@example.com" />
        </Field>
        <Field orientation="horizontal">
          <FieldTitle>
            <IconInfoCircle className="size-4" />
            Bio
          </FieldTitle>
          <Input id="h-bio" placeholder="Tell us about yourself" />
        </Field>
      </FieldGroup>
    </div>
  ),
}

// --- With Error ---

export const WithError: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup>
        <Field data-invalid="true">
          <FieldLabel htmlFor="err-email">Email</FieldLabel>
          <Input
            id="err-email"
            type="email"
            defaultValue="not-an-email"
            aria-invalid="true"
          />
          <FieldError>Please enter a valid email address.</FieldError>
        </Field>
        <Field data-invalid="true">
          <FieldLabel htmlFor="err-password">Password</FieldLabel>
          <Input
            id="err-password"
            type="password"
            defaultValue="short"
            aria-invalid="true"
          />
          <FieldError
            errors={[
              { message: "Password must be at least 8 characters" },
              { message: "Password must contain at least one number" },
            ]}
          />
        </Field>
      </FieldGroup>
    </div>
  ),
}

// --- FieldSet with Legend ---

export const WithFieldSet: Story = {
  render: () => (
    <div className="w-80">
      <FieldSet>
        <FieldLegend>Personal Information</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fs-first">First name</FieldLabel>
            <Input id="fs-first" placeholder="Jane" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fs-last">Last name</FieldLabel>
            <Input id="fs-last" placeholder="Doe" />
          </Field>
          <FieldSeparator>or</FieldSeparator>
          <Field>
            <FieldLabel htmlFor="fs-display">Display name</FieldLabel>
            <Input id="fs-display" placeholder="janedoe" />
            <FieldDescription>This is your public username.</FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
}

// --- Complete Form ---

export const CompleteForm: Story = {
  render: () => (
    <form className="w-80 space-y-6" onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <FieldLegend>Account Details</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="cf-email">Email</FieldLabel>
            <Input id="cf-email" type="email" placeholder="you@example.com" />
            <FieldDescription>Used to sign in to your account.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="cf-password">Password</FieldLabel>
            <Input id="cf-password" type="password" placeholder="••••••••" />
            <FieldDescription>At least 8 characters.</FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
      <Button type="submit" className="w-full">
        Create Account
      </Button>
    </form>
  ),
}
