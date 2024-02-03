import { tv, type VariantProps, type ClassProp } from "tailwind-variants";

export const container = tv({
  base: "h-fit",
  variants: {
    flex: {
      true: "flex",
    },
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
  },
  defaultVariants: {
    flex: true,
    direction: "row",
  },
});

export type ContainerStyle = VariantProps<typeof container> & ClassProp
