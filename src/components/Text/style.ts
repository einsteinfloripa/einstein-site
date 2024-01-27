import { tv, type ClassProp, type VariantProps } from "tailwind-variants";

export const text = tv({
  base: "font-roboto",
  variants: {
    color: {
      primary: "text-primary",
    },
    size: {
      title: "text-3xl",
    },
  },
  defaultVariants: {
    color: "primary",
  },
  compoundVariants: [
    {
      size: "title",
      class: "font-bold",
    },
  ],
});

export type TextProps = VariantProps<typeof text> & ClassProp;
