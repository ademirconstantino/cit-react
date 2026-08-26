import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import TopMenu from "./TopMenu";
import TopBar from "./TopBar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import MobileApps from "./MobileApps";
import ITConsulting from "./ITConsulting";
import WebDevelopment from "./WebDevelopment";
import CloudSolutions from "./CloudSolutions";
import OurTeam from "./OurTeam";

export default function App() {

  const location = useLocation();
  return (
    <>
      <TopMenu />
      <TopBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mobile-apps" element={<MobileApps />} />
          <Route path="/it-consulting" element={<ITConsulting />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/cloud-solutions" element={<CloudSolutions />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      </>
  );
}