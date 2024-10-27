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
    {
      text: 'Work with us',
      links: [
        {
          text: 'How we work',
          href: getPermalink('/work'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
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
      title: 'Services',
      links: [
        { text: 'Board Support Packages', href: getPermalink('bsp') },
        { text: 'Operating System', href: getPermalink('os') },
        { text: 'Application development', href: getPermalink('app') },
        { text: 'Remote management', href: getPermalink('cloud') },
      ],
    },
    {
      title: 'Work with us',
      links: [
        { text: 'How we work', href: getPermalink('work') },
        { text: 'Pricing', href: getPermalink('pricing') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
    { text: 'Cookies', href: getPermalink('/cookies') },
  ],
  socialLinks: [
  ],
};
