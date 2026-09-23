import JsonReader from './JSonReader';
import { useLang } from "./LangContext";

import "../public/css/menu.css";
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

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
                    {JsonReader(
                      langSelected,
                      "footer.telephone_number"
                    )}
                    </span>
                  </li>
                  <li>
                    <abbr title="Email">
                      <i className="fa fa-li fa-envelope"></i>
                    </abbr>

                    <span className='site-footer'>
                    <a
                      href="/cit-react/contact"
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
            <div
              className="footer-social"
              style={{
                paddingRight: 20,
                textAlign: 'right'
              }}
            >

              <div>

                <a href="https://x.com/ItConstantino">
                  <i
                    className="fa fa-twitter"
                    style={{ paddingLeft: 5 }}
                  ></i>
                </a>

                <a href="https://www.facebook.com/profile.php?id=61581224173736">
                  <i
                    className="fa fa-facebook"
                    style={{ paddingLeft: 5 }}
                  ></i>
                </a>

                <a href="http://www.linkedin.com/in/ademir-constantino/">
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