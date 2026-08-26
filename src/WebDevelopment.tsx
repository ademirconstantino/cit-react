import { motion } from "framer-motion";
import { useLang } from "./LangContext";
import JsonReader from "./JSonReader";


import "../public/css/menu.css";
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";
import "./App.css";


function WebDevelopment() {
    const { langSelected } = useLang();


    const variants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    };


    return (
        <motion.section className="services" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.6 }}>
            <div id="content">
                <div className="container" id="web-development">
                    <div className="row">
                        <div className="col-md-3 sidebar">
                            <div className="section-menu">
                                <ul className="nav nav-list">
                                    <li className="nav-header">{JsonReader(langSelected, "services_pages.web_menu_title")}</li>
                                    <li className="active"><a href="#web-overview" className="first">{JsonReader(langSelected, "services_pages.web_menu_overview")}</a></li>
                                    <li><a href="#web-technology">{JsonReader(langSelected, "services_pages.web_menu_technology")}</a></li>
                                    <li><a href="#web-architecture">{JsonReader(langSelected, "services_pages.web_menu_architecture")}</a></li>
                                    <li><a href="#web-quality">{JsonReader(langSelected, "services_pages.web_menu_quality")}</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-md-9">
                            <h2 className="title-divider">
                                <span>{JsonReader(langSelected, "services_pages.web_title")}</span>
                                <small>{JsonReader(langSelected, "services_pages.web_subtitle")}</small>
                            </h2>


                            <div className="title-divider" id="web-overview"><h3><span>{JsonReader(langSelected, "services_pages.web_overview_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "services_pages.web_overview_body")}</p>


                            <div className="title-divider" id="web-technology"><h3><span>{JsonReader(langSelected, "services_pages.web_technology_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "services_pages.web_technology_body")}</p>


                            <div className="title-divider" id="web-architecture"><h3><span>{JsonReader(langSelected, "services_pages.web_architecture_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "services_pages.web_architecture_body")}</p>


                            <div className="title-divider" id="web-quality"><h3><span>{JsonReader(langSelected, "services_pages.web_quality_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "services_pages.web_quality_body")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default WebDevelopment;