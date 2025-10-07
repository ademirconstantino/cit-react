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

    const { langSelected } = useLang();

    const variants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    };

    return (
        
    <motion.div id="content" variants={variants} initial="initial" animate="animate"  exit="exit" transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}>
        <div id="content">
            <div className="container">
            <div className="row">
                <div className="col-md-3 sidebar">
                <div className="section-menu">
                <ul className="nav nav-list">
                        <li className="nav-header">{JsonReader(langSelected, "contact.header_text")}</li>
                        <li className="active">
                            <a href="#" className="first">{JsonReader(langSelected, "contact.header_text_body")}</a>
                        </li>
                        </ul>
                </div>
                </div>
                <div className="col-md-9">
                <h2 className="title-divider">
                    <span>{JsonReader(langSelected, "contact.header_text")}</span>
                    <small>{JsonReader(langSelected, "contact.header_text_body")}</small>
                </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <form id="contact-form" action="http://constantinoit.com/contact2.php?lang=en" method="POST">
                        <div className="form-group">
                        <label className="sr-only">{JsonReader(langSelected, "contact.name")}</label>
                        <input type="text" name="nome" className="form-control" id="nome" placeholder={JsonReader(langSelected, 'contact.name')}/>
                        </div>
                        <div className="form-group">
                        <label className="sr-only">{JsonReader(langSelected, "contact.email")}</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder={JsonReader(langSelected, 'contact.email')}/>
                        </div>
                        <div className="form-group">
                        <label className="sr-only">{JsonReader(langSelected, "contact.message")}</label>
                        <textarea className="form-control" name="mensagem" id="mensagem" placeholder={JsonReader(langSelected, 'contact.message')}></textarea>
                        </div>
                        <input type="submit" className="btn btn-primary" value={JsonReader(langSelected, 'contact.send_message')}/>
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