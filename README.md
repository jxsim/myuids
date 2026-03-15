# myuids — Design System

A component library built with React, TypeScript, Tailwind CSS v4, and Radix UI primitives, organized by atomic design principles.

## Project structure

```
src/
├── components/
│   ├── atoms/        # Primitive building blocks (Button, Input, Badge, etc.)
│   ├── molecules/    # Composed components (Field, InputGroup, Item, etc.)
│   └── organisms/   # Complex UI patterns (Dialog, Card, Table, Sidebar, etc.)
├── hooks/            # Shared React hooks
└── lib/              # Utility functions (cn, etc.)
```

## Importing components

Components are exported from their atomic level directory:

```tsx
// Atoms
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import { Badge } from "@/components/atoms/badge"
import { Checkbox } from "@/components/atoms/checkbox"
import { Skeleton } from "@/components/atoms/skeleton"
import { Slider } from "@/components/atoms/slider"
import { Separator } from "@/components/atoms/separator"
import { Kbd, KbdGroup } from "@/components/atoms/kbd"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/atoms/input-otp"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/atoms/collapsible"

// Molecules
import { Field, FieldLabel, FieldDescription, FieldError } from "@/components/molecules/field"
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/components/molecules/input-group"
import { Item, ItemTitle, ItemDescription, ItemContent, ItemMedia } from "@/components/molecules/item"

// Organisms
import { Dialog, DialogTrigger, DialogContent } from "@/components/organisms/dialog"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/organisms/card"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/organisms/select"
import { Sheet, SheetTrigger, SheetContent } from "@/components/organisms/sheet"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/organisms/tooltip"
import { Combobox, ComboboxInput, ComboboxContent, ComboboxItem } from "@/components/organisms/combobox"
import { Sidebar, SidebarProvider, SidebarContent } from "@/components/organisms/sidebar"
```

## Running Storybook

```bash
npm run storybook
```

Stories are organized under the same `Atoms / Molecules / Organisms` hierarchy as the source code.

## Tech stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript (strict) | Type safety |
| Tailwind CSS v4 | Utility-first styling |
| Radix UI | Headless primitives |
| Base UI | Additional headless primitives |
| CVA | Variant management |
| Storybook | Component documentation |
| Vite | Build tool |

## Design tokens

All design tokens are defined as CSS custom properties in `src/index.css` using the OKLCH color space. Dark mode is applied via the `.dark` class.

```css
/* Example token usage */
bg-primary          /* --primary */
text-muted-foreground  /* --muted-foreground */
border-border       /* --border */
```
