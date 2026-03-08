import type { Meta, StoryObj } from "@storybook/react-vite"

import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from "./native-select"

const meta = {
  title: "Molecules/NativeSelect",
  component: NativeSelect,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    size: "default",
    disabled: false,
  },
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select a framework</NativeSelectOption>
      <NativeSelectOption value="react">React</NativeSelectOption>
      <NativeSelectOption value="vue">Vue</NativeSelectOption>
      <NativeSelectOption value="svelte">Svelte</NativeSelectOption>
      <NativeSelectOption value="solid">Solid</NativeSelectOption>
    </NativeSelect>
  ),
}

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <NativeSelect size="default">
        <NativeSelectOption value="">Default size</NativeSelectOption>
        <NativeSelectOption value="a">Option A</NativeSelectOption>
        <NativeSelectOption value="b">Option B</NativeSelectOption>
      </NativeSelect>
      <NativeSelect size="sm">
        <NativeSelectOption value="">Small size</NativeSelectOption>
        <NativeSelectOption value="a">Option A</NativeSelectOption>
        <NativeSelectOption value="b">Option B</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
}

// --- With Option Groups ---

export const WithOptGroups: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">Select a city</NativeSelectOption>
      <NativeSelectOptGroup label="North America">
        <NativeSelectOption value="nyc">New York</NativeSelectOption>
        <NativeSelectOption value="la">Los Angeles</NativeSelectOption>
        <NativeSelectOption value="chicago">Chicago</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Europe">
        <NativeSelectOption value="london">London</NativeSelectOption>
        <NativeSelectOption value="paris">Paris</NativeSelectOption>
        <NativeSelectOption value="berlin">Berlin</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}

// --- States ---

export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled>
      <NativeSelectOption value="">Disabled select</NativeSelectOption>
      <NativeSelectOption value="a">Option A</NativeSelectOption>
    </NativeSelect>
  ),
}

export const Invalid: Story = {
  render: () => (
    <NativeSelect aria-invalid="true">
      <NativeSelectOption value="">Select an option</NativeSelectOption>
      <NativeSelectOption value="a">Option A</NativeSelectOption>
      <NativeSelectOption value="b">Option B</NativeSelectOption>
    </NativeSelect>
  ),
}
