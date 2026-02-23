import type { NavigationItem, SocialLink } from "@/shared/types/navigation";

export const navigationItems: NavigationItem[] = [
  { label: "Accueil", href: "/", ariaLabel: "Aller à la page d'accueil" },
  { label: "Équipe", href: "/equipe", ariaLabel: "Voir l'équipe" },
  { label: "Évènements", href: "/event", ariaLabel: "Voir les évènements" }
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/bpmclubsono" },
  { label: "SoundCloud", href: "https://soundcloud.com/bpm-club-sono" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bpm-club-sono" }
];
