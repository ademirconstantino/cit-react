import JsonReader from './JSonReader';
import { useLang } from "./LangContext";
import { Link } from "react-router-dom";
import { PHONES, telHref } from "./contactInfo";

import "../public/css/menu.css";
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

const CNPJ = "11.809.343/0001-18";

// Site map: [path, JSON key of the link text]
const COMPANY_LINKS = [
  ["/", "footer.link_home"],
  ["/about", "footer.link_about"],
  ["/our-team", "footer.link_team"],
  ["/mentoring", "footer.link_mentoring"],
  ["/contact", "footer.link_contact"],
];

const SERVICE_LINKS = [
  ["/services", "footer.link_services"],
  ["/mobile-apps", "services_pages.mobile_title"],
  ["/it-consulting", "services_pages.consulting_title"],
  ["/cloud-solutions", "services_pages.cloud_title"],
  ["/web-development", "services_pages.web_title"],
];

function Footer() {

  const { langSelected } = useLang();

  return (
    <div className="site-footer">

      <div
        className="container footer-container"
        style={{
          backgroundColor: '#fff',
          paddingTop: 20,
          width: "90%",
          fontSize: "12px"
        }}
      >

        <div className="footer-main">

          <img src="/img/logo-symbol.png" alt="Constantino IT" className="footer-logo" />

          <div className="footer-contact">

            <div className="block contact-block">

              <address>

                <ul className="fa-ul">

                  <li>
                    <abbr title="Phone">
                      <i className="fa fa-li fa-phone"></i>
                    </abbr>
                    <span className="site-footer">
                    {PHONES.map((phone, i) => (
                      <span key={phone}>
                        {i > 0 && " | "}
                        <a href={telHref(phone)} className="footer-contact-link">
                          {phone}
                        </a>
                      </span>
                    ))}
                    </span>
                  </li>

                  <li>
                    <abbr title="Email">
                      <i className="fa fa-li fa-envelope"></i>
                    </abbr>

                    <span className='site-footer'>
                    <a
                      href="/contact"
                      className="footer-contact-link"
                    >
                        
                      {JsonReader(
                        langSelected,
                        "footer.contact_us"
                      )}
                    </a>
                    </span>
                  </li>

                  <li>
                    <span className='site-footer'>
                    <abbr title="Address">
                      <i className="fa fa-li fa-home"></i>
                    </abbr>
                    {JsonReader(
                      langSelected,
                      "footer.address"
                    )}
                    </span>
                  </li>

                  <li>
                    <abbr title="CNPJ">
                      <i className="fa fa-li fa-building"></i>
                    </abbr>
                    <span className="site-footer">
                      CNPJ {CNPJ}
                    </span>
                  </li>

                </ul>

              </address>

            </div>

          </div>

          {/* SITE MAP */}
          <div className="footer-sitemap">
            <nav aria-labelledby="footer-company">
              <h4 id="footer-company">{JsonReader(langSelected, "footer.sitemap_company")}</h4>
              <ul>
                {COMPANY_LINKS.map(([path, key]) => (
                  <li key={path}><Link to={path}>{JsonReader(langSelected, key)}</Link></li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-services">
              <h4 id="footer-services">{JsonReader(langSelected, "footer.sitemap_services")}</h4>
              <ul>
                {SERVICE_LINKS.map(([path, key]) => (
                  <li key={path}><Link to={path}>{JsonReader(langSelected, key)}</Link></li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-ebook">
              <h4 id="footer-ebook">{JsonReader(langSelected, "footer.sitemap_ebook")}</h4>
              <ul>
                <li><Link to="/ebook">{JsonReader(langSelected, "ebook.title")}</Link></li>
                <li className="footer-sitemap-note">{JsonReader(langSelected, "ebook.languages_title")}</li>
              </ul>
            </nav>
          </div>

        </div>


        {/* COPYRIGHT AND SOCIAL NETWORKS, at the bottom of the panel */}
        <div className="footer-bottom">

          <p className="footer-copyright">
            {JsonReader(
              langSelected,
              "footer.copyright_notice"
            )}
          </p>

          <div className="footer-social">

            <div>

              <a href="https://x.com/ItConstantino" aria-label="X (Twitter)">
                <i
                  className="fa fa-twitter"
                  style={{ paddingLeft: 5 }}
                ></i>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61581224173736" aria-label="Facebook">
                <i
                  className="fa fa-facebook"
                  style={{ paddingLeft: 5 }}
                ></i>
              </a>

              <a href="http://www.linkedin.com/in/ademir-constantino/" aria-label="LinkedIn">
                <i
                  className="fa fa-linkedin"
                  style={{ paddingLeft: 5 }}
                ></i>

              </a>

            </div>

          </div>

        </div>

      </div>

      <br />

    </div>
  );
}

export default Footer;