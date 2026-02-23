import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import "./RevealText.css";

type RevealTextProps = {
  text: string;
  initialDelayInMilliseconds?: number;
  revealStepInMilliseconds?: number;
};

const RevealText = ({
  text,
  initialDelayInMilliseconds = 100,
  revealStepInMilliseconds = 60
}: RevealTextProps) => {
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const characters = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

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
      {characters.map((character, index) => {
        if (character === "\n") {
          return <br key={index} />;
        }

        if (character === " ") {
          return (
            <span key={index} className="char space">
              &nbsp;
            </span>
          );
        }

        return (
          <span
            key={index}
            className="char"
            style={
              { "--d": `${initialDelayInMilliseconds + index * revealStepInMilliseconds}ms` } as CSSProperties
            }
          >
            {character}
          </span>
        );
      })}
    </span>
  );
};

export default RevealText;
