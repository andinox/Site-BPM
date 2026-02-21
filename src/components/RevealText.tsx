import React, { useEffect, useMemo, useRef, useState } from "react";
import "./RevealText.css";

type RevealTextProps = {
  text: string;
  delayStart?: number;
  step?: number;
};

const RevealText: React.FC<RevealTextProps> = ({ text, delayStart = 100, step = 60 }) => {
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const characters = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    if (!rootRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={rootRef} className={`reveal ${isVisible ? "is-visible" : ""}`}>
      {characters.map((ch, index) => {
        if (ch === "\n") return <br key={index} />;
        if (ch === " ") {
          return (
            <span key={index} className="char space">
              &nbsp;
            </span>
          );
        }
        return (
          <span key={index} className="char" style={{ "--d": `${delayStart + index * step}ms` } as React.CSSProperties}>
            {ch}
          </span>
        );
      })}
    </span>
  );
};

export default RevealText;
