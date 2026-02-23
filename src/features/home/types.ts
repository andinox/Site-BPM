export type EquipmentCard = {
  id: string;
  label: string;
  title: string;
  image: string;
  color?: string;
  large?: boolean;
  imageOffsetY?: number | string;
  imageHeight?: string;
  cardOffsetY?: number | string;
  gridColumn?: string;
  gridRow?: string;
};

export type EventSlide = {
  src: string;
  alt: string;
};

export type LogoItem = {
  image: string;
  alt: string;
  primary?: string;
};

export type ContactSectionContent = {
  title: string;
  actionLabel: string;
  metaText: string;
  primaryRecipientEmail: string;
  ccRecipientEmails: string[];
  mailtoHref: string;
};
