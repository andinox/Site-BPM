import type { EventSlide } from "@/features/home/types";

type EventAssetMap = Record<string, string>;

const eventAssetModules = import.meta.glob("../../../assets/events/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default"
}) as EventAssetMap;

const buildAltFromPath = (path: string) => {
  const fileName = path.split("/").pop() ?? "Photo";
  const fileNameWithoutExtension = fileName.replace(/\.[^.]+$/, "");
  return `Soiree ${fileNameWithoutExtension}`;
};

export const eventSlides: EventSlide[] = Object.entries(eventAssetModules)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
  .map(([assetPath, src]) => ({
    src,
    alt: buildAltFromPath(assetPath)
  }));
