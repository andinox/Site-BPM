import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomeView from "@/pages/HomeView";
import FadeIn from "@/components/FadeIn";

const TeamView = React.lazy(() => import("@/pages/TeamView"));
const EventView = React.lazy(() => import("@/pages/EventView"));

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <FadeIn />
      <Suspense fallback={<div style={{ position: "fixed", inset: 0, backgroundColor: "#000", zIndex: 99999 }} />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/equipe" element={<TeamView />} />
          <Route path="/event" element={<EventView />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
