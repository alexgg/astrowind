const SITE = 'https://www.muxu.io';

const PAGE_NAMES: Record<string, string> = {
  bsp: 'Board Support Package',
  os: 'Operating System',
  app: 'Containers',
  cloud: 'Remote Management',
  cv: 'Computer Vision',
  ai: 'Edge AI & IoT',
  about: 'About',
  work: 'How We Work',
  pricing: 'Pricing',
  contact: 'Contact',
  search: 'Search',
  terms: 'Terms',
  privacy: 'Privacy',
  cookies: 'Cookies',
};

export function buildBreadcrumbSchema(pathname: string): Record<string, unknown> {
  const segments = pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);

  const items: { '@type': string; position: number; name: string; item?: string }[] = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
  ];

  if (segments.length > 0) {
    const slug = segments[segments.length - 1];
    const name = PAGE_NAMES[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
    items.push({
      '@type': 'ListItem',
      position: 2,
      name,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}
