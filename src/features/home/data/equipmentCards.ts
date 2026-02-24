import type { EquipmentCard } from "@/features/home/types";
import bladeImage from "@/assets/equipment/blade.png";
import cdjImage from "@/assets/equipment/XZ.png";
import ledScreenImage from "@/assets/equipment/ecran.png";
import pixyImage from "@/assets/equipment/pixy.png";
import prolyteImage from "@/assets/equipment/prolyte.png";
import coldSparkImage from "@/assets/equipment/étincelles.png";
import mixerImage from "@/assets/equipment/x32.png";
import grandmaImage from "@/assets/grandma.png";

export const equipmentCards: EquipmentCard[] = [
  {
    id: "cold-spark-blade",
    label: "Light",
    title: "Blade",
    image: bladeImage,
    gridColumn: "1 / span 1",
    gridRow: "1"
  },
  {
    id: "cold-spark-pixy",
    label: "Light",
    title: "Pixy",
    image: pixyImage,
    gridColumn: "2 / span 1",
    gridRow: "1"
  },
  {
    id: "cold-spark-system",
    label: "Étincelles",
    title: "Boîtier Étincelles Froides",
    image: coldSparkImage,
    gridColumn: "3 / span 2",
    gridRow: "1"
  },
  {
    id: "ecrans-led",
    label: "Effets",
    title: "Écrans LED",
    image: ledScreenImage,
    gridColumn: "1 / span 2",
    gridRow: "2"
  },
  {
    id: "xz",
    label: "DJ",
    title: "XDJ-XZ Pioneer Dj",
    image: cdjImage,
    gridColumn: "3 / span 2",
    gridRow: "2"
  },
  {
    id: "behringer-x32",
    label: "Mixage",
    title: "Behringer X32",
    image: mixerImage,
    gridColumn: "1 / span 1",
    gridRow: "3"
  },
  {
    id: "grandma-command-wing",
    label: "Contrôle",
    title: "GrandMA Command Wing",
    image: grandmaImage,
    gridColumn: "2 / span 1",
    gridRow: "3"
  },
  {
    id: "prolyte-meters",
    label: "Structure",
    title: "Beaucoup de Prolytes",
    image: prolyteImage,
    gridColumn: "3 / span 2",
    gridRow: "3"
  }
];
