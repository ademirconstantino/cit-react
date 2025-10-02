import JsonReader from './JSonReader';
import { useLang } from "./LangContext";

import "../public/css/menu.css"; 
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";


import './App.css'

function TopBar() {

    const { langSelected, setLangSelected } = useLang();
    
    const title = JsonReader(langSelected, "header.website_title");
    console.log(title);

  return (
    <div id="navigation" >
      <div className="navbar-static-top" style={{ paddingTop: 25}}>
            <div className="container" style={{width: "90%"}}>
                <table width="100%">
                    <tbody>
                    <tr>
                        <td align="left" width="70%"><img className="img-responsive" src="img/logocit2.png"/></td>
                        <td align="right" width="30%">
                                <a onClick={() => setLangSelected("en")}><img src="img/en.png" className="flag-image-d" style={{paddingLeft: 2, paddingRight: 2}}/></a>
                                <a onClick={() => setLangSelected("es")}><img src="img/es.png" className="flag-image-d" style={{paddingLeft: 2, paddingRight: 2}}/></a>
                                <a onClick={() => setLangSelected("it")}><img src="img/it.png" className="flag-image-d" style={{paddingLeft: 2, paddingRight: 2}}/></a>
                                <a onClick={() => setLangSelected("pt")}><img src="img/br.png" className="flag-image-d" style={{paddingLeft: 2, paddingRight: 2}}/></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default TopBar;