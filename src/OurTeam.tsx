import { motion } from "framer-motion";
import { useLang } from "./LangContext";
import JsonReader from "./JSonReader";

import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";
import "./App.css";

function OurTeam() {
  const { langSelected } = useLang();

  const variants = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };

  return (
    <motion.section
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      <div id="content">
        <div className="container" id="our-team">
          <h2 className="title-divider">
            <span>{JsonReader(langSelected, "team.title")}</span>
            <small>{JsonReader(langSelected, "team.subtitle")}</small>
          </h2>

          <p style={{ textAlign: "justify" }}>
            {JsonReader(langSelected, "team.intro")}
          </p>

          <div className="row">
            <div className="col-md-4">
              <h4>{JsonReader(langSelected, "team.values_title")}</h4>
              <p>{JsonReader(langSelected, "team.values_body")}</p>
            </div>

            <div className="col-md-4">
              <h4>{JsonReader(langSelected, "team.expertise_title")}</h4>
              <p>{JsonReader(langSelected, "team.expertise_body")}</p>
            </div>

            <div className="col-md-4">
              <h4>{JsonReader(langSelected, "team.culture_title")}</h4>
              <p>{JsonReader(langSelected, "team.culture_body")}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default OurTeam;