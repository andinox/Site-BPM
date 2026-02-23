import type { LogoItem } from "@/features/home/types";
import qlcLogo from "@/assets/software/QLC.png";
import abletonLogo from "@/assets/software/ableton.png";
import captureLogo from "@/assets/software/capture.png";
import grandMaLogo from "@/assets/software/grandMA2.png";
import resolumeLogo from "@/assets/software/resolume.png";
import sketchupLogo from "@/assets/software/sketchup.png";
import vectorworksLogo from "@/assets/software/vectorworks.png";
import ensapvsLogo from "@/assets/partners/ensapvs.png";
import imtBusinessLogo from "@/assets/partners/imtbs.png";
import ipParisLogo from "@/assets/partners/ipparis.png";
import navaLogo from "@/assets/partners/nava.png";
import technoParadeLogo from "@/assets/partners/technoparade.png";
import tedxLogo from "@/assets/partners/tedx.png";
import telecomSudParisLogo from "@/assets/partners/tsp.png";

export const softwareLogos: LogoItem[] = [
  { image: grandMaLogo, alt: "grandMA2", primary: "grandMA2" },
  { image: qlcLogo, alt: "QLC+", primary: "QLC+" },
  { image: sketchupLogo, alt: "SketchUp", primary: "SketchUp" },
  { image: vectorworksLogo, alt: "Vectorworks", primary: "Vectorworks" },
  { image: captureLogo, alt: "Capture", primary: "Capture" },
  { image: resolumeLogo, alt: "Resolume Arena", primary: "Resolume Arena" },
  { image: abletonLogo, alt: "Ableton", primary: "Ableton" }
];

export const trustLogos: LogoItem[] = [
  { image: tedxLogo, alt: "TEDx Télécom SudParis", primary: "TEDx Télécom SudParis" },
  { image: ensapvsLogo, alt: "ENSA Paris Val-de-Seine", primary: "ENSAPVS" },
  { image: technoParadeLogo, alt: "Techno Parade", primary: "Techno Parade" },
  { image: telecomSudParisLogo, alt: "Télécom SudParis", primary: "Télécom SudParis" },
  { image: ipParisLogo, alt: "Institut Polytechnique de Paris", primary: "Institut Polytechnique de Paris" },
  { image: imtBusinessLogo, alt: "IMT Business School", primary: "IMT Business School" },
  { image: navaLogo, alt: "Nava Collectif", primary: "Nava" }
];
