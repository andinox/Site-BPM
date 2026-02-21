export type EventImage = {
  src: string;
  alt: string;
};

const soireeImageModules = import.meta.glob("../assets/events/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default"
}) as Record<string, string>;

const toAltFromPath = (path: string) => {
  const fileName = path.split("/").pop() ?? "Photo";
  const noExt = fileName.replace(/\.[^.]+$/, "");
  return `Soiree ${noExt}`;
};

export const eventImages: EventImage[] = Object.entries(soireeImageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src,
    alt: toAltFromPath(path)
  }));
