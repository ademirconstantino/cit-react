import data_en from "../public/json/cit.en.json";
import data_es from "../public/json/cit.es.json";
import data_pt from "../public/json/cit.pt.json";
import data_it from "../public/json/cit.it.json";
import data_fr from "../public/json/cit.fr.json";
import data_de from "../public/json/cit.de.json";

const getValue = (path:string, data:any) => {
  return path.split(".").reduce((obj, key) => (obj && obj[key] ? obj[key] : null), data);
};

export default function JsonReader(lang = "en", key: string) {
  let langData = data_en;

  if (lang === "pt") {
    langData = data_pt;
  } else if (lang === "es") {
    langData = data_es;
  } else if (lang === "it") {
    langData = data_it;
  } else if (lang === "fr") {
    langData = data_fr;
  } else if (lang === "de") {
    langData = data_de;
  }

  return getValue(key, langData);
}