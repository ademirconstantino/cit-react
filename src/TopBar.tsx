import JsonReader from './JSonReader';
import { useLang } from "./LangContext";

function TopBar() {

    const { langSelected, setLangSelected } = useLang();

    const title = JsonReader(langSelected, "header.website_title");
    console.log(title);

    const languages = [
        { code: "en", name: "English", flag: "/img/en.png" },
        { code: "es", name: "Español", flag: "/img/es.png" },
        { code: "it", name: "Italiano", flag: "/img/it.png" },
        { code: "pt", name: "Português", flag: "/img/br.png" },
        { code: "fr", name: "Français", flag: "/img/fr.png" },
        { code: "de", name: "Deutsch", flag: "/img/de.png" },
        { code: "ch", name: "中国人", flag: "/img/ch.png" },
        { code: "jp", name: "日本語", flag: "/img/jp.png" },
        { code: "em", name: "Earabiun", flag: "/img/em.png" }
    ];

    const selectedLanguage =
        languages.find((language) => language.code === langSelected) ||
        languages.find((language) => language.code === "en");

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

                        <div className="topbar-lang">
                            <img
                                className="topbar-flag"
                                src={selectedLanguage?.flag}
                                alt={selectedLanguage?.name}
                            />

                            <select
                                className="topbar-select"
                                value={langSelected}
                                onChange={(e) =>
                                    setLangSelected(e.target.value)
                                }
                            >
                                {languages.map((language) => (
                                    <option
                                        key={language.code}
                                        value={language.code}
                                    >
                                        {language.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopBar;