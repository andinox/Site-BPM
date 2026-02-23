import { useCallback, useState, type CSSProperties } from "react";
import { useDrag } from "@use-gesture/react";
import { Link } from "react-router-dom";
import type { EventSlide } from "@/features/home/types";
import "./EventCarousel.css";

type EventCarouselProps = {
  slides: EventSlide[];
  className?: string;
  moreLinkTo?: string;
  moreLinkLabel?: string;
};

const EventCarousel = ({
  slides,
  className,
  moreLinkTo,
  moreLinkLabel = "En voir plus"
}: EventCarouselProps) => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const canNavigate = slides.length > 1;

  const selectPreviousSlide = useCallback(() => {
    if (!canNavigate) {
      return;
    }

    setSelectedSlideIndex((previousIndex) => (previousIndex - 1 + slides.length) % slides.length);
  }, [canNavigate, slides.length]);

  const selectNextSlide = useCallback(() => {
    if (!canNavigate) {
      return;
    }

    setSelectedSlideIndex((previousIndex) => (previousIndex + 1) % slides.length);
  }, [canNavigate, slides.length]);

  const bindDrag = useDrag(
    ({ last, movement: [movementX], velocity: [velocityX], direction: [directionX] }) => {
      if (!last || !canNavigate) {
        return;
      }

      const shouldSwipe = Math.abs(movementX) > 70 || velocityX > 0.25;
      if (!shouldSwipe) {
        return;
      }

      if (directionX < 0) {
        selectNextSlide();
      } else {
        selectPreviousSlide();
      }
    },
    { axis: "x", filterTaps: true }
  );

  if (slides.length === 0) {
    return (
      <div className="simple-carousel simple-carousel--empty">
        Ajoute des images dans `src/features/home/data/eventSlides.ts`.
      </div>
    );
  }

  const carouselStyle = {
    "--simple-carousel-index": selectedSlideIndex
  } as CSSProperties;

  return (
    <section
      className={["simple-carousel", className].filter(Boolean).join(" ")}
      aria-label="Galerie d'événements"
    >
      <div className="simple-carousel__viewport" {...bindDrag()}>
        <div className="simple-carousel__container" style={carouselStyle}>
          {slides.map((slide, index) => (
            <figure className="simple-carousel__slide" key={`${slide.src}-${index}`}>
              <img src={slide.src} alt={slide.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>

      <div className="simple-carousel__footer">
        <div className="simple-carousel__controls">
          <button
            type="button"
            onClick={selectPreviousSlide}
            aria-label="Image précédente"
            disabled={!canNavigate}
          >
            Précédent
          </button>
          <button type="button" onClick={selectNextSlide} aria-label="Image suivante" disabled={!canNavigate}>
            Suivant
          </button>
          {moreLinkTo && (
            <Link className="simple-carousel__more-link" to={moreLinkTo}>
              {moreLinkLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventCarousel;
