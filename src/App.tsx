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
import Mentoring from "./Mentoring";
import Ebook from "./Ebook";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import ChatWidget from "./ChatWidget";
import EbookPromo from "./EbookPromo";

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
          <Route path="/mentoring" element={<Mentoring />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mobile-apps" element={<MobileApps />} />
          <Route path="/it-consulting" element={<ITConsulting />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      {/* Outside the animated page: position:fixed breaks inside framer-motion's transformed wrapper */}
      {location.pathname === "/" && <ChatWidget />}
      {location.pathname === "/" && <EbookPromo />}
      </>
  );
}