import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconArrowUp, IconArrowDown, IconArrowsUpDown } from "@tabler/icons-react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"

const meta = {
  title: "UI/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

// --- Data ---

const invoices = [
  {
    id: "INV-001",
    customer: "Acme Corp",
    status: "Paid",
    method: "Credit Card",
    amount: "$4,250.00",
  },
  {
    id: "INV-002",
    customer: "Globex Inc",
    status: "Pending",
    method: "Bank Transfer",
    amount: "$1,800.00",
  },
  {
    id: "INV-003",
    customer: "Initech Ltd",
    status: "Paid",
    method: "PayPal",
    amount: "$3,100.00",
  },
  {
    id: "INV-004",
    customer: "Umbrella Co",
    status: "Failed",
    method: "Credit Card",
    amount: "$920.00",
  },
  {
    id: "INV-005",
    customer: "Hooli",
    status: "Paid",
    method: "Bank Transfer",
    amount: "$7,500.00",
  },
]

const statusColor: Record<string, string> = {
  Paid: "text-green-600",
  Pending: "text-yellow-600",
  Failed: "text-destructive",
}

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell className="font-medium">{inv.id}</TableCell>
            <TableCell>{inv.customer}</TableCell>
            <TableCell className={statusColor[inv.status]}>{inv.status}</TableCell>
            <TableCell>{inv.method}</TableCell>
            <TableCell className="text-right">{inv.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">$17,570.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

// --- With Sortable Headers ---

export const WithSortableHeaders: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <button className="inline-flex items-center gap-1 font-medium hover:text-foreground">
              Customer
              <IconArrowsUpDown className="size-3.5 text-muted-foreground" />
            </button>
          </TableHead>
          <TableHead>
            <button className="inline-flex items-center gap-1 font-medium hover:text-foreground">
              Status
              <IconArrowsUpDown className="size-3.5 text-muted-foreground" />
            </button>
          </TableHead>
          <TableHead>Method</TableHead>
          <TableHead>
            <button className="inline-flex items-center gap-1 font-medium hover:text-foreground">
              Amount
              <IconArrowUp className="size-3.5 text-primary" />
            </button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell className="font-medium">{inv.customer}</TableCell>
            <TableCell className={statusColor[inv.status]}>{inv.status}</TableCell>
            <TableCell>{inv.method}</TableCell>
            <TableCell>{inv.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// --- Striped Rows ---

export const StripedRows: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((inv, i) => (
          <TableRow key={inv.id} className={i % 2 === 0 ? "bg-muted/30" : ""}>
            <TableCell className="font-medium">{inv.id}</TableCell>
            <TableCell>{inv.customer}</TableCell>
            <TableCell className={statusColor[inv.status]}>{inv.status}</TableCell>
            <TableCell className="text-right">{inv.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// --- Empty State ---

export const EmptyState: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} className="py-10 text-center text-muted-foreground">
            No invoices found.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
