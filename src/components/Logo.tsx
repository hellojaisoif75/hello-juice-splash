import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withBackground?: boolean;
}

const sizeClasses = {
  sm: "h-12",
  md: "h-16", 
  lg: "h-20",
};

export default function Logo({ 
  className, 
  size = "lg", 
  withBackground = false 
}: LogoProps) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}hellojaisoif-logo.png`}
      alt="HelloJaiSoif Logo"
      width={200}
      height={80}
      loading="eager"
      decoding="sync"
      className={cn(
        sizeClasses[size],
        "w-auto max-w-none object-contain",
        withBackground && "bg-white rounded-lg p-2",
        className
      )}
      style={{ 
        imageRendering: "auto",
        WebkitFontSmoothing: "antialiased"
      }}
    />
  );
}
