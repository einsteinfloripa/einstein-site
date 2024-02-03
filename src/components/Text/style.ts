import { tv, type ClassProp, type VariantProps } from "tailwind-variants";

export const text = tv({
  base: "font-roboto",
  variants: {
    color: {
      primary: "text-primary",
    },
    size: {
      "small-title": "text-3xl",
      title: "text-5xl",
      "super-title": "text-7xl",
    },
  },
  defaultVariants: {
    color: "primary",
  },
  compoundVariants: [
    {
      size: "small-title",
      class: "font-bold",
    },
    {
      size: "title",
      class: "font-extrabold",
    },
    {
      size: "super-title",
      class: "font-extrabold",
    },
  ],
});

export type TextProps = VariantProps<typeof text> & ClassProp;
