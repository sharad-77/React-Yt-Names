import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import type { ButtonHTMLAttributes, FC } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-[100px]',
  {
    variants: {
      variant: {
        primary: 'bg-white text-primary border border-primary hover:bg-gray-50',
        secondary: 'bg-primary text-white hover:bg-primary/90',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 py-2 text-sm',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10', 
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
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
