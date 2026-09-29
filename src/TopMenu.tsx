import JsonReader from './JSonReader';
import { useLang } from "./LangContext";

import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";

function TopMenu() {
  const { langSelected } = useLang();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on every navigation (also re-clicks of the same page)
  useEffect(() => {
    setMenuOpen(false);
  }, [location.key]);

  function linkClass(path: string) {
    return location.pathname === path ? "active" : undefined;
  }

  function toggleMenu(e: MouseEvent) {
    e.preventDefault();
    setMenuOpen((open) => !open);
  }

  return (
    <div className="main">
      <div className={menuOpen ? "topnav responsive" : "topnav"} id="myTopnav">
        <a
          href="#"
          className="icon"
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <i className="fa fa-bars"></i>
        </a>
      <Link to="/" className={linkClass("/")}>
        <i className="fa fa-home"></i>&nbsp;&nbsp;
        {JsonReader(langSelected, "menu.home")}
      </Link>

      <Link to="/about" className={linkClass("/about")}>
        {JsonReader(langSelected, "menu.about_us")}
      </Link>

      <Link to="/services" className={linkClass("/services")}>
        {JsonReader(langSelected, "menu.services")}
      </Link>

      <Link to="/our-team" className={linkClass("/our-team")}>
        {JsonReader(langSelected, "menu.our_team")}
      </Link>

      <Link to="/contact" className={linkClass("/contact")}>
        {JsonReader(langSelected, "menu.contact")}
      </Link>
      </div>
    </div>
  );
}

export default TopMenu;