import React from 'react';

/**
 * Security Utilities
 * Collection of security-focused helper functions
 */

/**
 * Sanitizes URLs to prevent XSS and malicious redirects
 */
export function sanitizeUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    
    // Only allow safe protocols
    if (!['http:', 'https:', 'mailto:'].includes(parsedUrl.protocol)) {
      throw new Error('Unsafe protocol');
    }
    
    // Prevent javascript: and data: URLs
    if (parsedUrl.protocol === 'javascript:' || parsedUrl.protocol === 'data:') {
      throw new Error('Blocked unsafe URL');
    }
    
    return parsedUrl.toString();
  } catch (error) {
    console.warn('Invalid URL detected:', url, error);
    // Return a safe fallback
    return '#';
  }
}

/**
 * Validates and sanitizes external links
 */
export function validateExternalLink(url: string): { isValid: boolean; sanitizedUrl: string } {
  try {
    const sanitized = sanitizeUrl(url);
    const parsedUrl = new URL(sanitized);
    
    // Check if it's an external link
    const isExternal = parsedUrl.origin !== window.location.origin;
    
    return {
      isValid: sanitized !== '#' && (isExternal || parsedUrl.pathname !== '#'),
      sanitizedUrl: sanitized
    };
  } catch {
    return {
      isValid: false,
      sanitizedUrl: '#'
    };
  }
}

/**
 * Creates secure attributes for external links
 */
export function getSecureExternalLinkProps(url: string) {
  const { isValid, sanitizedUrl } = validateExternalLink(url);
  
  if (!isValid) {
    return {
      href: '#',
      onClick: (e: React.MouseEvent) => e.preventDefault(),
      'aria-label': 'Lien indisponible'
    };
  }
  
  return {
    href: sanitizedUrl,
    target: '_blank' as const,
    rel: 'noopener noreferrer' as const,
    'aria-label': `Ouvre ${sanitizedUrl} dans un nouvel onglet`
  };
}

/**
 * CSP nonce generator for inline scripts (if needed in the future)
 */
export function generateNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Sanitizes text content to prevent XSS
 */
export function sanitizeText(text: string): string {
  // Basic text sanitization - escapes HTML characters
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * Validates iframe sources for security
 */
export function validateIframeSrc(src: string): boolean {
  try {
    const url = new URL(src);
    
    // Allow only trusted domains for iframes
    const trustedDomains = [
      'docs.google.com',
      'www.google.com',
      'forms.google.com'
    ];
    
    return trustedDomains.some(domain => 
      url.hostname === domain || url.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}