import { useState } from 'react'
import JsonReader from './JSonReader';
import { motion } from "framer-motion";
import { useLang } from "./LangContext";

import "../public/css/menu.css"; 
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

import './App.css';

function Contact() {

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
            <div className="container">
            <div className="row">
                <div className="col-md-3 sidebar">
                <div className="section-menu">
                <ul className="nav nav-list">
                        <li className="nav-header">Contact us</li>
                        <li className="active">
                            <a href="#" className="first">
                            Keep in touch with us				</a>
                        </li>
                        </ul>
                </div>
                </div>
                <div className="col-md-9">
                <h2 className="title-divider">
                    <span>Contact us</span>
                    <small>Keep in touch with us</small>
                </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <form id="contact-form" action="contact2.php?lang=en" method="POST">
                        <div className="form-group">
                        <label className="sr-only" for="nome">Name</label>
                        <input type="text" name="nome" className="form-control" id="nome" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                        <label className="sr-only" for="email">E-mail</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="E-mail"/>
                        </div>
                        <div className="form-group">
                        <label className="sr-only" for="mensagem">Message</label>
                        <textarea rows="12" className="form-control" name="mensagem" id="mensagem" placeholder="Message"></textarea>
                        </div>
                        <input type="submit" className="btn btn-primary" value="Send message"/>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </motion.div>
    );
}

export default Contact;