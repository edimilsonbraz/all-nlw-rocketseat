import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
  base: "rounded-lg px-5 font-medium flex items-center justify-center gap-2",

  variants: {
    variant: {
      primary: "text-lime-950 bg-lime-300 hover:bg-lime-400",
      secondary: "text-zinc-200 bg-zinc-800 hover:bg-zinc-700"
    },

    size: {
      default: 'py-2',
      full: 'w-full h-11'
    }
  },

  defaultVariants: {
    variant: "primary",
    size: 'default'
  }
})

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  )
}
