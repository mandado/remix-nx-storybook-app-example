import { cva, VariantProps } from "class-variance-authority";

export const button = cva(["inline-flex disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed items-center border border-transparent"], {
  variants: {
    variant: {
      primary: [
        "bg-gray-700",
        "text-white",
        "border-transparent",
        "hover:bg-gray-800",
      ],
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: [
        "bg-white",
        "text-gray-800",
        "hover:bg-gray-100",
      ],
      cancel: [
        "bg-red-100",
        "text-red-600",
        "hover:bg-red-500",
        "hover:text-white",
      ],
    },
    size: {
      small: ["text-xs", "px-2.5", "py-1.5", "rounded"],
      medium: ["text-sm", "px-3", "py-2", "leading-4", "rounded-md"],
      base: ["text-sm", "px-4", "py-2", "rounded-md"],
      large: ["text-base", "px-4", "py-2", "rounded-md"],
    },
  },
  compoundVariants: [{ variant: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    variant: "primary",
    size: "base",
  },
});

export type ButtonProps = VariantProps<typeof button>;
