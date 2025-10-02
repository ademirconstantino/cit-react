import data_en from "../public/json/cit.en.json";
import data_es from "../public/json/cit.es.json";
import data_pt from "../public/json/cit.pt.json";
import data_it from "../public/json/cit.it.json";

const getValue = (path:String, data:any) => {
  return path.split(".").reduce((obj, key) => (obj && obj[key] ? obj[key] : null), data);
};

export default function JsonReader(lang = "en", key) {
  let langData = data_en;

  if (lang === "pt") {
    langData = data_pt;
  } else if (lang === "es") {
    langData = data_es;
  } else if (lang === "it") {
    langData = data_it;
  }

  return getValue(key, langData);
}