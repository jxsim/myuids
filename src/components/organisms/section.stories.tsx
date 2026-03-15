import type { Meta, StoryObj } from "@storybook/react-vite"

import { Container } from "./container"
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "./section"

const meta = {
  title: "Organisms/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Section>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <Container>
      <Section>
        <SectionHeader>
          <SectionTitle>Section Title</SectionTitle>
          <SectionDescription>
            A brief description of what this section contains.
          </SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="rounded-lg border border-dashed bg-muted/30 p-8 text-center text-sm text-muted-foreground">
            Section content goes here
          </div>
        </SectionContent>
      </Section>
    </Container>
  ),
}

// --- Padding Variants ---

export const PaddingVariants: Story = {
  render: () => (
    <div className="bg-background">
      {(["none", "sm", "md", "lg", "xl"] as const).map((padding) => (
        <div key={padding} className="border-b last:border-0">
          <Container>
            <Section padding={padding}>
              <div className="flex items-center justify-between rounded-lg border border-dashed bg-muted/30 px-4 py-3">
                <span className="font-mono text-sm font-medium">padding="{padding}"</span>
                <span className="text-xs text-muted-foreground">
                  {padding === "none" && "py-0"}
                  {padding === "sm" && "py-8"}
                  {padding === "md" && "py-12"}
                  {padding === "lg" && "py-16"}
                  {padding === "xl" && "py-24"}
                </span>
              </div>
            </Section>
          </Container>
        </div>
      ))}
    </div>
  ),
}

// --- With Header ---

export const WithHeader: Story = {
  render: () => (
    <div className="bg-background">
      <Container>
        <Section>
          <SectionHeader>
            <SectionTitle>Featured Projects</SectionTitle>
            <SectionDescription>
              A curated selection of our most impactful work across different industries.
            </SectionDescription>
          </SectionHeader>
          <SectionContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-40 rounded-xl border border-dashed bg-muted/30"
                />
              ))}
            </div>
          </SectionContent>
        </Section>
      </Container>
    </div>
  ),
}

// --- Multiple Sections ---

export const MultipleSections: Story = {
  render: () => (
    <div className="bg-background">
      <Container>
        <Section>
          <SectionHeader>
            <SectionTitle>About Us</SectionTitle>
            <SectionDescription>Who we are and what we do.</SectionDescription>
          </SectionHeader>
          <SectionContent>
            <div className="h-32 rounded-xl border border-dashed bg-muted/30" />
          </SectionContent>
        </Section>
        <Section>
          <SectionHeader>
            <SectionTitle>Our Services</SectionTitle>
            <SectionDescription>What we can help you with.</SectionDescription>
          </SectionHeader>
          <SectionContent>
            <div className="h-32 rounded-xl border border-dashed bg-muted/30" />
          </SectionContent>
        </Section>
        <Section>
          <SectionHeader>
            <SectionTitle>Get In Touch</SectionTitle>
            <SectionDescription>We'd love to hear from you.</SectionDescription>
          </SectionHeader>
          <SectionContent>
            <div className="h-32 rounded-xl border border-dashed bg-muted/30" />
          </SectionContent>
        </Section>
      </Container>
    </div>
  ),
}
