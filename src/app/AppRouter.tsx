import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "@/features/home/HomePage";

const TeamPage = lazy(() => import("@/features/team/TeamPage"));
const EventsPage = lazy(() => import("@/features/events/EventsPage"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense
        fallback={<div style={{ position: "fixed", inset: 0, backgroundColor: "#000", zIndex: 99999 }} />}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/equipe" element={<TeamPage />} />
          <Route path="/event" element={<EventsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
