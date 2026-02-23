import type { TeamMemberNode } from "@/features/team/types";
import placeholderBpmPhoto from "@/assets/pp_team/logo_BPM.png";
import arnaudPhoto from "@/assets/pp_team/Arnaud.webp";
import aurelienPhoto from "@/assets/pp_team/Aurelien.webp";
import douaePhoto from "@/assets/pp_team/Douae.webp";
import gustavePhoto from "@/assets/pp_team/Gustave.webp";
import hectorPhoto from "@/assets/pp_team/Hector.webp";
import inesPhoto from "@/assets/pp_team/Ines.webp";
import jacquesPhoto from "@/assets/pp_team/Jacques.webp";
import jeanPhoto from "@/assets/pp_team/Jean.webp";
import julienPhoto from "@/assets/pp_team/Julien.webp";
import leoPhoto from "@/assets/pp_team/Leo.webp";
import loucasPhoto from "@/assets/pp_team/Loucas.webp";
import loupPhoto from "@/assets/pp_team/Loup.webp";
import lucaPhoto from "@/assets/pp_team/Luca.webp";
import lucasPhoto from "@/assets/pp_team/Lucas.webp";
import lucasDPhoto from "@/assets/pp_team/LucasD.webp";
import ludmilaPhoto from "@/assets/pp_team/Ludmila.webp";
import maellePhoto from "@/assets/pp_team/Maelle.webp";
import martinPhoto from "@/assets/pp_team/Martin.webp";
import mathieuPhoto from "@/assets/pp_team/Mathieu.webp";
import nicolasPhoto from "@/assets/pp_team/Nicolas.webp";
import paoloPhoto from "@/assets/pp_team/Paolo.webp";
import quentinPhoto from "@/assets/pp_team/Quentin.webp";
import samyPhoto from "@/assets/pp_team/Samy.webp";
import slavikPhoto from "@/assets/pp_team/Slavik.webp";
import williamPhoto from "@/assets/pp_team/William.webp";
import zeinebPhoto from "@/assets/pp_team/Zeineb.webp";

export const teamMembers: TeamMemberNode[] = [
  { id: "president", name: "Jean", role: "Président", photo: jeanPhoto, x: 0, y: 0 },
  { id: "secretaire", name: "Luca", role: "Secrétaire", photo: lucaPhoto, x: 0, y: 200 },
  { id: "hector", name: "Hector", role: "VP Lights", photo: hectorPhoto, x: -200, y: 60 },
  { id: "mathieu", name: "Mathieu", role: "VP Son", photo: mathieuPhoto, x: 200, y: 60 },
  { id: "samy", name: "Samy", role: "Respo Lights", photo: samyPhoto, x: -400, y: 120 },
  { id: "jacques", name: "Jacques", role: "Respo Son", photo: jacquesPhoto, x: 400, y: 120 },
  { id: "vice", name: "Maëlle", role: "Vice du prez", photo: maellePhoto, x: -600, y: 300 },
  { id: "aurelien", name: "Aurélien", role: "Mapping", photo: aurelienPhoto, x: -800, y: 100 },
  { id: "loucas", name: "Loucas", role: "Membre Lights", photo: loucasPhoto, x: -600, y: 100 },
  { id: "lucasd", name: "Lucas", role: "Mapping", photo: lucasDPhoto, x: -800, y: 300 },
  { id: "gustave", name: "Gustave", role: "Membre Son", photo: gustavePhoto, x: 600, y: 100 },
  { id: "paolo", name: "Paolo", role: "Membre Son", photo: paoloPhoto, x: 600, y: 300 },
  { id: "julien", name: "Julien", role: "Log", photo: julienPhoto, x: 800, y: 100 },
  { id: "douae", name: "Douae", role: "Log", photo: douaePhoto, x: 800, y: 300 },
  { id: "arnaud", name: "Arnaud", role: "Respo Conan", photo: arnaudPhoto, x: 0, y: 500 },
  { id: "leo", name: "Léo", role: "Membre Conan", photo: leoPhoto, x: -200, y: 550 },
  { id: "charlotte", name: "Charlotte", role: "Membre Conan", photo: placeholderBpmPhoto, x: 200, y: 550 },
  { id: "ludmila", name: "Ludmila", role: "Ritz", photo: ludmilaPhoto, x: 100, y: 800 },
  { id: "quentin", name: "Quentin", role: "Ritz", photo: quentinPhoto, x: -100, y: 800 },
  { id: "william", name: "William", role: "Réparation", photo: williamPhoto, x: -500, y: 600 },
  { id: "nicolas", name: "Nicolas", role: "Numérique", photo: nicolasPhoto, x: -400, y: 850 },
  { id: "ines", name: "Inès", role: "RE", photo: inesPhoto, x: -750, y: 650 },
  { id: "martin", name: "Martin", role: "RE", photo: martinPhoto, x: -650, y: 900 },
  { id: "slavik", name: "Slavik", role: "Communication", photo: slavikPhoto, x: 400, y: 850 },
  { id: "zeineb", name: "Zeineb", role: "RI", photo: zeinebPhoto, x: 750, y: 650 },
  { id: "loup", name: "Loup", role: "RI", photo: loupPhoto, x: 650, y: 900 },
  { id: "lucas", name: "Lucas", role: "Production", photo: lucasPhoto, x: 500, y: 600 }
];
