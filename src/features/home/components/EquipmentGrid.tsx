import type { CSSProperties } from "react";
import type { EquipmentCard } from "@/features/home/types";
import "./EquipmentGrid.css";

type EquipmentGridProps = {
  cards: EquipmentCard[];
  className?: string;
};

const toLengthValue = (value: number | string | undefined) => {
  if (value === undefined) {
    return undefined;
  }

  return typeof value === "number" ? `${value}px` : value;
};

const EquipmentGrid = ({ cards, className }: EquipmentGridProps) => {
  return (
    <div className={["magic-bento-grid", className].filter(Boolean).join(" ")}>
      {cards.map((card) => {
        const cardStyle = {
          backgroundColor: card.color ?? "#000000",
          "--media-height": card.imageHeight ?? "clamp(100px, 18vh, 170px)",
          "--card-offset-y": toLengthValue(card.cardOffsetY)
        } as CSSProperties;

        return (
          <article
            key={card.id}
            data-card-id={card.id}
            className={`magic-bento-card ${card.large ? "is-large" : ""}`.trim()}
            style={cardStyle}
          >
            <header className="magic-bento-card__header">
              <p className="magic-bento-card__label">{card.label}</p>
            </header>

            <div className="magic-bento-card__content">
              <h3 className="magic-bento-card__title">{card.title}</h3>
            </div>

            <div className="magic-bento-card__media">
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                draggable={false}
                style={
                  card.imageOffsetY !== undefined
                    ? {
                        transform: `translateY(${toLengthValue(card.imageOffsetY)})`
                      }
                    : undefined
                }
              />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default EquipmentGrid;
