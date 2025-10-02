import "../public/css/menu.css"; 
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

import './App.css'

function TopBar() {

  return (
    <div id="navigation" >
      <div className="navbar-static-top">
            <div className="container">
                <table width="100%">
                    <tr>
                        <td align="left" width="70%"><img className="img-responsive" src="img/logocit2.png" style={{ paddingTop: -1}}/></td>
                        <td align="right" width="30%">
                                <a href="index.php?lang=en"><img src="img/en.png" className="flag-image-d" style={{paddingLeft: 2, paddingRight: 2}}/></a>
                                <a href="index.php?lang=es"><img src="img/es.png" className="flag-image-d" style={{paddingLeft: 2, paddingRight: 2}}/></a>
                                <a href="index.php?lang=it"><img src="img/it.png" className="flag-image-d" style={{paddingLeft: 2, paddingRight: 2}}/></a>
                                <a href="index.php?lang=pt"><img src="img/br.png" className="flag-image-d" style={{paddingLeft: 2, paddingRight: 2}}/></a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default TopBar;