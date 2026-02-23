import { useMemo } from "react";
import type { LogoItem } from "@/features/home/types";
import "./LogoMarquee.css";

type LogoMarqueeProps = {
  items: LogoItem[];
  animationDurationInSeconds?: number;
  hideTitle?: boolean;
  fallbackImage?: string | null;
};

const LogoMarquee = ({
  items,
  animationDurationInSeconds = 40,
  hideTitle = false,
  fallbackImage = null
}: LogoMarqueeProps) => {
  const loopItems = useMemo(() => [...items, ...items], [items]);
  const trackStyle = useMemo(
    () => ({ animationDuration: `${animationDurationInSeconds}s` }),
    [animationDurationInSeconds]
  );

  return (
    <div className={`logo-loop ${hideTitle ? "is-simple" : ""}`}>
      <div className="logo-loop__track noselect" style={trackStyle}>
        {loopItems.map((item, index) => {
          const imageSource = item.image || fallbackImage;
          const itemClasses = [
            "logo-item",
            imageSource ? "logo-item--image" : "",
            !item.image && fallbackImage ? "logo-item--placeholder" : ""
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div key={`${item.alt}-${index}`} className={itemClasses} title={item.primary || ""}>
              {imageSource ? (
                <>
                  <img src={imageSource} alt={item.alt || item.primary || ""} draggable={false} />
                  {!hideTitle && item.primary && <div className="logo-item__primary">{item.primary}</div>}
                </>
              ) : (
                <div className="logo-item__primary">{item.primary}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoMarquee;
