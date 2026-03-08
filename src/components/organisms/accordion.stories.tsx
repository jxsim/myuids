import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconShieldCheck,
  IconBell,
  IconCreditCard,
  IconUser,
  IconLock,
} from "@tabler/icons-react"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion"

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    collapsible: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    type: "single",
    collapsible: true,
    defaultValue: "item-1",
  },
  render: (args) => (
    <div className="w-80">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
          <AccordionContent>
            shadcn/ui is a collection of re-usable components built using Radix
            UI and Tailwind CSS. It is not a component library — it is a set of
            components you can copy and paste into your apps.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern and is fully
            keyboard accessible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I use it in my project?</AccordionTrigger>
          <AccordionContent>
            Yes. It is free to use in personal and commercial projects. No
            attribution required.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

// --- Single ---

export const Single: Story = {
  render: () => (
    <div className="w-80">
      <Accordion type="single" collapsible defaultValue="billing">
        <AccordionItem value="account">
          <AccordionTrigger>
            <IconUser className="size-4 shrink-0" />
            Account Settings
          </AccordionTrigger>
          <AccordionContent>
            Manage your account preferences, display name, and email address.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="billing">
          <AccordionTrigger>
            <IconCreditCard className="size-4 shrink-0" />
            Billing &amp; Plans
          </AccordionTrigger>
          <AccordionContent>
            View your current plan, manage payment methods, and review past
            invoices.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="security">
          <AccordionTrigger>
            <IconLock className="size-4 shrink-0" />
            Security
          </AccordionTrigger>
          <AccordionContent>
            Change your password, enable two-factor authentication, and manage
            active sessions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="notifications">
          <AccordionTrigger>
            <IconBell className="size-4 shrink-0" />
            Notifications
          </AccordionTrigger>
          <AccordionContent>
            Configure which emails and push notifications you receive and how
            often.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

// --- Multiple ---

export const Multiple: Story = {
  render: () => (
    <div className="w-80">
      <Accordion type="multiple" defaultValue={["privacy", "compliance"]}>
        <AccordionItem value="privacy">
          <AccordionTrigger>
            <IconShieldCheck className="size-4 shrink-0" />
            Privacy Policy
          </AccordionTrigger>
          <AccordionContent>
            We collect only the data necessary to provide our service. Your
            data is never sold to third parties.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="compliance">
          <AccordionTrigger>
            <IconShieldCheck className="size-4 shrink-0" />
            Compliance
          </AccordionTrigger>
          <AccordionContent>
            We are SOC 2 Type II certified and GDPR compliant. Annual audits
            are conducted by independent third parties.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="data-retention">
          <AccordionTrigger>
            <IconShieldCheck className="size-4 shrink-0" />
            Data Retention
          </AccordionTrigger>
          <AccordionContent>
            Data is retained for 90 days after account deletion unless a
            longer period is required by law.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}
