import type { Meta, StoryObj } from "@storybook/react-vite"

import { RadioGroup, RadioGroupItem } from "./radio-group"

const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: { control: "boolean" },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    defaultValue: "option-1",
    disabled: false,
  },
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="play-option-1" />
        <label htmlFor="play-option-1" className="text-sm cursor-pointer">
          Option 1
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="play-option-2" />
        <label htmlFor="play-option-2" className="text-sm cursor-pointer">
          Option 2
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="play-option-3" />
        <label htmlFor="play-option-3" className="text-sm cursor-pointer">
          Option 3
        </label>
      </div>
    </RadioGroup>
  ),
}

// --- Vertical (default) ---

export const Vertical: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r-default" />
        <label htmlFor="r-default" className="text-sm cursor-pointer">
          Default
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="r-comfortable" />
        <label htmlFor="r-comfortable" className="text-sm cursor-pointer">
          Comfortable
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="r-compact" />
        <label htmlFor="r-compact" className="text-sm cursor-pointer">
          Compact
        </label>
      </div>
    </RadioGroup>
  ),
}

// --- Horizontal ---

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="card" className="flex flex-row gap-4 w-auto">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="card" id="h-card" />
        <label htmlFor="h-card" className="text-sm cursor-pointer">
          Card
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="paypal" id="h-paypal" />
        <label htmlFor="h-paypal" className="text-sm cursor-pointer">
          PayPal
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="apple" id="h-apple" />
        <label htmlFor="h-apple" className="text-sm cursor-pointer">
          Apple Pay
        </label>
      </div>
    </RadioGroup>
  ),
}

// --- With Descriptions ---

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="startup" className="gap-3">
      {[
        {
          value: "free",
          label: "Free",
          description: "For personal projects and experiments.",
          price: "$0/mo",
        },
        {
          value: "startup",
          label: "Startup",
          description: "For small teams and growing businesses.",
          price: "$12/mo",
        },
        {
          value: "enterprise",
          label: "Enterprise",
          description: "For large organizations with advanced needs.",
          price: "$49/mo",
        },
      ].map(({ value, label, description, price }) => (
        <div
          key={value}
          className="flex items-start gap-3 rounded-lg border p-3"
        >
          <RadioGroupItem value={value} id={`desc-${value}`} className="mt-0.5" />
          <div className="flex-1">
            <label
              htmlFor={`desc-${value}`}
              className="text-sm font-medium cursor-pointer"
            >
              {label}
            </label>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
          <span className="text-sm font-medium">{price}</span>
        </div>
      ))}
    </RadioGroup>
  ),
}

// --- Disabled ---

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" disabled>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="dis-option-1" />
        <label htmlFor="dis-option-1" className="text-sm cursor-not-allowed opacity-50">
          Option 1 (selected)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="dis-option-2" />
        <label htmlFor="dis-option-2" className="text-sm cursor-not-allowed opacity-50">
          Option 2
        </label>
      </div>
    </RadioGroup>
  ),
}

// --- Invalid ---

export const Invalid: Story = {
  render: () => (
    <RadioGroup defaultValue="">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="inv-option-1" aria-invalid="true" />
        <label htmlFor="inv-option-1" className="text-sm cursor-pointer">
          Option 1
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="inv-option-2" aria-invalid="true" />
        <label htmlFor="inv-option-2" className="text-sm cursor-pointer">
          Option 2
        </label>
      </div>
      <p className="text-xs text-destructive">Please select an option.</p>
    </RadioGroup>
  ),
}
