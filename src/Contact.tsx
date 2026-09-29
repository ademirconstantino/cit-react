import JsonReader from './JSonReader';
import { motion } from "framer-motion";
import { useLang } from "./LangContext";
import { EMAIL, PHONES, telHref } from "./contactInfo";

import "../public/css/menu.css"; 
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

function Contact() {

    const { langSelected } = useLang();

    const variants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    };

    return (
        
    <motion.div id="content" variants={variants} initial="initial" animate="animate"  exit="exit" transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}>
        <div className="page-content">
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
                <div className="row">
                    <div className="col-md-8">
                    <div className="panel panel-default contact-info-panel">
                        <div className="panel-body">
                        <ul className="fa-ul">
                            <li>
                            <i className="fa fa-li fa-envelope"></i>
                            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            </li>
                            <li>
                            <i className="fa fa-li fa-phone"></i>
                            {PHONES.map((phone, i) => (
                                <span key={phone}>
                                {i > 0 && " | "}
                                <a href={telHref(phone)}>{phone}</a>
                                </span>
                            ))}
                            </li>
                        </ul>
                        </div>
                    </div>
                    <form id="contact-form" action="https://formsubmit.co/ademirconstantino@gmail.com" method="POST">
                        <div className="form-group">
                        <label className="sr-only" htmlFor="nome">{JsonReader(langSelected, "contact.name")}</label>
                        <input type="text" name="nome" className="form-control" id="nome" placeholder={JsonReader(langSelected, 'contact.name')}/>
                        </div>
                        <div className="form-group">
                        <label className="sr-only" htmlFor="email">{JsonReader(langSelected, "contact.email")}</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder={JsonReader(langSelected, 'contact.email')}/>
                        </div>
                        <div className="form-group">
                        <label className="sr-only" htmlFor="mensagem">{JsonReader(langSelected, "contact.message")}</label>
                        <textarea className="form-control" name="mensagem" id="mensagem" rows={5} placeholder={JsonReader(langSelected, 'contact.message')}></textarea>
                        </div>
                        <input type="submit" className="btn btn-primary contact-submit" value={JsonReader(langSelected, 'contact.send_message')}/>
                    </form>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        </motion.div>
    );
}

export default Contact;