import img_CDJ from "@/assets/equipment/CDJ.png";
import img_KS118 from "@/assets/equipment/ks118.png";
import img_X32 from "@/assets/equipment/x32.png";
import img_Beam5R from "@/assets/equipment/beam.png";
import img_Ecran from "@/assets/equipment/ecran.png";

export type EquipmentCard = {
  id?: string;
  label: string;
  title: string;
  description: string;
  image?: string;
  large?: boolean;
  imageOffsetY?: number | string;
  imageHeight?: string;
  cardOffsetY?: number | string;
  gridColumn?: string;
  gridRow?: string;
};

export const equipmentCards: EquipmentCard[] = [
  {
    id: "beam-5r",
    label: "Éclairage",
    title: "Beam 5R",
    description: "Poursuites puissantes pour des effets scéniques dynamiques.",
    image: img_Beam5R,
    gridColumn: "1 / span 1",
    gridRow: "1"
  },
  {
    id: "ecrans-led",
    label: "Effets",
    title: "Écrans LED",
    description: "Mur LED haute résolution pour visuels lumineux et immersifs.",
    image: img_Ecran,
    gridColumn: "2 / span 1",
    gridRow: "1"
  },
  {
    id: "cdj-2000-nexus-2",
    label: "DJ",
    title: "CDJ-2000 Nexus 2",
    description: "Lecteurs DJ Pioneer haut de gamme, standard des clubs.",
    image: img_CDJ,
    gridColumn: "3 / span 2",
    gridRow: "1"
  },
  {
    id: "qsc-ks118",
    label: "Basses",
    title: "QSC KS118",
    description: "Caisson de basses performant, grave profond et percutant.",
    image: img_KS118,
    gridColumn: "1 / span 2",
    gridRow: "1"
  },
  {
    id: "behringer-x32",
    label: "Mixage",
    title: "Behringer X32",
    description: "Console numérique puissante avec effets intégrés pour le live.",
    image: img_X32,
    gridColumn: "3 / span 1",
    gridRow: "2"
  },
  {
    id: "grandma-command-wing",
    label: "Contrôle",
    title: "GrandMA Command Wing",
    description: "Contrôleur lumière professionel pour la gestion des shows.",
    gridColumn: "4 / span 1",
    gridRow: "2"
  }
];
