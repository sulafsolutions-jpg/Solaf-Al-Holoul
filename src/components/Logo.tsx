import { useState } from 'react';
import { LOGO, type Language } from '../data/content';

/**
 * Brand logo used in ALL required locations (navbar / footer / favicon).
 * Prefers the user file "الشعار الاساسي.png", falls back to vector logo.svg.
 */
export default function Logo({
  language,
  height = 44,
  src,
}: {
  language: Language;
  height?: number;
  src?: string;
}) {
  const [failed, setFailed] = useState(false);
  // If an explicit src is given (e.g. footer logo2), use it directly
  // without falling back to logo1. Otherwise prefer primaryPng with fallback.
  const defaultSrc = failed ? LOGO.fallbackSvg : LOGO.primaryPng;
  const resolvedSrc = src ?? defaultSrc;
  return (
    <img
      src={resolvedSrc}
      alt={LOGO.alt[language]}
      height={height}
      style={{ height, width: 'auto', objectFit: 'contain' }}
      onError={() => {
        if (!src) setFailed(true);
      }}
    />
  );
}
