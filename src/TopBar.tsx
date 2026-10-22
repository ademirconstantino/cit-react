import JsonReader from './JSonReader';
import { useLang } from "./LangContext";
import LanguageSelect from "./LanguageSelect";

function TopBar() {

    const { langSelected } = useLang();

    const title = JsonReader(langSelected, "header.website_title");

    return (
        <>
            <div id="navigation">
                <div className="navbar-static-top topbar">
                    <div className="container topbar-container">
                        <img
                            className="img-responsive topbar-logo"
                            src="/img/logocit2.png"
                            alt={title ?? "Constantino IT"}
                        />

                        <LanguageSelect />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopBar;