import type { Meta, StoryObj } from "@storybook/react-vite"

import { Card, CardContent } from "./card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel"

const meta = {
  title: "Organisms/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{i + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

// --- Multiple Items ---

export const MultipleItems: Story = {
  render: () => (
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, i) => (
          <CarouselItem key={i} className="basis-1/3">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-4">
                <span className="text-xl font-semibold">{i + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

// --- Loop ---

export const Loop: Story = {
  render: () => (
    <Carousel opts={{ loop: true }} className="w-full max-w-xs">
      <CarouselContent>
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
          <CarouselItem key={day}>
            <Card>
              <CardContent className="flex h-32 items-center justify-center p-6">
                <span className="text-lg font-medium">{day}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

// --- Vertical ---

export const Vertical: Story = {
  render: () => (
    <Carousel orientation="vertical" className="w-full max-w-xs">
      <CarouselContent className="h-64">
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i}>
            <Card>
              <CardContent className="flex h-full items-center justify-center p-6">
                <span className="text-3xl font-semibold">{i + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}
