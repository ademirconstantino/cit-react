import { motion } from "framer-motion";
import { useLang } from "./LangContext";

import JsonReader from './JSonReader';

import "../public/css/menu.css";
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

import './App.css';


function MobileApps() {
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
                <div className="container" id="mobile-apps">
                    <div className="row">
                        {/* Sidebar */}
                        <div className="col-md-3 sidebar">
                            <div className="section-menu">
                                <ul className="nav nav-list">
                                    <li className="nav-header">
                                        {JsonReader(langSelected, "services_pages.mobile_menu_title")}
                                    </li>
                                    <li className="active">
                                        <a href="#overview" className="first">
                                            {JsonReader(langSelected, "services_pages.mobile_menu_overview")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#technology">
                                            {JsonReader(langSelected, "services_pages.mobile_menu_technology")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#process">
                                            {JsonReader(langSelected, "services_pages.mobile_menu_process")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#delivery">
                                            {JsonReader(langSelected, "services_pages.mobile_menu_delivery")}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="col-md-9">
                            <h2 className="title-divider">
                                <span>
                                    {JsonReader(langSelected, "services_pages.mobile_title")}
                                </span>
                                <small>
                                    {JsonReader(langSelected, "services_pages.mobile_subtitle")}
                                </small>
                            </h2>

                            {/* Overview */}
                            <div className="title-divider" id="overview">
                                <h3>
                                    <span>
                                        {JsonReader(langSelected, "services_pages.mobile_overview_title")}
                                    </span>
                                </h3>
                            </div>
                            <p style={{ textAlign: "justify" }}>
                                {JsonReader(langSelected, "services_pages.mobile_overview_body")}
                            </p>

                            {/* Technology */}
                            <div className="title-divider" id="technology">
                                <h3>
                                    <span>
                                        {JsonReader(langSelected, "services_pages.mobile_technology_title")}
                                    </span>
                                </h3>
                            </div>
                            <p style={{ textAlign: "justify" }}>
                                {JsonReader(langSelected, "services_pages.mobile_technology_body")}
                            </p>

                            {/* Process */}
                            <div className="title-divider" id="process">
                                <h3>
                                    <span>
                                        {JsonReader(langSelected, "services_pages.mobile_process_title")}
                                    </span>
                                </h3>
                            </div>
                            <p style={{ textAlign: "justify" }}>
                                {JsonReader(langSelected, "services_pages.mobile_process_body")}
                            </p>

                            {/* Delivery */}
                            <div className="title-divider" id="delivery">
                                <h3>
                                    <span>
                                        {JsonReader(langSelected, "services_pages.mobile_delivery_title")}
                                    </span>
                                </h3>
                            </div>
                            <p style={{ textAlign: "justify" }}>
                                {JsonReader(langSelected, "services_pages.mobile_delivery_body")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default MobileApps;