import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import type { DateRange } from "react-day-picker"

import { Calendar } from "./calendar"

const meta = {
  title: "UI/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    captionLayout: {
      control: "select",
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
    },
    showOutsideDays: { control: "boolean" },
    showWeekNumber: { control: "boolean" },
    disabled: { table: { disable: true } },
  },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    mode: "single",
    captionLayout: "label",
    showOutsideDays: true,
  },
}

// --- Single Selection ---

export const SingleSelection: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <div className="flex flex-col items-center gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
        />
        <p className="text-sm text-muted-foreground">
          {date
            ? `Selected: ${date.toLocaleDateString("en-US", { dateStyle: "long" })}`
            : "No date selected"}
        </p>
      </div>
    )
  },
}

// --- Range Selection ---

export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    })
    return (
      <div className="flex flex-col items-center gap-4">
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
        />
        <p className="text-sm text-muted-foreground">
          {range?.from && range?.to
            ? `${range.from.toLocaleDateString()} – ${range.to.toLocaleDateString()}`
            : "Select a date range"}
        </p>
      </div>
    )
  },
}

// --- Multiple Selection ---

export const MultipleSelection: Story = {
  render: () => {
    const [dates, setDates] = React.useState<Date[] | undefined>([])
    return (
      <div className="flex flex-col items-center gap-4">
        <Calendar
          mode="multiple"
          selected={dates}
          onSelect={setDates}
        />
        <p className="text-sm text-muted-foreground">
          {dates && dates.length > 0
            ? `${dates.length} date${dates.length > 1 ? "s" : ""} selected`
            : "No dates selected"}
        </p>
      </div>
    )
  },
}

// --- With Dropdown ---

export const WithDropdown: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        captionLayout="dropdown"
        selected={date}
        onSelect={setDate}
        fromYear={2000}
        toYear={2030}
      />
    )
  },
}

// --- With Week Numbers ---

export const WithWeekNumbers: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        showWeekNumber
        selected={date}
        onSelect={setDate}
      />
    )
  },
}

// --- With Disabled Dates ---

export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>()
    const today = new Date()
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={[
          { before: today },
          { dayOfWeek: [0, 6] },
        ]}
      />
    )
  },
}
