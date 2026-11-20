import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaList = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://adda247couponcode.com/'
    },
    ...items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 2,
      name: it.label,
      ...(it.href ? { item: `https://adda247couponcode.com${it.href}` } : {})
    }))
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaList
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 max-w-7xl mx-auto text-xs text-gray-500 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-adda-600 flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
            {item.href ? (
              <Link href={item.href} className="hover:text-adda-600">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-gray-800">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
