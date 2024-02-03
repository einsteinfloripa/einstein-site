import { tv, type VariantProps } from "tailwind-variants";

export const icon = tv({
  base: "text-primary",
  variants: {
    size: {
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export type IconStyles = VariantProps<typeof icon>;
