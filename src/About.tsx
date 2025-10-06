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

function About() {

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
                        About us			</a>
                    </li>
                    <li>
                        <a href="#mission">
                        Mission			</a>
                    </li>
                    <li>
                        <a href="#businessinsight">
                        Business Insight			</a>
                    </li>
                    <li>
                        <a href="#ourvalues">
                        Our Values			</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-md-9">
                <h2 className="title-divider">
                    <span>About Constantino IT Consulting</span>
                    <small>Primarily a high-tech company.</small>
                </h2>

                <h4>
                    20+ years in IT experience 	  </h4>
                <p align="justify">There are two decades of know-how. We work with Information Technology for 20 years. Over all these years we followed the computing innovation quite nearby, and today we have security in offering good quality services for our clients.</p>  
                <div className="title-divider" id="stats">
                    <h3>
                    <span>Mission</span>
                    </h3>
                </div>
                    <span>Create innovative solutions and implement IT software solutions which will attend the client expectancies.</span>
                
                <div className="title-divider" id="stats">
                    <h3>
                    <span>Business Insight</span>
                    </h3>
                </div>
                <span>To be a refference IT company at the international space, recognized by its quality.</span>
                
                <div className="title-divider" id="stats">
                    <h3>
                    <span>Our Values</span>
                    </h3>
                </div>
                We can say that respect, dedication, seriously work and maturity are constant values in our organization. 	</div>
            </div>
            </div>
        </div>
        </motion.div>
      )
}

export default About;