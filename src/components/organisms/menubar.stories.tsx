import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IconFile,
  IconCopy,
  IconClipboard,
  IconScissors,
  IconSettings,
  IconKeyboard,
} from "@tabler/icons-react"

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "./menubar"

const meta = {
  title: "Organisms/Menubar",
  component: Menubar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <IconFile />
            New File
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open
            <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Save
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem variant="destructive">Delete</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <IconCopy />
            Copy
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <IconClipboard />
            Paste
            <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <IconScissors />
            Cut
            <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom In</MenubarItem>
          <MenubarItem>Zoom Out</MenubarItem>
          <MenubarItem>Reset Zoom</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

// --- Full Featured ---

export const FullFeatured: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Documents</MenubarLabel>
          <MenubarItem>
            <IconFile />
            New File
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open
            <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Export As</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>PDF</MenubarItem>
              <MenubarItem>PNG</MenubarItem>
              <MenubarItem>SVG</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Save
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem variant="destructive">Delete</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <IconCopy />
            Copy
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <IconClipboard />
            Paste
            <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <IconScissors />
            Cut
            <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show Statusbar</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Theme</MenubarLabel>
          <MenubarRadioGroup value="light">
            <MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="system">System</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <IconSettings />
          Preferences
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <IconKeyboard />
            Keyboard Shortcuts
          </MenubarItem>
          <MenubarItem>Extensions</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}
