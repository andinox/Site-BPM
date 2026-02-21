import placeholderBPM from "@/assets/pp_team/logo_BPM.png";
import photo_Arnaud from "@/assets/pp_team/Arnaud.webp";
import photo_Aurelien from "@/assets/pp_team/Aurelien.webp";
import photo_Douae from "@/assets/pp_team/Douae.webp";
import photo_Gustave from "@/assets/pp_team/Gustave.webp";
import photo_Hector from "@/assets/pp_team/Hector.webp";
import photo_Ines from "@/assets/pp_team/Ines.webp";
import photo_Jacques from "@/assets/pp_team/Jacques.webp";
import photo_Jean from "@/assets/pp_team/Jean.webp";
import photo_Julien from "@/assets/pp_team/Julien.webp";
import photo_Leo from "@/assets/pp_team/Leo.webp";
import photo_Loucas from "@/assets/pp_team/Loucas.webp"
import photo_Loup from "@/assets/pp_team/Loup.webp";
import photo_Luca from "@/assets/pp_team/Luca.webp";
import photo_Lucas from "@/assets/pp_team/Lucas.webp";
import photo_LucasD from "@/assets/pp_team/LucasD.webp";
import photo_Ludmila from "@/assets/pp_team/Ludmila.webp";
import photo_Maelle from "@/assets/pp_team/Maelle.webp";
import photo_Martin from "@/assets/pp_team/Martin.webp";
import photo_Mathieu from "@/assets/pp_team/Mathieu.webp";
import photo_Nicolas from "@/assets/pp_team/Nicolas.webp";
import photo_Paolo from "@/assets/pp_team/Paolo.webp";
import photo_Quentin from "@/assets/pp_team/Quentin.webp";
import photo_Samy from "@/assets/pp_team/Samy.webp";
import photo_Slavik from "@/assets/pp_team/Slavik.webp";
import photo_William from "@/assets/pp_team/William.webp";
import photo_Zeineb from "@/assets/pp_team/Zeineb.webp";

export type TeamNode = {
  id: string;
  name: string;
  title: string;
  photo: string;
  x: number;
  y: number;
};

export const teamNodes: TeamNode[] = [
  { id: "president", name: "Jean", title: "Président", photo: photo_Jean, x: 0, y: 0 },
  { id: "secretaire", name: "Luca", title: "Secrétaire", photo: photo_Luca, x: 0, y: 200 },
  { id: "hector", name: "Hector", title: "VP Lights", photo: photo_Hector, x: -200, y: 60 },
  { id: "mathieu", name: "Mathieu", title: "VP Son", photo: photo_Mathieu, x: 200, y: 60 },
  { id: "samy", name: "Samy", title: "Respo Lights", photo: photo_Samy, x: -400, y: 120 },
  { id: "jacques", name: "Jacques", title: "Respo Son", photo: photo_Jacques, x: 400, y: 120 },

  { id: "vice", name: "Maëlle", title: "Vice du prez", photo: photo_Maelle, x: -600, y: 300 },
  { id: "aurelien", name: "Aurélien", title: "Mapping", photo: photo_Aurelien, x: -800, y: 100 },
  { id: "loucas", name: "Loucas", title: "Membre Lights", photo: photo_Loucas, x: -600, y: 100 },
  { id: "lucasD", name: "Lucas", title: "Mapping", photo: photo_LucasD, x: -800, y: 300 },

  { id: "gustave", name: "Gustave", title: "Membre Son", photo: photo_Gustave, x: 600, y: 100 },
  { id: "paolo", name: "Paolo", title: "Membre Son", photo: photo_Paolo, x: 600, y: 300 },
  { id: "julien", name: "Julien", title: "Log", photo: photo_Julien, x: 800, y: 100 },
  { id: "douae", name: "Douae", title: "Log", photo: photo_Douae, x: 800, y: 300 },

  { id: "arnaud", name: "Arnaud", title: "Respo Conan", photo: photo_Arnaud, x: 0, y: 500 },
  { id: "leo", name: "Léo", title: "Membre Conan", photo: photo_Leo, x: -200, y: 550 },
  { id: "charlotte", name: "Charlotte", title: "Membre Conan", photo: placeholderBPM, x: 200, y: 550 },

  { id: "ludmila", name: "Ludmila", title: "Ritz", photo: photo_Ludmila, x: 100, y: 800 },
  { id: "quentin", name: "Quentin", title: "Ritz", photo: photo_Quentin, x: -100, y: 800 },

  { id: "william", name: "William", title: "Réparation", photo: photo_William, x: -500, y: 600 },
  { id: "nicolas", name: "Nicolas", title: "Numérique", photo: photo_Nicolas, x: -400, y: 850 },

  { id: "ines", name: "Inès", title: "RE", photo: photo_Ines, x: -750, y: 650 },
  { id: "martin", name: "Martin", title: "RE", photo: photo_Martin, x: -650, y: 900 },

  { id: "slavik", name: "Slavik", title: "Communication", photo: photo_Slavik, x: 400, y: 850 },
  { id: "zeineb", name: "Zeineb", title: "RI", photo: photo_Zeineb, x: 750, y: 650 },
  { id: "loup", name: "Loup", title: "RI", photo: photo_Loup, x: 650, y: 900 },
  { id: "lucas", name: "Lucas", title: "Production", photo: photo_Lucas, x: 500, y: 600 },
];