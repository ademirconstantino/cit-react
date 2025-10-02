import JsonReader from './JSonReader';
import { useLang } from "./LangContext";

import "../public/css/menu.css"; 
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

import './App.css'

function Home() {

    const { langSelected, setLangSelected } = useLang();

  return (
    <div id="content">
	  <div className="container"  style={{width: "80%"}}>
		  <div className="block features">
			<h2 className="title-divider">
			  <span>{JsonReader(langSelected, "home.welcome_message")}</span>
			  <small>{JsonReader(langSelected, "home.welcome_companydetails")}</small>
			</h2>
			<div className="row list-unstyled">
			  <div className="feature col-sm-6 col-md-3">
				<img src="img/features/feature-1.png" alt="Feature 1" className="feature-image-d" />
				<h3 className="title">
				  <a href="#">{JsonReader(langSelected, "home.desc_mobile_apps")}</a>
				</h3>
				<p style={{ textAlign: 'justify'}}>{JsonReader(langSelected, "home.desc_mobile_apps_body")}</p>
			  </div>
			  <div className="feature col-sm-6 col-md-3">
				<img src="img/features/feature-2.png" alt="Feature 2" className="feature-image-d" />
				<h3 className="title">
				  <a href="#"><span className="de-em">{JsonReader(langSelected, "home.desc_support")}</span></a>
				</h3>
				<p style={{ textAlign: 'justify'}}>{JsonReader(langSelected, "home.desc_support_body")}</p>
			  </div>
			  <div className="feature col-sm-6 col-md-3">
				<img src="img/features/feature-3.png" alt="Feature 2" className="feature-image-d" />
				<h3 className="title">
				  <a href="#"><span className="de-em">{JsonReader(langSelected, "home.desc_support_a")}</span></a>
				</h3>
				<p style={{ textAlign: 'justify'}}>{JsonReader(langSelected, "home.desc_support_abody")}</p>
			  </div>
			  <div className="feature col-sm-6 col-md-3">
				<img src="img/features/feature-4.png" alt="Feature 2" className="feature-image-d" />
				<h3 className="title">
				  <a href="#"><span className="de-em">{JsonReader(langSelected, "home.desc_support_b")}</span></a>
				</h3>
				<p style={{ textAlign: 'justify'}}>{JsonReader(langSelected, "home.desc_support_bbody")}</p>
			  </div>
			</div>
		</div>
	</div>
</div>
  );
}

export default Home;