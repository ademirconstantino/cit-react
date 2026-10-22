import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "./LangContext";
import JsonReader from "./JSonReader";
import { EDITIONS, defaultEditionLang, readUnlocked } from "./ebookData";

import "../public/css/ebook.css";

const DISMISSED_KEY = "ebookPromoDismissed";

function wasDismissed() {
  try {
    return sessionStorage.getItem(DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

// Floating card on the home page pointing to the free eBook landing page
function EbookPromo() {
  const { langSelected } = useLang();
  const t = (key: string) => JsonReader(langSelected, "ebook." + key);
  const [open, setOpen] = useState(false);

  // Appears a moment after the page loads, unless it was closed this visit or the eBook was already downloaded
  useEffect(() => {
    if (wasDismissed() || readUnlocked()) return;
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // storage unavailable (private mode)
    }
  };

  if (!open) return null;

  const edition = EDITIONS.find((e) => e.lang === defaultEditionLang(langSelected))!;

  return (
    <motion.aside
      className="ebook-promo"
      aria-label={t("badge") ?? undefined}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <img src={edition.cover} alt="" className="ebook-promo-cover" />
      <div>
        <span className="ebook-badge"><i className="fa fa-gift"></i> {t("badge")}</span>
        <strong className="ebook-promo-title">{t("title")}</strong>
        <p className="ebook-promo-languages"><i className="fa fa-globe"></i> {t("languages_title")}</p>
        <Link to="/ebook" className="ebook-btn ebook-btn-primary" onClick={close}>{t("get_free")}</Link>
      </div>
      <button type="button" className="ebook-promo-close" onClick={close} aria-label={t("promo_close") ?? undefined}>
        <i className="fa fa-times" aria-hidden="true" />
      </button>
    </motion.aside>
  );
}

export default EbookPromo;
