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
          <Route path="/cit-react/about" element={<About />} />
          <Route path="/cit-react/services" element={<Services />} />
          <Route path="/cit-react/our-team" element={<OurTeam />} />
          <Route path="/cit-react/contact" element={<Contact />} />
          <Route path="/cit-react/mobile-apps" element={<MobileApps />} />
          <Route path="/cit-react/it-consulting" element={<ITConsulting />} />
          <Route path="/cit-react/web-development" element={<WebDevelopment />} />
          <Route path="/cit-react/cloud-solutions" element={<CloudSolutions />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      </>
  );
}