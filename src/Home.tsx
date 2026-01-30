import JsonReader from './JSonReader';
import { useLang } from "./LangContext";
import { motion } from "framer-motion";

import "../public/css/menu.css"; 
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

import './App.css'

function Home() {

    const { langSelected } = useLang();

	const variants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    };


  return (
    <motion.div id="content" variants={variants} initial="initial" animate="animate"  exit="exit" transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}>
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
				<h3>
				  <a href="/mobile-apps">{JsonReader(langSelected, "home.desc_mobile_apps")}</a>
				</h3>
				<p style={{ textAlign: 'justify'}}>{JsonReader(langSelected, "home.desc_mobile_apps_body")}</p>
			  </div>
			  <div className="feature col-sm-6 col-md-3">
				<img src="img/features/feature-2.png" alt="Feature 2" className="feature-image-d" />
				<h3>
				  <a href="/it-consulting">{JsonReader(langSelected, "home.desc_support")}</a>
				</h3>
				<p style={{ textAlign: 'justify'}}>{JsonReader(langSelected, "home.desc_support_body")}</p>
			  </div>
			  <div className="feature col-sm-6 col-md-3">
				<img src="img/features/feature-3.png" alt="Feature 2" className="feature-image-d" />
				<h3>
				  <a href="/cloud-solutions">{JsonReader(langSelected, "home.desc_support_a")}</a>
				</h3>
				<p style={{ textAlign: 'justify'}}>{JsonReader(langSelected, "home.desc_support_abody")}</p>
			  </div>
			  <div className="feature col-sm-6 col-md-3">
				<img src="img/features/feature-4.png" alt="Feature 2" className="feature-image-d" />
				<h3>
				  <a href="/web-development">{JsonReader(langSelected, "home.desc_support_b")}</a>
				</h3>
				<p style={{ textAlign: 'justify'}}>{JsonReader(langSelected, "home.desc_support_bbody")}</p>
			  </div>
			</div>
		
		</div>
	</div>
</div>
</motion.div>
  );
}

export default Home;