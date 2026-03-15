import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconInfoCircle } from "@tabler/icons-react"

import { Button } from "@/components/atoms/button"
import { Checkbox } from "@/components/atoms/checkbox"
import { Input } from "@/components/atoms/input"
import { Textarea } from "@/components/atoms/textarea"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/molecules/input-group"
import {
  Field,
  FieldContent,
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

// --- Required Fields ---

export const RequiredFields: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="req-name" required>
            Full name
          </FieldLabel>
          <Input id="req-name" placeholder="Jane Doe" />
        </Field>
        <Field>
          <FieldLabel htmlFor="req-email" required>
            Email
          </FieldLabel>
          <Input id="req-email" type="email" placeholder="you@example.com" />
          <FieldDescription>We will never share your email.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="req-bio">Bio</FieldLabel>
          <Textarea id="req-bio" placeholder="Tell us about yourself..." rows={3} />
          <FieldDescription>Optional. Max 200 characters.</FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  ),
}

// --- With Textarea ---

export const WithTextarea: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="ta-subject">Subject</FieldLabel>
          <Input id="ta-subject" placeholder="What's this about?" />
        </Field>
        <Field>
          <FieldLabel htmlFor="ta-message" required>
            Message
          </FieldLabel>
          <Textarea id="ta-message" placeholder="Write your message here..." rows={4} />
          <FieldDescription>Be as detailed as possible.</FieldDescription>
        </Field>
        <Field data-invalid="true">
          <FieldLabel htmlFor="ta-notes">Notes</FieldLabel>
          <Textarea
            id="ta-notes"
            aria-invalid="true"
            defaultValue="x"
          />
          <FieldError>Notes must be at least 10 characters.</FieldError>
        </Field>
      </FieldGroup>
    </div>
  ),
}

// --- With InputGroup ---

export const WithInputGroup: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="ig-username" required>
            Username
          </FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">@</InputGroupAddon>
            <InputGroupInput id="ig-username" placeholder="janedoe" />
          </InputGroup>
          <FieldDescription>Your public handle.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="ig-website">Website</FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">https://</InputGroupAddon>
            <InputGroupInput id="ig-website" placeholder="example.com" type="url" />
          </InputGroup>
        </Field>
        <Field data-invalid="true">
          <FieldLabel htmlFor="ig-invalid" required>
            Domain
          </FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">https://</InputGroupAddon>
            <InputGroupInput
              id="ig-invalid"
              aria-invalid="true"
              defaultValue="not a domain!"
            />
          </InputGroup>
          <FieldError>Enter a valid domain name.</FieldError>
        </Field>
      </FieldGroup>
    </div>
  ),
}

// --- Responsive ---

export const Responsive: Story = {
  render: () => (
    <div className="w-full max-w-lg">
      <FieldGroup>
        <Field orientation="responsive">
          <FieldLabel htmlFor="resp-name">Name</FieldLabel>
          <Input id="resp-name" placeholder="Jane Doe" />
        </Field>
        <Field orientation="responsive">
          <FieldLabel htmlFor="resp-email" required>
            Email
          </FieldLabel>
          <Input id="resp-email" type="email" placeholder="jane@example.com" />
          <FieldDescription>Resize the window to see the layout shift.</FieldDescription>
        </Field>
        <Field orientation="responsive">
          <FieldTitle>
            <IconInfoCircle className="size-4" />
            Bio
          </FieldTitle>
          <Input id="resp-bio" placeholder="Tell us about yourself" />
        </Field>
      </FieldGroup>
    </div>
  ),
}

// --- Disabled State ---

export const Disabled: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup>
        <Field data-disabled="true">
          <FieldLabel htmlFor="dis-name">Full name</FieldLabel>
          <Input id="dis-name" defaultValue="Jane Doe" disabled />
          <FieldDescription>Contact support to update your name.</FieldDescription>
        </Field>
        <Field data-disabled="true">
          <FieldLabel htmlFor="dis-email">Email</FieldLabel>
          <Input id="dis-email" type="email" defaultValue="jane@example.com" disabled />
        </Field>
      </FieldGroup>
    </div>
  ),
}

// --- With Checkbox ---

export const WithCheckbox: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup>
        <Field orientation="horizontal">
          <Checkbox id="chk-terms" />
          <FieldContent>
            <FieldLabel htmlFor="chk-terms">Accept terms of service</FieldLabel>
            <FieldDescription>
              By checking this you agree to our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="chk-marketing" defaultChecked />
          <FieldContent>
            <FieldLabel htmlFor="chk-marketing">Marketing emails</FieldLabel>
            <FieldDescription>
              Receive updates about new features and promotions.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal" data-invalid="true">
          <Checkbox id="chk-required" aria-invalid="true" />
          <FieldContent>
            <FieldLabel htmlFor="chk-required">I am over 18 years old</FieldLabel>
            <FieldError>You must confirm your age to continue.</FieldError>
          </FieldContent>
        </Field>
      </FieldGroup>
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
