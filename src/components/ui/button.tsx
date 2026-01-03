import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-mono font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-[0_0_20px_hsl(110_100%_55%/0.5)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_15px_hsl(110_100%_55%/0.3)]",
        secondary:
          "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 hover:border-primary/30",
        ghost:
          "text-foreground hover:bg-muted hover:text-primary",
        link:
          "text-primary underline-offset-4 hover:underline",
        terminal:
          "bg-background-secondary border border-primary/30 text-foreground hover:border-primary hover:bg-primary/5 hover:text-primary hover:shadow-[0_0_15px_hsl(110_100%_55%/0.2)]",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent-glow hover:shadow-[0_0_20px_hsl(25_100%_50%/0.5)]",
        hazard:
          "relative overflow-hidden bg-accent text-accent-foreground font-bold before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,transparent,transparent_8px,hsl(220_15%_5%)_8px,hsl(220_15%_5%)_16px)] before:opacity-30 hover:shadow-[0_0_25px_hsl(25_100%_50%/0.6)]",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
