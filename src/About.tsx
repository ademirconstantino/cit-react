import JsonReader from './JSonReader';
import { useLang } from "./LangContext";
import { motion } from "framer-motion";
import "../public/css/menu.css"; 
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

import './App.css';

function About() {

    const { langSelected } = useLang();

    const variants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    };

      return (
    <motion.div
            id="content"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
        <div id="content">
            <div className="container" id="about">
            <div className="row">
                <div className="col-md-3 sidebar">
                <div className="section-menu">
                    <ul className="nav nav-list">
                    <li className="nav-header">{JsonReader(langSelected, "about.this_section")}</li>
                    <li className="active">
                        <a href="#" className="first">{JsonReader(langSelected, "about.about_us")}</a>
                    </li>
                    <li>
                        <a href="#mission">{JsonReader(langSelected, "about.mission")}</a>
                    </li>
                    <li>
                        <a href="#businessinsight">{JsonReader(langSelected, "about.business_insight")}</a>
                    </li>
                    <li>
                        <a href="#ourvalues">{JsonReader(langSelected, "about.our_values")}</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-md-9">
                <h2 className="title-divider">
                    <span>{JsonReader(langSelected, "about.text_about_cit")}</span>
                    <small>{JsonReader(langSelected, "about.text_about_cit_body")}</small>
                </h2>

                <h4>{JsonReader(langSelected, "about.experience")}</h4>
                <p style={{ textAlign: "justify"}}>{JsonReader(langSelected, "about.company_details")}</p>  
                <div className="title-divider" id="stats">
                    <h3><span>{JsonReader(langSelected, "about.mission")}</span></h3>
                </div>
                    <span>{JsonReader(langSelected, "about.mission_text")}</span>
                
                <div className="title-divider" id="stats">
                    <h3>
                    <span>{JsonReader(langSelected, "about.business_insight")}</span>
                    </h3>
                </div>
                <span>{JsonReader(langSelected, "about.business_insight_text")}</span>
                
                <div className="title-divider" id="stats">
                    <h3>
                    <span>{JsonReader(langSelected, "about.our_values")}</span>
                    </h3>
                </div>
                <span>{JsonReader(langSelected, "about.our_values_text")}</span>
                </div>
            </div>
            </div>
        </div>
        </motion.div>
      )
}

export default About;