import JsonReader from './JSonReader';
import { useLang } from "./LangContext";

import "../public/css/menu.css"; 
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

import './App.css'

function Footer() {

const { langSelected, setLangSelected } = useLang();

  return (
    <div className="container" style={{ backgroundColor: '#F0F0F0', paddingTop: 20 }}>
        <div className="row">
            <div className="col-md-3 col">
            <div className="block contact-block">
                <address>
                <ul className="fa-ul">
                    <li>
                    <abbr title="Phone"><i className="fa fa-li fa-phone"></i></abbr>{JsonReader(langSelected, "footer.telephone_number")}</li>
                    <li>
                    <abbr title="Email"><i className="fa fa-li fa-envelope"></i></abbr>
                    <a href="contact.php?lang=en" style={{ textDecoration: 'none', color: 'black' }}>{JsonReader(langSelected, "footer.contact_us")}</a>
                    </li>
                    <li>
                    <abbr title="Address"><i className="fa fa-li fa-home"></i></abbr>{JsonReader(langSelected, "footer.address")}</li>
                </ul>
                </address>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="subfooter">
            <div className="col-md-6">
                <p>Constantino IT Consulting | Copyright &copy; 2010-2025</p>
            </div>
            <div style={{ paddingRight: 20, textAlign: 'right'}}>
                    <div>
                        <a href="https://x.com/AdConstantino"><i className="fa fa-twitter" style={{paddingLeft: 5}}></i></a>
                        <a href="http://www.facebook.com/ademir.constantino"><i className="fa fa-facebook" style={{paddingLeft: 5}}></i></a>
                        <a href="http://www.linkedin.com/in/ademir-constantino/"><i className="fa fa-linkedin" style={{paddingLeft: 5}}></i></a>
                    </div>
             </div>
         </div>
        </div>
        </div>
    );
}

export default Footer;