import { useState } from 'react'
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

    const { langSelected, setLangSelected } = useLang();

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
                    <li className="nav-header">In this section</li>
                    <li className="active">
                        <a href="#" className="first">
                        Our services				</a>
                    </li>
                    <li>
                        <a href="#fabrica">
                        Software Factory				</a>
                    </li>
                    <li>
                        <a href="#consultores">
                        Expert Consultants				</a>
                    </li>
                    <li>
                        <a href="#areas">
                        Areas of Consultancy				</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-md-9">
                <h2 className="title-divider">
                    <span>Our services</span>
                    <small>What can we offer to your company.</small>
                </h2>
                <div className="title-divider" id="stats">
                    <h3>
                    <span>Software Factory</span>
                    </h3>
                </div>
                <span>We develop software on demand for your business with the tecnologies that will atend your business and will attend you in a smart way. Our know how is what reflect in the final quality.</span>
                <div className="title-divider" id="stats">
                    <h3>
                    <span>Expert Consultants</span>
                    </h3>
                </div>
                <span>We have an expert team that does it. Our networking and experience allows us to attend your company in the critical fields, offering smart solutions.</span>
                <div className="title-divider" id="stats">
                    <h3>
                    <span>Areas of Consultancy</span>
                    </h3>
                    </div>
                    <span>We act in some areas in Information Technology, which includes Software Development, Process Analysis, Visual Identity, Security in IT, Websites, Infrastructure and Business Process Optimization.</span>
                </div>
            </div>
            </div>
    </div>
    </motion.div>
    );
}

export default Services;