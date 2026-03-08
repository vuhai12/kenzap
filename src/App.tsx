import { Route, Routes } from "react-router-dom";
import ScrollHandler from "@components/ScrollHandler";
import { Suspense, lazy } from "react";
import LoadingSpinner from "@components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";

const HomePage = lazy(() => import("@pages/HomePage"));
const Pricing = lazy(() => import("@pages/Pricing"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Portfolio = lazy(() => import("@pages/Portfolio"));

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollHandler />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
