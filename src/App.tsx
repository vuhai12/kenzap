import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
