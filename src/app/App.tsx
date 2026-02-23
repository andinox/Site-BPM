import AppRouter from "@/app/AppRouter";
import AppErrorBoundary from "@/shared/components/feedback/AppErrorBoundary";
import FadeOverlay from "@/shared/components/feedback/FadeOverlay";

const App = () => {
  return (
    <AppErrorBoundary>
      <FadeOverlay />
      <AppRouter />
    </AppErrorBoundary>
  );
};

export default App;
