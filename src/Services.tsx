import JsonReader from './JSonReader';
import { useLang } from "./LangContext";
import { motion } from "framer-motion";

import "../public/css/menu.css"; 
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

import './App.css';

function Services() {

    const { langSelected } = useLang();

    const variants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    };

    return (
        <motion.div id="content" variants={variants} initial="initial" animate="animate"  exit="exit" transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}>
        <div id="content">
            <div className="container" id="about">
            <div className="row">
                <div className="col-md-3 sidebar">
                <div className="section-menu">
                    <ul className="nav nav-list">
                    <li className="nav-header">{JsonReader(langSelected, "services.this_section")}</li>
                    <li className="active">
                        <a href="#" className="first">{JsonReader(langSelected, "services.our_services")}</a>
                    </li>
                    <li>
                        <a href="#fabrica">{JsonReader(langSelected, "services.software_factory")}</a>
                    </li>
                    <li>
                        <a href="#consultores">{JsonReader(langSelected, "services.expert_consultants")}</a>
                    </li>
                    <li>
                        <a href="#areas">{JsonReader(langSelected, "services.areas_consultancy")}</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-md-9">
                <h2 className="title-divider">
                    <span>{JsonReader(langSelected, "services.header_text")}</span>
                    <small>{JsonReader(langSelected, "services.header_text_body")}</small>
                </h2>
                <div className="title-divider" id="stats">
                    <h3>
                    <span>{JsonReader(langSelected, "services.software_factory")}</span>
                    </h3>
                </div>
                <span>{JsonReader(langSelected, "services.software_factory_text")}</span>
                <div className="title-divider" id="stats">
                    <h3>
                    <span>{JsonReader(langSelected, "services.expert_consultants")}</span>
                    </h3>
                </div>
                <span>{JsonReader(langSelected, "services.expert_consultants_text")}</span>
                <div className="title-divider" id="stats">
                    <h3>
                    <span>{JsonReader(langSelected, "services.areas_consultancy")}</span>
                    </h3>
                    </div>
                    <span>{JsonReader(langSelected, "services.areas_consultancy_text")}</span>
                </div>
            </div>
            </div>
    </div>
    </motion.div>
    );
}

export default Services;