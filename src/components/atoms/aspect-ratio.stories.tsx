import type { Meta, StoryObj } from "@storybook/react-vite"

import { AspectRatio } from "./aspect-ratio"

const meta = {
  title: "Atoms/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ratio: {
      control: { type: "number", min: 0.1, max: 4, step: 0.1 },
    },
  },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-80">
      <AspectRatio {...args} className="overflow-hidden rounded-lg bg-muted">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop"
          alt="Medical research"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

// --- Common Ratios ---

export const CommonRatios: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-medium text-muted-foreground">
          16:9 — Video / Widescreen
        </p>
        <div className="w-64">
          <AspectRatio
            ratio={16 / 9}
            className="overflow-hidden rounded-lg bg-muted"
          >
            <img
              src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&auto=format&fit=crop"
              alt="Galaxy"
              className="size-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-medium text-muted-foreground">
          4:3 — Standard
        </p>
        <div className="w-64">
          <AspectRatio
            ratio={4 / 3}
            className="overflow-hidden rounded-lg bg-muted"
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop"
              alt="Mountains"
              className="size-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-medium text-muted-foreground">
          1:1 — Square
        </p>
        <div className="w-40">
          <AspectRatio
            ratio={1}
            className="overflow-hidden rounded-lg bg-muted"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop"
              alt="Portrait"
              className="size-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-medium text-muted-foreground">
          9:16 — Portrait / Mobile
        </p>
        <div className="w-24">
          <AspectRatio
            ratio={9 / 16}
            className="overflow-hidden rounded-lg bg-muted"
          >
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&auto=format&fit=crop"
              alt="Night sky"
              className="size-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  ),
}

// --- With Placeholder ---

export const WithPlaceholder: Story = {
  render: () => (
    <div className="w-80">
      <AspectRatio
        ratio={16 / 9}
        className="flex items-center justify-center overflow-hidden rounded-lg bg-muted"
      >
        <p className="text-sm text-muted-foreground">16:9 placeholder</p>
      </AspectRatio>
    </div>
  ),
}
