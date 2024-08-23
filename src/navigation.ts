import type { Props as HeaderProps } from './components/widgets/Header2.astro';
import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Notre histoire',
      href: getPermalink('/notre-histoire'),
    },
  ],
  actions: [{ text: 'Notre carte', variant: 'primary', href: getPermalink('/carte') }],
} satisfies HeaderProps;

export const footerData = {
  links: [
    {
      title: 'Notre pailotte',
      links: [{ text: 'Son histoire', href: getPermalink('/notre-histoire') }],
    },
    {
      title: 'Nous contacter',
      links: [{ text: 'Évènementiel', href: getPermalink('evenementiel') }],
    },
  ],
  secondaryLinks: [{ text: 'Mentions légales', href: getPermalink('/mentions-legales') }],
  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/le_bar_des_anglais/?hl=fr',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/profile.php?id=100070107294011',
    },
  ],
};
