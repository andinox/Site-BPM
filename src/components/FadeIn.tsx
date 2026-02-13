import React, { useEffect, useState } from "react";

const FadeIn: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        // Wait for a brief moment to ensure critical assets are rendering
        // Then start fading out
        const timeoutFn = () => {
            setOpacity(0);
            setTimeout(() => {
                setIsVisible(false);
            }, 800); // 800ms fade duration matches the transition below
        };

        // If the document is already loaded, start the timer
        // Otherwise wait for window load
        if (document.readyState === "complete") {
            setTimeout(timeoutFn, 100);
        } else {
            window.addEventListener("load", timeoutFn);
            // Fallback in case load event already fired or never fires
            setTimeout(timeoutFn, 3000);
        }

        return () => {
            window.removeEventListener("load", timeoutFn);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 9999,
                pointerEvents: "none",
                opacity: opacity,
                transition: "opacity 800ms ease-in-out"
            }}
        />
    );
};

export default FadeIn;
