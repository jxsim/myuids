import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxSeparator,
  useComboboxAnchor,
} from "./combobox"

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "SolidJS" },
  { value: "qwik", label: "Qwik" },
]

const meta = {
  title: "Organisms/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

// --- Playground ---

export const Playground: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput placeholder="Search framework..." />
      <ComboboxContent>
        <ComboboxList />
      </ComboboxContent>
    </Combobox>
  ),
}

function ComboboxList() {
  return (
    <>
      <ComboboxEmpty>No framework found.</ComboboxEmpty>
      <ComboboxCollection>
        {frameworks.map((f) => (
          <ComboboxItem key={f.value} value={f.value}>
            {f.label}
          </ComboboxItem>
        ))}
      </ComboboxCollection>
    </>
  )
}

// --- Default ---

export const Default: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput placeholder="Select framework..." />
      <ComboboxContent>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxCollection>
          {frameworks.map((f) => (
            <ComboboxItem key={f.value} value={f.value}>
              {f.label}
            </ComboboxItem>
          ))}
        </ComboboxCollection>
      </ComboboxContent>
    </Combobox>
  ),
}

// --- With Clear ---

export const WithClear: Story = {
  render: () => (
    <Combobox defaultValue="react">
      <ComboboxInput placeholder="Select framework..." showClear />
      <ComboboxContent>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxCollection>
          {frameworks.map((f) => (
            <ComboboxItem key={f.value} value={f.value}>
              {f.label}
            </ComboboxItem>
          ))}
        </ComboboxCollection>
      </ComboboxContent>
    </Combobox>
  ),
}

// --- With Groups ---

export const WithGroups: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput placeholder="Select technology..." />
      <ComboboxContent>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxCollection>
          <ComboboxGroup>
            <ComboboxLabel>Frontend</ComboboxLabel>
            <ComboboxItem value="react">React</ComboboxItem>
            <ComboboxItem value="vue">Vue</ComboboxItem>
            <ComboboxItem value="svelte">Svelte</ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup>
            <ComboboxLabel>Backend</ComboboxLabel>
            <ComboboxItem value="node">Node.js</ComboboxItem>
            <ComboboxItem value="deno">Deno</ComboboxItem>
            <ComboboxItem value="bun">Bun</ComboboxItem>
          </ComboboxGroup>
        </ComboboxCollection>
      </ComboboxContent>
    </Combobox>
  ),
}

// --- Multi Select with Chips ---

export const MultiSelectChips: Story = {
  render: () => {
    const anchorRef = useComboboxAnchor()
    return (
      <Combobox multiple>
        <ComboboxChips ref={anchorRef} className="w-72">
          <ComboboxChipsInput placeholder="Select frameworks..." />
          {frameworks.map((f) => (
            <ComboboxChip key={f.value} value={f.value}>
              {f.label}
            </ComboboxChip>
          ))}
        </ComboboxChips>
        <ComboboxContent anchor={anchorRef}>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          <ComboboxCollection>
            {frameworks.map((f) => (
              <ComboboxItem key={f.value} value={f.value}>
                {f.label}
              </ComboboxItem>
            ))}
          </ComboboxCollection>
        </ComboboxContent>
      </Combobox>
    )
  },
}
