import type { Meta, StoryObj } from "@storybook/react-vite"

import { Textarea } from "./textarea"

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    rows: { control: "number" },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    placeholder: "Enter your message…",
    disabled: false,
  },
}

// --- States ---

export const States: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium">Default</label>
        <Textarea placeholder="Write something…" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium">With value</label>
        <Textarea defaultValue="This is some pre-filled content that the user has already entered." />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-muted-foreground">Disabled</label>
        <Textarea placeholder="Cannot edit this field" disabled />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-destructive">Invalid</label>
        <Textarea
          placeholder="Something went wrong…"
          aria-invalid="true"
          defaultValue="Invalid input"
        />
        <p className="text-xs text-destructive">This field is required.</p>
      </div>
    </div>
  ),
}

// --- Fixed Rows ---

export const FixedRows: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium">2 rows</label>
        <Textarea rows={2} placeholder="Short input…" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium">4 rows</label>
        <Textarea rows={4} placeholder="Medium input…" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium">8 rows</label>
        <Textarea rows={8} placeholder="Long input…" />
      </div>
    </div>
  ),
}

// --- In a Form ---

export const InAForm: Story = {
  render: () => (
    <div className="w-[480px] rounded-lg border p-6">
      <h3 className="mb-4 text-base font-semibold">Submit Feedback</h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-sm font-medium">
            Subject
          </label>
          <input
            id="subject"
            className="rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            placeholder="Brief description of your feedback"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="feedback" className="text-sm font-medium">
            Feedback
          </label>
          <Textarea
            id="feedback"
            rows={5}
            placeholder="Tell us what you think. We read every response."
          />
        </div>
        <div className="flex justify-end">
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  ),
}
