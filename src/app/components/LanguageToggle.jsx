// src/app/components/LanguageToggle.jsx
'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LanguageToggle() {
  const pathname = usePathname() || '/';
  const params = useParams(); // { locale?: 'ar' | 'en' }
  const current = params?.locale === 'en' ? 'en' : 'ar';
  const target = current === 'ar' ? 'en' : 'ar';

  return (
    <Link
      href={pathname}
      locale={target}              // <— let Next.js flip /ar ↔ /en
      prefetch={false}
                className="bg-gray-200 text-black font-bold px-4 py-2 rounded"
      aria-label={`Switch to ${target === 'en' ? 'English' : 'Arabic'}`}
    >
      {target.toUpperCase()}
    </Link>
  );
}
