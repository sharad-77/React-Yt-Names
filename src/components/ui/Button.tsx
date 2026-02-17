import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { ButtonHTMLAttributes, FC } from "react";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-[100px]",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-primary border border-primary hover:bg-primary hover:text-white",
        secondry:
          "bg-primary text-white hover:bg-primary/90 hover:bg-white hover:text-primary border-2 border-primary",
      },
      size: {
        default:
          "h-9 px-4 text-xs md:h-10 md:px-6 md:text-sm lg:h-12 lg:px-8 lg:text-md w-full py-5",
        sm: "h-8 px-3 text-xs py-5",
        md: "h-10 px-4 py-2 text-sm py-5",
        lg: "h-12 px-8 text-base py-5",
        icon: "h-10 w-10 py-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, variant, size, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export default Button;
