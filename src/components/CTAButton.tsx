import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const CTAButton = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick, 
  className,
  disabled = false
}: CTAButtonProps) => {
  const baseClasses = "font-semibold rounded-full transition-smooth inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-brand-black hover:bg-brand-gold text-white shadow-elegant hover:shadow-button disabled:opacity-50 disabled:cursor-not-allowed font-sans font-semibold",
    secondary: "bg-brand-gold hover:bg-brand-black text-white shadow-soft hover:shadow-elegant disabled:opacity-50 disabled:cursor-not-allowed font-sans font-semibold",
    outline: "border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed font-sans font-medium"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CTAButton;