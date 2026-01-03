import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withBackground?: boolean;
}

const sizeConfig = {
  sm: { height: 48, width: 180 },
  md: { height: 64, width: 240 },
  lg: { height: 80, width: 300 },
};

export default function Logo({ 
  className, 
  size = "lg", 
  withBackground = false 
}: LogoProps) {
  const { height, width } = sizeConfig[size];
  
  return (
    <svg
      viewBox="0 0 300 80"
      width={width}
      height={height}
      className={cn(
        "flex-shrink-0",
        withBackground && "bg-white rounded-lg p-2",
        className
      )}
      aria-label="HelloJaiSoif Logo"
      role="img"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="dropGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.15"/>
        </filter>
      </defs>
      
      {/* Water drop icon */}
      <g filter="url(#dropShadow)">
        <path
          d="M25 8 C25 8 12 25 12 35 C12 45 18 52 25 52 C32 52 38 45 38 35 C38 25 25 8 25 8 Z"
          fill="url(#dropGradient)"
        />
        <ellipse cx="20" cy="30" rx="3" ry="4" fill="white" opacity="0.6" />
      </g>
      
      {/* "Hello" text */}
      <text
        x="48"
        y="38"
        fontFamily="'Poppins', 'Segoe UI', system-ui, sans-serif"
        fontSize="26"
        fontWeight="700"
        fill="url(#logoGradient)"
        letterSpacing="-0.5"
      >
        Hello
      </text>
      
      {/* "Jai" text */}
      <text
        x="126"
        y="38"
        fontFamily="'Poppins', 'Segoe UI', system-ui, sans-serif"
        fontSize="26"
        fontWeight="600"
        fill="#374151"
        letterSpacing="-0.3"
      >
        Jai
      </text>
      
      {/* "Soif" text with emphasis */}
      <text
        x="170"
        y="38"
        fontFamily="'Poppins', 'Segoe UI', system-ui, sans-serif"
        fontSize="26"
        fontWeight="700"
        fill="url(#logoGradient)"
        letterSpacing="-0.5"
      >
        Soif
      </text>
      
      {/* Tagline */}
      <text
        x="48"
        y="56"
        fontFamily="'Poppins', 'Segoe UI', system-ui, sans-serif"
        fontSize="10"
        fontWeight="500"
        fill="#6b7280"
        letterSpacing="0.5"
      >
        Livraison de boissons à domicile
      </text>
      
      {/* Small decorative drops */}
      <circle cx="230" cy="22" r="3" fill="#34d399" opacity="0.7" />
      <circle cx="242" cy="28" r="2" fill="#10b981" opacity="0.5" />
    </svg>
  );
}
