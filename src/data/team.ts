import placeholderAvatar from "@/assets/logo-placeholder.svg";
import JeanPhoto from "@/assets/pp_team_display/Jean.webp";
import MaellePhoto from "@/assets/pp_team_display/Maelle.webp";
import LucaPhoto from "@/assets/pp_team_display/Luca.webp";
import SamyPhoto from "@/assets/pp_team_display/Samy.webp";
import HectorPhoto from "@/assets/pp_team_display/Hector.webp";
import LucasPhoto from "@/assets/pp_team_display/Lucas.webp";
import AurelienPhoto from "@/assets/pp_team_display/Aurelien.webp";
import JacquesPhoto from "@/assets/pp_team_display/Jacques.webp";
import MathieuPhoto from "@/assets/pp_team_display/Mathieu.webp";
import GustavePhoto from "@/assets/pp_team_display/Gustave.webp";
import PaoloPhoto from "@/assets/pp_team_display/Paolo.webp";
import JulienPhoto from "@/assets/pp_team_display/Julien.webp";
import DouaePhoto from "@/assets/pp_team_display/Douae.webp";
import ArnaudPhoto from "@/assets/pp_team_display/Arnaud.webp";
import LeoPhoto from "@/assets/pp_team_display/Leo.webp";
import WilliamPhoto from "@/assets/pp_team_display/William.webp";
import LudmilaPhoto from "@/assets/pp_team_display/Ludmila.webp";
import QuentinPhoto from "@/assets/pp_team_display/Quentin.webp";
import InesPhoto from "@/assets/pp_team_display/Ines.webp";
import MartinPhoto from "@/assets/pp_team_display/Martin.webp";
import NicolasRPhoto from "@/assets/pp_team_display/Nicolas R.webp";
import SlavikPhoto from "@/assets/pp_team_display/Slavik.webp";
import ZeinebPhoto from "@/assets/pp_team_display/Zeineb.webp";
import LoucasPhoto from "@/assets/pp_team_display/Loucas.webp"
import LoupPhoto from "@/assets/pp_team_display/Loup.webp";

export type TeamNode = {
  id: string;
  name: string;
  title: string;
  photo: string;
  x: number;
  y: number;
};

export const teamNodes: TeamNode[] = [
  { id: "president", name: "Jean", title: "Président", photo: JeanPhoto, x: 0, y: 0 },
  { id: "secretaire", name: "Luca", title: "Secrétaire", photo: LucaPhoto, x: 0, y: 200 },
  { id: "hector", name: "Hector", title: "VP Lights", photo: HectorPhoto, x: -200, y: 60 },
  { id: "mathieu", name: "Mathieu", title: "VP Son", photo: MathieuPhoto, x: 200, y: 60 },
  { id: "samy", name: "Samy", title: "Respo Lights", photo: SamyPhoto, x: -400, y: 120 },
  { id: "jacques", name: "Jacques", title: "Respo Son", photo: JacquesPhoto, x: 400, y: 120 },

  { id: "vice", name: "Maèlle", title: "Vice-présidente", photo: MaellePhoto, x: -600, y: 300 },
  { id: "aurelien", name: "Aurélien", title: "Mapping", photo: AurelienPhoto, x: -800, y: 100 },
  { id: "loucas", name: "Loucas", title: "Lights", photo: LoucasPhoto, x: -600, y: 100 },
  { id: "lucas-D", name: "Lucas D.", title: "Mapping", photo: placeholderAvatar, x: -800, y: 300 },

 
  
  { id: "gustave", name: "Gustave", title: "Membre Son", photo: GustavePhoto, x: 600, y: 100 },
  { id: "paolo", name: "Paolo", title: "Membre Son", photo: PaoloPhoto, x: 600, y: 300 },
  { id: "julien", name: "Julien", title: "Log", photo: JulienPhoto, x: 800, y: 100 },
  { id: "douae", name: "Douae", title: "Log", photo: DouaePhoto, x: 800, y: 300 },


  { id: "arnaud", name: "Arnaud", title: "Respo Conan", photo: ArnaudPhoto, x: 0, y: 500 },
  { id: "leo", name: "Léo", title: "Membre Conan", photo: LeoPhoto, x: -200, y: 550 },
  { id: "charlotte", name: "Charlotte", title: "Membre Conan", photo: placeholderAvatar, x: 200, y: 550 },

  { id: "ludmila", name: "Ludmila", title: "Ritz", photo: LudmilaPhoto, x: 100, y: 800 },
  { id: "quentin", name: "Quentin", title: "Ritz", photo: QuentinPhoto, x: -100, y: 800 },

  { id: "william", name: "William", title: "Répa", photo: WilliamPhoto, x: -500, y: 600 },
  { id: "nicolas", name: "Nicolas", title: "Num", photo: NicolasRPhoto, x: -400, y: 850 },


  { id: "ines", name: "Inès", title: "RE", photo: InesPhoto, x: -750, y: 650 },
  { id: "martin", name: "Martin", title: "RE", photo: MartinPhoto, x: -650, y: 900 },

  { id: "slavik", name: "Slavik", title: "Com", photo: SlavikPhoto, x: 400, y: 850 },
  { id: "zeineb", name: "Zeineb", title: "RI", photo: ZeinebPhoto, x: 750, y: 650 },
  { id: "loup", name: "Loup", title: "RI", photo: LoupPhoto, x: 650, y: 900 },
  { id: "lucas", name: "Lucas", title: "Membre Lights", photo: LucasPhoto, x: 500, y: 600 },
];
