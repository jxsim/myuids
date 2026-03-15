import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Area,
  AreaChart,
} from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./chart"

const meta = {
  title: "Organisms/Chart",
  component: ChartContainer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

// --- Bar Chart ---

const barData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const barConfig = {
  desktop: { label: "Desktop", color: "var(--color-chart-1)" },
  mobile: { label: "Mobile", color: "var(--color-chart-2)" },
} satisfies ChartConfig

export const BarChartStory: Story = {
  name: "Bar Chart",
  args: {
    config: barConfig,
    className: "h-64 w-[480px]",
  },
  render: (args) => (
    <ChartContainer {...args}>
      <BarChart data={barData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}

// --- Line Chart ---

const lineData = [
  { month: "Jan", users: 400, sessions: 240 },
  { month: "Feb", users: 300, sessions: 139 },
  { month: "Mar", users: 600, sessions: 380 },
  { month: "Apr", users: 800, sessions: 430 },
  { month: "May", users: 500, sessions: 280 },
  { month: "Jun", users: 900, sessions: 500 },
]

const lineConfig = {
  users: { label: "Users", color: "var(--color-chart-1)" },
  sessions: { label: "Sessions", color: "var(--color-chart-2)" },
} satisfies ChartConfig

export const LineChartStory: Story = {
  name: "Line Chart",
  args: {
    config: lineConfig,
    className: "h-64 w-[480px]",
  },
  render: (args) => (
    <ChartContainer {...args}>
      <LineChart data={lineData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line type="monotone" dataKey="users" stroke="var(--color-users)" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="sessions" stroke="var(--color-sessions)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  ),
}

// --- Area Chart ---

const areaData = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 1900 },
  { month: "Mar", revenue: 1400 },
  { month: "Apr", revenue: 2800 },
  { month: "May", revenue: 2200 },
  { month: "Jun", revenue: 3400 },
]

const areaConfig = {
  revenue: { label: "Revenue", color: "var(--color-chart-1)" },
} satisfies ChartConfig

export const AreaChartStory: Story = {
  name: "Area Chart",
  args: {
    config: areaConfig,
    className: "h-64 w-[480px]",
  },
  render: (args) => (
    <ChartContainer {...args}>
      <AreaChart data={areaData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="var(--color-revenue)"
          fill="var(--color-revenue)"
          fillOpacity={0.1}
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  ),
}
