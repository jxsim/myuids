import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconHome,
  IconFolder,
  IconUsers,
  IconBarChart,
  IconSettings,
  IconSearch,
  IconBell,
  IconChevronRight,
} from "@tabler/icons-react"

import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import { Separator } from "@/components/atoms/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "./sidebar"

const meta = {
  title: "Organisms/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const navItems = [
  { icon: IconHome, label: "Dashboard", href: "#" },
  { icon: IconFolder, label: "Projects", href: "#", badge: "12" },
  { icon: IconUsers, label: "Team", href: "#" },
  { icon: IconBarChart, label: "Analytics", href: "#" },
]

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
              A
            </div>
            <span className="font-semibold text-sm">Acme Inc</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild isActive={item.label === "Dashboard"}>
                      <a href={item.href}>
                        <item.icon />
                        {item.label}
                      </a>
                    </SidebarMenuButton>
                    {item.badge && (
                      <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <IconSettings />
                      Preferences
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <IconBell />
                      Notifications
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="flex size-7 items-center justify-center rounded-full bg-muted text-xs font-medium">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">Jane Doe</div>
              <div className="text-xs text-muted-foreground truncate">jane@example.com</div>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-5" />
          <div className="relative flex-1 max-w-sm">
            <IconSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8 h-8" />
          </div>
          <Button variant="ghost" size="icon-sm" className="ml-auto" aria-label="Notifications">
            <IconBell />
          </Button>
        </header>
        <main className="p-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Welcome back! Here's what's happening.
          </p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
}

// --- Collapsed by Default ---

export const CollapsedByDefault: Story = {
  render: () => (
    <SidebarProvider defaultOpen={false}>
      <Sidebar>
        <SidebarHeader className="p-4">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
            A
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild tooltip={item.label}>
                      <a href={item.href}>
                        <item.icon />
                        {item.label}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-14 items-center gap-3 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">Toggle sidebar to expand</span>
        </header>
        <main className="p-6 text-sm text-muted-foreground">
          Use the trigger button to expand the sidebar.
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
}
