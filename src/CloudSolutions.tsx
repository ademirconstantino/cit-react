import { motion } from "framer-motion";
import { useLang } from "./LangContext";
import JsonReader from "./JSonReader";


import "../public/css/menu.css";
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";
import "./App.css";


function CloudSolutions() {
    const { langSelected } = useLang();


    const variants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    };


    return (
        <motion.section className="services" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.6 }}>
            <div id="content">
                <div className="container" id="cloud-solutions">
                    <div className="row">
                        <div className="col-md-3 sidebar">
                            <div className="section-menu">
                                <ul className="nav nav-list">
                                    <li className="nav-header">{JsonReader(langSelected, "services_pages.cloud_menu_title")}</li>
                                    <li className="active"><a href="#cloud-overview" className="first">{JsonReader(langSelected, "services_pages.cloud_menu_overview")}</a></li>
                                    <li><a href="#cloud-platforms">{JsonReader(langSelected, "services_pages.cloud_menu_platforms")}</a></li>
                                    <li><a href="#cloud-devops">{JsonReader(langSelected, "services_pages.cloud_menu_devops")}</a></li>
                                    <li><a href="#cloud-security">{JsonReader(langSelected, "services_pages.cloud_menu_security")}</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-md-9">
                            <h2 className="title-divider">
                                <span>{JsonReader(langSelected, "services_pages.cloud_title")}</span>
                                <small>{JsonReader(langSelected, "services_pages.cloud_subtitle")}</small>
                            </h2>


                            <div className="title-divider" id="cloud-overview"><h3><span>{JsonReader(langSelected, "services_pages.cloud_overview_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "services_pages.cloud_overview_body")}</p>


                            <div className="title-divider" id="cloud-platforms"><h3><span>{JsonReader(langSelected, "services_pages.cloud_platforms_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "services_pages.cloud_platforms_body")}</p>


                            <div className="title-divider" id="cloud-devops"><h3><span>{JsonReader(langSelected, "services_pages.cloud_devops_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "services_pages.cloud_devops_body")}</p>


                            <div className="title-divider" id="cloud-security"><h3><span>{JsonReader(langSelected, "services_pages.cloud_security_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "services_pages.cloud_security_body")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default CloudSolutions;