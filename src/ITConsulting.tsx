import { motion } from "framer-motion";
import { useLang } from "./LangContext";
import JsonReader from "./JSonReader";

import "../public/css/menu.css";
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";
import "./App.css";

function ITConsulting() {
    const { langSelected } = useLang();

    const variants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    };

    return (
        <motion.section className="services" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.6 }}>
            <div id="content">
                <div className="container" id="it-consulting">
                    <div className="row">
                        <div className="col-md-3 sidebar">
                            <div className="section-menu">
                                <ul className="nav nav-list">
                                    <li className="nav-header">{JsonReader(langSelected, "services_pages.consulting_menu_title")}</li>
                                    <li className="active"><a href="#consulting-overview" className="first">{JsonReader(langSelected, "services_pages.consulting_menu_overview")}</a></li>
                                    <li><a href="#consulting-strategy">{JsonReader(langSelected, "services_pages.consulting_menu_strategy")}</a></li>
                                    <li><a href="#consulting-architecture">{JsonReader(langSelected, "services_pages.consulting_menu_architecture")}</a></li>
                                    <li><a href="#consulting-transformation">{JsonReader(langSelected, "services_pages.consulting_menu_transformation")}</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-md-9">
                            <h2 className="title-divider">
                                <span>{JsonReader(langSelected, "services_pages.consulting_title")}</span>
                                <small>{JsonReader(langSelected, "services_pages.consulting_subtitle")}</small>
                            </h2>


                            <div className="title-divider" id="consulting-overview"><h3><span>{JsonReader(langSelected, "services_pages.consulting_overview_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "services_pages.consulting_overview_body")}</p>


                            <div className="title-divider" id="consulting-strategy"><h3><span>{JsonReader(langSelected, "services_pages.consulting_strategy_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "services_pages.consulting_strategy_body")}</p>


                            <div className="title-divider" id="consulting-architecture"><h3><span>{JsonReader(langSelected, "services_pages.consulting_architecture_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "services_pages.consulting_architecture_body")}</p>


                            <div className="title-divider" id="consulting-transformation"><h3><span>{JsonReader(langSelected, "services_pages.consulting_transformation_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "services_pages.consulting_transformation_body")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default ITConsulting;