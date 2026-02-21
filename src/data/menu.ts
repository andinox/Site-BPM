export type MenuItem = {
  label: string;
  link: string;
  ariaLabel?: string;
};

export type SocialItem = {
  label: string;
  link: string;
};

export const menuItems: MenuItem[] = [
  { label: "Accueil", link: "/", ariaLabel: "Aller à la page d'accueil" },
  { label: "Équipe", link: "/equipe", ariaLabel: "Voir l'équipe" },
  { label: "Évènements", link: "/event", ariaLabel: "Voir les évènements" }
];

export const socialItems: SocialItem[] = [
  { label: "Instagram", link: "https://www.instagram.com/bpmclubsono" },
  { label: "SoundCloud", link: "https://soundcloud.com/bpm-club-sono" },
  { label: "LinkedIn", link: "https://www.linkedin.com/company/bpm-club-sono" }
];
