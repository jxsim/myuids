import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconHome,
  IconUser,
  IconSettings,
  IconFileText,
  IconLayoutDashboard,
  IconBell,
} from "@tabler/icons-react"

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./navigation-menu"

const meta = {
  title: "Organisms/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-1 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  href="#"
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                >
                  <IconLayoutDashboard className="size-6" />
                  <div className="mb-1 mt-3 text-sm font-medium">UI Kit</div>
                  <p className="text-xs leading-tight text-muted-foreground">
                    Beautiful components built with Radix UI and Tailwind CSS.
                  </p>
                </NavigationMenuLink>
              </li>
              <NavigationMenuLink href="#" className="flex-col items-start">
                <div className="text-sm font-medium">Introduction</div>
                <p className="text-xs text-muted-foreground">
                  Re-usable components built with Radix UI.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="flex-col items-start">
                <div className="text-sm font-medium">Installation</div>
                <p className="text-xs text-muted-foreground">
                  How to install dependencies and set up your project.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="flex-col items-start">
                <div className="text-sm font-medium">Typography</div>
                <p className="text-xs text-muted-foreground">
                  Styles for headings, paragraphs, lists and more.
                </p>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 p-1 md:grid-cols-2">
              {[
                { icon: IconFileText, title: "Alert", desc: "Displays a callout for user attention." },
                { icon: IconBell, title: "Toast", desc: "A succinct message that is displayed temporarily." },
                { icon: IconUser, title: "Avatar", desc: "An image element with a fallback for representing the user." },
                { icon: IconSettings, title: "Dialog", desc: "A window overlaid on either the primary window." },
              ].map(({ icon: Icon, title, desc }) => (
                <NavigationMenuLink key={title} href="#" className="flex-col items-start">
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <Icon className="size-4" />
                    {title}
                  </div>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            <IconHome className="size-4" />
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// --- Simple Links (no viewport) ---

export const SimpleLinks: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            <IconHome />
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            <IconFileText />
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            <IconLayoutDashboard />
            Dashboard
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            <IconSettings />
            Settings
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// --- Without Viewport ---

export const WithoutViewport: Story = {
  render: () => (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-48 gap-1 p-1">
              <NavigationMenuLink href="#" className="flex-col items-start">
                <div className="text-sm font-medium">Analytics</div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="flex-col items-start">
                <div className="text-sm font-medium">Automation</div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="flex-col items-start">
                <div className="text-sm font-medium">Reporting</div>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-48 gap-1 p-1">
              <NavigationMenuLink href="#" className="flex-col items-start">
                <div className="text-sm font-medium">About</div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="flex-col items-start">
                <div className="text-sm font-medium">Careers</div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="flex-col items-start">
                <div className="text-sm font-medium">Blog</div>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
