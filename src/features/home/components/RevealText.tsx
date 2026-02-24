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
  const segments = useMemo(() => {
    const parsed: Array<
      | { type: "word"; value: string; startIndex: number }
      | { type: "space"; value: string }
      | { type: "line-break" }
    > = [];

    let currentWord = "";
    let wordStartIndex = -1;

    const flushWord = () => {
      if (currentWord.length === 0 || wordStartIndex < 0) {
        return;
      }

      parsed.push({ type: "word", value: currentWord, startIndex: wordStartIndex });
      currentWord = "";
      wordStartIndex = -1;
    };

    Array.from(text).forEach((character, index) => {
      if (character === "\n") {
        flushWord();
        parsed.push({ type: "line-break" });
        return;
      }

      if (character === " ") {
        flushWord();
        const lastSegment = parsed[parsed.length - 1];

        if (lastSegment && lastSegment.type === "space") {
          lastSegment.value += " ";
          return;
        }

        parsed.push({ type: "space", value: " " });
        return;
      }

      if (wordStartIndex < 0) {
        wordStartIndex = index;
      }

      currentWord += character;
    });

    flushWord();
    return parsed;
  }, [text]);

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
      {segments.map((segment, segmentIndex) => {
        if (segment.type === "line-break") {
          return <br key={`line-${segmentIndex}`} />;
        }

        if (segment.type === "space") {
          return (
            <span key={`space-${segmentIndex}`} className="char space">
              {segment.value}
            </span>
          );
        }

        return (
          <span key={`word-${segmentIndex}`} className="word">
            {Array.from(segment.value).map((character, characterIndex) => (
              <span
                key={`${segment.startIndex}-${characterIndex}`}
                className="char"
                style={
                  {
                    "--d": `${initialDelayInMilliseconds + (segment.startIndex + characterIndex) * revealStepInMilliseconds}ms`
                  } as CSSProperties
                }
              >
                {character}
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
};

export default RevealText;
