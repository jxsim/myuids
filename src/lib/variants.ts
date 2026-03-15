// Shared base color strings used across Button and Badge.
// Each component appends its own interaction classes on top.
export const sharedVariants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
  secondary: "bg-secondary text-secondary-foreground",
  destructive: "bg-destructive/10 text-destructive dark:bg-destructive/20",
} as const
