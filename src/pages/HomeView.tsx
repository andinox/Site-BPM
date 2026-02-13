import React, { useEffect, useMemo, useState } from "react";
import StaggeredMenu from "@/components/StaggeredMenu";
import MagicBento from "@/components/MagicBento";
import DomeGallery from "@/components/DomeGallery";
import LogoMarquee from "@/components/LogoMarquee";
import RevealText from "@/components/RevealText";
import EventGallery from "@/components/EventGallery";
import { menuItems, socialItems } from "@/data/menu";
import { equipmentCards } from "@/data/equipment";
import { softwareLogos, trustLogos } from "@/data/logos";
import { eventImages } from "@/data/events";
import lightBackground from "@/assets/light.png";
import mxBackground from "@/assets/mx.png";
import logoUrl from "@/assets/logo.png";
import logoSideRight from "@/assets/egeg.jpg";
import logoSideLeft from "@/assets/egeggg.jpg";
import bentoSideRight from "@/assets/ec1.jpg";
import bentoSideLeft from "@/assets/ec2.jpg";
import "./HomeView.css";

const HomeView: React.FC = () => {
  const heroVariant = useMemo<"light" | "mx">(() => (Math.random() < 0.5 ? "mx" : "light"), []);
  const heroSide = heroVariant === "mx" ? "left" : "right";
  const oppositeHeroSide = heroSide === "left" ? "right" : "left";
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const x32Card = document.querySelector<HTMLElement>('.magic-bento-card[data-card-id="behringer-x32"]');
    if (!x32Card) return;

  }, [heroSide, oppositeHeroSide]);

  const handleTilt = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget as HTMLElement | null;
    if (!target) return;
    const bounds = target.getBoundingClientRect();
    const x = (event.clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2);
    const y = (event.clientY - (bounds.top + bounds.height / 2)) / (bounds.height / 2);
    setTilt({
      x: Math.max(-8, Math.min(8, -y * 10)),
      y: Math.max(-8, Math.min(8, x * 10))
    });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <main className="home" data-hero-side={heroSide} data-hero-variant={heroVariant}>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen={true}
        colors={["#000000", "#ffffff"]}
        logoUrl={logoUrl}
        accentColor="#000000"
        isFixed
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />

      <section className="hero">
        <img className="hero__backdrop" src={heroVariant === "mx" ? mxBackground : lightBackground} alt="" aria-hidden="true" />
        <div className="hero__content">
          <div className="hero__title">
            <h1>
              <span className="hero__big">Club</span>
              <span className="hero__sub">light / sono</span>
            </h1>
          </div>
          <div className="hero__logo">
            <div className="hero__tilt" onMouseMove={handleTilt} onMouseLeave={resetTilt}>
              <img src={logoUrl} alt="BPM Club logo" style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }} />
            </div>
          </div>
          <div className="scroll-cue">
            <span>Scroll Down</span>
            <span className="scroll-cue__arrow" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bento-section-block">
        <img className="bento-side bento-side--right" src={bentoSideRight} alt="" aria-hidden="true" />
        <img className="bento-side bento-side--left" src={bentoSideLeft} alt="" aria-hidden="true" />
        <div className="bento-section-inner">
          <h2 className="section-title bento-section-title">
            <RevealText text="Notre Équipement" step={8} />
          </h2>
          <MagicBento
            cards={equipmentCards}
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="255, 255, 255"
            disableAnimations={false}
          />
        </div>
      </section>

      <section className="dome-section">
        <h2 className="section-title dome-section__title">NOS ÉVÉNEMENTS</h2>
        <div className="dome-frame">
          <DomeGallery
            images={eventImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            openedImageWidth="420px"
            openedImageHeight="620px"
            grayscale={false}
          />
        </div>
      </section>

      <section className="logo-section">
        <img className="section-side section-side--right" src={logoSideRight} alt="" aria-hidden="true" />
        <img className="section-side section-side--left" src={logoSideLeft} alt="" aria-hidden="true" />
        <div className="logo-section__group">
          <h2 className="section-title">
            <RevealText text="Logiciels que nous maîtrisons" step={8} />
          </h2>
          <LogoMarquee items={softwareLogos} speed={42} />
        </div>
        <div className="logo-section__group">
          <h2 className="section-title">
            <RevealText text="Ils nous font confiance" step={8} />
          </h2>
          <LogoMarquee items={trustLogos} speed={48} simple />
        </div>
      </section>

      <section className="contact">
        <div>
          <p className="contact__title">Vous cherchez une prestation ?</p>
          <a className="contact__link" href="mailto:contact@bpmclubsono.com">
            Contactez-nous à l'adresse contact@bpmclubsono.com
          </a>
          <p className="contact__meta">développé par Nicolas & gentiment hebergé par Minet</p>
        </div>
      </section>
    </main>
  );
};

export default HomeView;
