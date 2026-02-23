import { useEffect, useState } from "react";

const FADE_DURATION_MS = 800;
const FALLBACK_START_TIMEOUT_MS = 3000;

const FadeOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let hasStarted = false;
    let hideOverlayTimeoutId: number | undefined;
    let startFallbackTimeoutId: number | undefined;
    let delayedStartTimeoutId: number | undefined;

    const startFadeOut = () => {
      if (hasStarted) {
        return;
      }

      hasStarted = true;
      setOpacity(0);

      hideOverlayTimeoutId = window.setTimeout(() => {
        setIsVisible(false);
      }, FADE_DURATION_MS);
    };

    const startFadeOutWithSmallDelay = () => {
      delayedStartTimeoutId = window.setTimeout(startFadeOut, 100);
    };

    if (document.readyState === "complete") {
      startFadeOutWithSmallDelay();
    } else {
      window.addEventListener("load", startFadeOutWithSmallDelay, { once: true });
      startFallbackTimeoutId = window.setTimeout(startFadeOut, FALLBACK_START_TIMEOUT_MS);
    }

    return () => {
      window.removeEventListener("load", startFadeOutWithSmallDelay);
      window.clearTimeout(delayedStartTimeoutId);
      window.clearTimeout(startFallbackTimeoutId);
      window.clearTimeout(hideOverlayTimeoutId);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#000",
        zIndex: 9999,
        pointerEvents: "none",
        opacity,
        transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`
      }}
    />
  );
};

export default FadeOverlay;
