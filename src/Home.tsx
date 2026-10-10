import JsonReader from './JSonReader';
import { useLang } from "./LangContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MobileIcon, ConsultingIcon, CloudIcon, WebIcon } from "./TechIcons";

import "../public/css/menu.css"; 
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

const CARDS = [
  { path: "/mobile-apps", Icon: MobileIcon, color: "#0969da", title: "home.desc_mobile_apps", body: "home.desc_mobile_apps_body" },
  { path: "/it-consulting", Icon: ConsultingIcon, color: "#e8590c", title: "home.desc_support", body: "home.desc_support_body" },
  { path: "/cloud-solutions", Icon: CloudIcon, color: "#1a7f37", title: "home.desc_support_a", body: "home.desc_support_abody" },
  { path: "/web-development", Icon: WebIcon, color: "#8250df", title: "home.desc_support_b", body: "home.desc_support_bbody" },
];

function Home() {

    const { langSelected } = useLang();

	const variants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    };


  return (
    <motion.div id="content" variants={variants} initial="initial" animate="animate"  exit="exit" transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}>
    <div className="page-content">
	  <div className="container"  style={{width: "80%"}}>
		  <div className="block">
			<div className="home-hero">
			  <div className="home-hero-cards">
				{CARDS.map((card) => (
				  <div className="home-hero-card" key={card.path}>
					<div className="home-hero-icon" style={{ color: card.color }}>
					  <card.Icon />
					</div>
					<h3>{JsonReader(langSelected, card.title)}</h3>
					<p>{JsonReader(langSelected, card.body)}</p>
					<Link to={card.path} className="home-hero-link">
					  <span className="home-hero-arrow" aria-hidden="true">
						<i className="fa fa-angle-right"></i>
					  </span>
					  {JsonReader(langSelected, "home.learn_more")}
					</Link>
				  </div>
				))}
			  </div>
			</div>
		</div>
	</div>
</div>
</motion.div>
  );
}

export default Home;