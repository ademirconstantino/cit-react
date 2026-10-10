import { motion } from "framer-motion";
import { useLang } from "./LangContext";
import JsonReader from "./JSonReader";
import { ArchitectureIcon, FrontendIcon, BackendIcon, CloudIcon, AIIcon, CareerIcon } from "./TechIcons";

import "../public/css/menu.css";
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

const TOPICS = [
    { key: "architecture", Icon: ArchitectureIcon, color: "#0969da" },
    { key: "frontend", Icon: FrontendIcon, color: "#8250df" },
    { key: "backend", Icon: BackendIcon, color: "#e8590c" },
    { key: "cloud", Icon: CloudIcon, color: "#1a7f37" },
    { key: "ai", Icon: AIIcon, color: "#bf3989" },
    { key: "career", Icon: CareerIcon, color: "#9a6700" },
];

const CALENDLY_URL = "https://calendly.com/ademirconstantino/30min";

const STEPS = ["assessment", "plan", "practice"];

function Mentoring() {
    const { langSelected } = useLang();


    const variants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    };


    return (
        <motion.section className="services" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.6 }}>
            <div id="content">
                <div className="container" id="mentoring">
                    <div className="row">
                        <div className="col-md-3 sidebar">
                            <div className="section-menu">
                                <ul className="nav nav-list">
                                    <li className="nav-header">{JsonReader(langSelected, "mentoring.menu_title")}</li>
                                    <li className="active"><a href="#mentoring-overview" className="first">{JsonReader(langSelected, "mentoring.menu_overview")}</a></li>
                                    <li><a href="#mentoring-topics">{JsonReader(langSelected, "mentoring.menu_topics")}</a></li>
                                    <li><a href="#mentoring-format">{JsonReader(langSelected, "mentoring.menu_format")}</a></li>
                                    <li><a href="#mentoring-audience">{JsonReader(langSelected, "mentoring.menu_audience")}</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-md-9">
                            <h2 className="title-divider">
                                <span>{JsonReader(langSelected, "mentoring.title")}</span>
                                <small>{JsonReader(langSelected, "mentoring.subtitle")}</small>
                            </h2>


                            <div className="title-divider" id="mentoring-overview"><h3><span>{JsonReader(langSelected, "mentoring.overview_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "mentoring.overview_body")}</p>


                            <div className="title-divider" id="mentoring-topics"><h3><span>{JsonReader(langSelected, "mentoring.topics_title")}</span></h3></div>
                            <div className="mentoring-cards">
                                {TOPICS.map((topic) => (
                                    <div className="home-hero-card mentoring-card" key={topic.key}>
                                        <div className="home-hero-icon" style={{ color: topic.color }}>
                                            <topic.Icon />
                                        </div>
                                        <h3>{JsonReader(langSelected, `mentoring.topic_${topic.key}_title`)}</h3>
                                        <p>{JsonReader(langSelected, `mentoring.topic_${topic.key}_body`)}</p>
                                    </div>
                                ))}
                            </div>


                            <div className="title-divider" id="mentoring-format"><h3><span>{JsonReader(langSelected, "mentoring.format_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "mentoring.format_body")}</p>
                            <p className="mentoring-languages">
                                <i className="fa fa-globe" aria-hidden="true"></i>
                                {JsonReader(langSelected, "mentoring.languages_note")}
                            </p>
                            <ol className="mentoring-steps">
                                {STEPS.map((step) => (
                                    <li key={step}>
                                        <h4>{JsonReader(langSelected, `mentoring.step_${step}_title`)}</h4>
                                        <p>{JsonReader(langSelected, `mentoring.step_${step}_body`)}</p>
                                    </li>
                                ))}
                            </ol>


                            <div className="title-divider" id="mentoring-audience"><h3><span>{JsonReader(langSelected, "mentoring.audience_title")}</span></h3></div>
                            <p style={{ textAlign: "justify" }}>{JsonReader(langSelected, "mentoring.audience_body")}</p>

                            <div className="mentoring-cta">
                                <p>{JsonReader(langSelected, "mentoring.cta_text")}</p>
                                <a href={CALENDLY_URL} className="home-hero-link" target="_blank" rel="noopener noreferrer">
                                    <span className="home-hero-arrow" aria-hidden="true">
                                        <i className="fa fa-angle-right"></i>
                                    </span>
                                    {JsonReader(langSelected, "mentoring.cta_button")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Mentoring;
