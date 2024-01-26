import { text } from "@components/Text/style";
import { tv } from "tailwind-variants";

export const link = tv({
  base: "hover:text-blue-700",
  extend: text,
});
