import { useState } from 'react';
import { LOGO, type Language } from '../data/content';

/**
 * Brand logo used in ALL required locations (navbar / footer / favicon).
 * Prefers the user file "الشعار الاساسي.png", falls back to vector logo.svg.
 */
export default function Logo({
  language,
  height = 44,
}: {
  language: Language;
  height?: number;
}) {
  const [failed, setFailed] = useState(false);
  const src = failed ? LOGO.fallbackSvg : LOGO.primaryPng;
  return (
    <img
      src={src}
      alt={LOGO.alt[language]}
      height={height}
      style={{ height, width: 'auto', objectFit: 'contain' }}
      onError={() => setFailed(true)}
    />
  );
}
