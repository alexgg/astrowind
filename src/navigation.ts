import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Board Support Package',
          href: getPermalink('/bsp'),
        },
        {
          text: 'Operating System',
          href: getPermalink('/os'),
        },
        {
          text: 'Application',
          href: getPermalink('/app'),
        },
        {
          text: 'Remote Management',
          href: getPermalink('/cloud'),
        },
      ],
    },
  ],
  actions: [{ text: 'Get in touch', href: getPermalink('contact') , target: '_blank' }],
  position: 'right',
};

export const footerData = {
  links: [
    {
    },
    {
    },
    {
    },
    {
      title: 'Services',
      links: [
        { text: 'Board Support Packages', href: '#' },
        { text: 'Operating System', href: '#' },
        { text: 'Application development', href: '#' },
        { text: 'Remote management', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
};
