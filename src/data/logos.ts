import logo_grandMA2 from "@/assets/software/grandMA2.png";
import logo_QLC from "@/assets/software/QLC.png";
import logo_capture from "@/assets/software/capture.png";
import logo_sketchup from "@/assets/software/sketchup.png";
import logo_vectorworks from "@/assets/software/vectorworks.png";
import logo_resolume from "@/assets/software/resolume.png";
import logo_ableton from "@/assets/software/ableton.png";


import logo_tedx from "@/assets/partners/tedx.png";
import logo_tsp from "@/assets/partners/tsp.png";
import logo_technoparade from "@/assets/partners/technoparade.png";
import logo_imtbs from "@/assets/partners/imtbs.png";
import logo_ipparis from "@/assets/partners/ipparis.png";
import logo_lacoustics from "@/assets/partners/lacoustics.png";
import logo_nava from "@/assets/partners/nava.png";
import logo_ensapvs from "@/assets/partners/ensapvs.png";

export type LogoItem = {
  image: string;
  alt: string;
  primary?: string;
};

export const softwareLogos: LogoItem[] = [
  { image: logo_grandMA2, alt: "grandMA2", primary: "grandMA2" },
  { image: logo_QLC, alt: "QLC+", primary: "QLC+" },
  { image: logo_sketchup, alt: "SketchUp", primary: "SketchUp" },
  { image: logo_vectorworks, alt: "Vectorworks", primary: "Vectorworks" },
  { image: logo_capture, alt: "Capture", primary: "Capture" },
  { image: logo_resolume, alt: "Resolume Arena", primary: "Resolume Arena" },
  { image: logo_ableton, alt: "Ableton", primary: "Ableton" }
];

export const trustLogos: LogoItem[] = [
  { image: logo_tedx, alt: "TEDx Télécom SudParis", primary: "TEDx Télécom SudParis" },
  { image: logo_ensapvs, alt: "ENSA Paris Val-de-Seine", primary: "ENSAPVS" },
  { image: logo_technoparade, alt: "Techno Parade", primary: "Techno Parade" },
  { image: logo_tsp, alt: "Télécom SudParis", primary: "Télécom SudParis" },
  { image: logo_ipparis, alt: "Institut Polytechnique de Paris", primary: "Institut Polytechnique de Paris" },
  { image: logo_imtbs, alt: "IMT Business School", primary: "IMT Business School" },
  { image: logo_nava, alt: "Nava Collectif", primary: "Nava" }
];
