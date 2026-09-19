import JsonReader from './JSonReader';
import { useLang } from "./LangContext";

function TopBar() {

    const { langSelected, setLangSelected } = useLang();

    const title = JsonReader(langSelected, "header.website_title");
    console.log(title);

    const languages = [
        { code: "en", name: "English", flag: "img/en.png" },
        { code: "es", name: "Español", flag: "img/es.png" },
        { code: "it", name: "Italiano", flag: "img/it.png" },
        { code: "pt", name: "Português", flag: "img/br.png" },
        { code: "fr", name: "Français", flag: "img/fr.png" },
        { code: "de", name: "Deutsch", flag: "img/de.png" },
        { code: "ch", name: "中国人", flag: "img/ch.png" },
        { code: "jp", name: "日本語", flag: "img/jp.png" },
        { code: "em", name: "Earabiun", flag: "img/em.png" }
    ];

    const selectedLanguage =
        languages.find((language) => language.code === langSelected) ||
        languages.find((language) => language.code === "en");

    return (
        <>
            <style>
                {`
                    @media screen and (max-width: 480px) {
                        .mobile-hide-flag {
                            display: none !important;
                        }
                    }
                `}
            </style>

            <div id="navigation">
                <div
                    className="navbar-static-top"
                    style={{ paddingTop: 25 }}
                >
                    <div
                        className="container"
                        style={{ width: "80%" }}
                    >
                        <table width="100%">
                            <tbody>
                                <tr>

                                    <td
                                        align="left"
                                        width="70%"
                                    >
                                        <img
                                            className="img-responsive"
                                            src="img/logocit2.png"
                                        />
                                    </td>

                                    <td
                                        align="right"
                                        width="30%"
                                    >
                                        <div
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "8px"
                                            }}
                                        >

                                            <img
                                                className="mobile-hide-flag"
                                                src={selectedLanguage?.flag}
                                                alt={selectedLanguage?.name}
                                                style={{
                                                    width: "32px",
                                                    height: "22px",
                                                    objectFit: "cover",
                                                    borderRadius: "2px"
                                                }}
                                            />

                                            <select
                                                value={langSelected}
                                                onChange={(e) =>
                                                    setLangSelected(e.target.value)
                                                }
                                                style={{
                                                    height: "34px",
                                                    minWidth: "150px",
                                                    padding: "4px 32px 4px 10px",
                                                    border: "1px solid #ccc",
                                                    borderRadius: "5px",
                                                    backgroundColor: "#fff",
                                                    color: "#333",
                                                    fontSize: "14px",
                                                    cursor: "pointer",
                                                    outline: "none"
                                                }}
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
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopBar;