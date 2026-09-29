import JsonReader from './JSonReader';
import { useLang } from "./LangContext";

import "../public/css/menu.css";
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

const PHONES = ["+55 41 9 9607 5187", "+55 11 9 4956 0056"];

const CNPJS = [
  { number: "64.763.602/0001-83" },
  { number: "11.809.343/0001-18", url: "https://www.jusbrasil.com.br/nome/ademir-constantino-filho/cnpj-CvuNXRGGiVx" },
  { number: "25.352.343/0001-46", url: "https://www.jusbrasil.com.br/nome/ademir-constantino-filho/cnpj-MHPMXb5-K0u" },
  { number: "20.350.883/0001-77", url: "https://www.jusbrasil.com.br/nome/ademir-constantino-filho/cnpj-AHv3HTZ81mq" },
  { number: "27.087.633/0001-35", url: "https://www.jusbrasil.com.br/nome/ademir-constantino-filho/cnpj-9hpVZXoQvzx" },
];

function Footer() {

  const { langSelected } = useLang();

  return (
    <div className="site-footer">

      <div
        className="container footer-container"
        style={{
          backgroundColor: '#F0F0F0',
          paddingTop: 20,
          width: "90%",
          fontSize: "12px"
        }}
      >

        <div className="row">

          <div className="col-md-3 col footer-contact">

            <div className="block contact-block">

              <address>

                <ul className="fa-ul">

                  <li>
                    <span className='site-footer'>
                    <abbr title="Phone">
                      <i className="fa fa-li fa-phone"></i>
                    </abbr>
                    {PHONES.map((phone, i) => (
                      <span key={phone}>
                        {i > 0 && <br />}
                        <a href={`tel:${phone.replace(/\s/g, "")}`} className="footer-contact-link">
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
                    <span className='site-footer'>
                    <abbr title="CNPJ">
                      <i className="fa fa-li fa-building"></i>
                    </abbr>
                    {CNPJS.map(({ number, url }, i) => (
                      <span key={number}>
                        {i > 0 && <br />}
                        {url ? (
                          <a href={url} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                            CNPJ {number}
                          </a>
                        ) : (
                          <>CNPJ {number}</>
                        )}
                      </span>
                    ))}
                    </span>
                  </li>

                </ul>

              </address>

            </div>

          </div>

        </div>


        <div className="row">

          <div className="subfooter">

            {/* COPYRIGHT */}
            <div className="col-md-6 footer-copyright">

              <p>
                {JsonReader(
                  langSelected,
                  "footer.copyright_notice"
                )}
              </p>

            </div>


            {/* SOCIAL NETWORKS */}
            <div className="col-md-6 footer-social">

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

      </div>

      <br />

    </div>
  );
}

export default Footer;