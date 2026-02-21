import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const DIST = resolve(process.cwd(), 'dist');
const SITE = 'https://www.muxu.io';

const pages = [
  { slug: '', title: 'Home' },
  { slug: 'about', title: 'About' },
  { slug: 'bsp', title: 'Board Support Package' },
  { slug: 'os', title: 'Operating System' },
  { slug: 'app', title: 'Containers' },
  { slug: 'cloud', title: 'Remote Management' },
  { slug: 'cv', title: 'Computer Vision' },
  { slug: 'ai', title: 'Edge AI & IoT' },
  { slug: 'work', title: 'How We Work' },
  { slug: 'pricing', title: 'Pricing' },
  { slug: 'contact', title: 'Contact' },
];

function extractMainText(html) {
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const content = mainMatch ? mainMatch[1] : html;

  return content
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

const sections = pages.map(({ slug, title }) => {
  const filePath = slug ? resolve(DIST, slug, 'index.html') : resolve(DIST, 'index.html');
  try {
    const html = readFileSync(filePath, 'utf-8');
    const text = extractMainText(html);
    const url = slug ? `${SITE}/${slug}` : SITE;
    return `## ${title}\n\nURL: ${url}\n\n${text}`;
  } catch {
    console.warn(`Skipping ${filePath} (not found)`);
    return null;
  }
});

const output = `# MuXu — Full Site Content\n\n${sections.filter(Boolean).join('\n\n---\n\n')}\n`;

writeFileSync(resolve(DIST, 'llms-full.txt'), output, 'utf-8');
console.log(`Generated llms-full.txt (${pages.length} pages)`);
