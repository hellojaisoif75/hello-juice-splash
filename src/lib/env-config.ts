/**
 * Environment Configuration Utility
 * Provides safe access to environment variables with validation and fallbacks
 */

interface EnvConfig {
  GFORM_URL: string;
  PAYPAL_LINK: string;
  IG_URL: string;
  FB_URL: string;
  TT_URL: string;
  GA_ID?: string;
}

const DEFAULT_VALUES: EnvConfig = {
  GFORM_URL: "https://docs.google.com/forms/d/e/1FAIpQLSdfgYDy-dtQOQMuCRreOxlHu4FlK4vNcvZUXmRXM0gRGwJ7YQ/viewform?embedded=true",
  PAYPAL_LINK: "https://www.paypal.com/paypalme/hellojaisoif",
  IG_URL: "https://www.instagram.com/hellojaisoif/",
  FB_URL: "https://www.facebook.com/hellojaisoif",
  TT_URL: "https://www.tiktok.com/@hellojaisoif",
  GA_ID: undefined,
};

/**
 * Validates if a URL is safe and well-formed
 */
function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    // Only allow https and http protocols for security
    return ['http:', 'https:'].includes(url.protocol);
  } catch {
    return false;
  }
}

/**
 * Safely gets environment variable with validation
 */
function getEnvVar(key: keyof EnvConfig, fallback: string): string {
  const envKey = `VITE_${key}`;
  const value = import.meta.env[envKey] || fallback;
  
  // Validate URLs for security
  if (key !== 'GA_ID' && !isValidUrl(value)) {
    console.warn(`Invalid URL for ${envKey}, using fallback`);
    return fallback;
  }
  
  return value;
}

/**
 * Environment configuration with safe defaults
 */
export const envConfig: EnvConfig = {
  GFORM_URL: getEnvVar('GFORM_URL', DEFAULT_VALUES.GFORM_URL),
  PAYPAL_LINK: getEnvVar('PAYPAL_LINK', DEFAULT_VALUES.PAYPAL_LINK),
  IG_URL: getEnvVar('IG_URL', DEFAULT_VALUES.IG_URL),
  FB_URL: getEnvVar('FB_URL', DEFAULT_VALUES.FB_URL),
  TT_URL: getEnvVar('TT_URL', DEFAULT_VALUES.TT_URL),
  GA_ID: import.meta.env.VITE_GA_ID,
};

/**
 * Validates if all required environment variables are properly configured
 */
export function validateEnvironment(): { isValid: boolean; issues: string[] } {
  const issues: string[] = [];
  
  // Check required URLs
  const requiredUrls: Array<keyof EnvConfig> = ['GFORM_URL', 'PAYPAL_LINK', 'IG_URL', 'FB_URL', 'TT_URL'];
  
  for (const key of requiredUrls) {
    const value = envConfig[key];
    if (!value || !isValidUrl(value as string)) {
      issues.push(`Invalid or missing ${key}`);
    }
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
}

/**
 * External domains used by the application (for CSP configuration)
 */
export const TRUSTED_DOMAINS = [
  'docs.google.com',
  'www.paypal.com',
  'www.instagram.com',
  'facebook.com',
  'tiktok.com',
  'www.google-analytics.com',
] as const;