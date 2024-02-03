import { tv, type VariantProps } from "tailwind-variants";

export const text = tv({
  base: "font-roboto",
  variants: {
    color: {
      primary: "text-primary",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export type TextProps = VariantProps<typeof text>;
