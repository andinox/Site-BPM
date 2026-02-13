import React from "react";
import StaggeredMenu from "@/components/StaggeredMenu";
import { menuItems, socialItems } from "@/data/menu";
import "./EventView.css";

const EventView: React.FC = () => {
  return (
    <main className="event">
      <StaggeredMenu
        items={menuItems}
        socialItems={socialItems}
      />
      <section className="event__content">
        <h1>Event</h1>
        <p>Page en construction.</p>
      </section>
    </main>
  );
};

export default EventView;
