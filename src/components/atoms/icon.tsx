import * as React from "react"

import { cn } from "@/lib/utils"

type IconPlacement = "start" | "end"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = React.ComponentType<any>

/**
 * Wrapper for icon components that need placement-based positioning.
 * Use `placement="start"` or `placement="end"` instead of the raw
 * `data-icon="inline-start"` / `data-icon="inline-end"` attributes.
 *
 * @example
 * <Button>
 *   <Icon as={IconSearch} placement="start" />
 *   Search
 * </Button>
 */
function Icon({
  as: Comp,
  placement,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  as: IconComponent
  placement?: IconPlacement
}) {
  return (
    <Comp
      {...props}
      className={cn(className)}
      data-icon={placement !== undefined ? `inline-${placement}` : undefined}
    />
  )
}

export { Icon, type IconComponent, type IconPlacement }
