import React, { useMemo } from "react";
import "./LogoMarquee.css";

type LogoItem = {
  image?: string;
  alt?: string;
  primary?: string;
};

type LogoMarqueeProps = {
  items: LogoItem[];
  speed?: number;
  simple?: boolean;
  fallbackImage?: string | null;
};

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ items, speed = 40, simple = false, fallbackImage = null }) => {
  const doubled = useMemo(() => [...items, ...items], [items]);
  const trackStyle = useMemo(() => ({ animationDuration: `${speed}s` }), [speed]);

  return (
    <div className={`logo-loop ${simple ? "is-simple" : ""}`}>
      <div className="logo-loop__track noselect" style={trackStyle}>
        {doubled.map((item, index) => (
          <div
            key={index}
            className={`logo-item ${item.image || fallbackImage ? "logo-item--image" : ""} ${!item.image && fallbackImage ? "logo-item--placeholder" : ""}`}
            title={item.primary || ""}
          >
            {item.image || fallbackImage ? (
              <>
                <img src={item.image || fallbackImage || ""} alt={item.alt || item.primary || ""} draggable={false} />
                {!simple && item.primary && <div className="logo-item__primary">{item.primary}</div>}
              </>
            ) : (
              <div className="logo-item__primary">{item.primary}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
