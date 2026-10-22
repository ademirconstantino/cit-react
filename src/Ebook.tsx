import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "./LangContext";
import JsonReader from "./JSonReader";
import { notify } from "./ntfy";
import { EDITIONS, defaultEditionLang, driveDownloadUrl, driveViewUrl, readUnlocked, saveUnlocked, trackDownload, type Edition } from "./ebookData";

import "../public/css/menu.css";
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";
import "../public/css/ebook.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Field = "name" | "email" | "phone";

function validate(form: Record<Field, string>): Field[] {
    const invalid: Field[] = [];
    if (form.name.trim().split(/\s+/).length < 2) invalid.push("name");
    if (!EMAIL_REGEX.test(form.email.trim())) invalid.push("email");
    const digits = form.phone.replace(/\D/g, "");
    if (!/^[\d\s()+.-]+$/.test(form.phone.trim()) || digits.length < 10 || digits.length > 15) invalid.push("phone");
    return invalid;
}

function Ebook() {
    const { langSelected } = useLang();
    const t = (key: string) => JsonReader(langSelected, "ebook." + key);

    // Portuguese visitors see their edition first; everyone else starts with English
    const editions = langSelected === "pt" ? [...EDITIONS].reverse() : EDITIONS;

    const [unlocked, setUnlocked] = useState(readUnlocked);
    const [choice, setChoice] = useState(() => defaultEditionLang(langSelected));
    const [form, setForm] = useState<Record<Field, string>>({ name: "", email: "", phone: "" });
    const [invalid, setInvalid] = useState<Field[]>([]);
    const [sending, setSending] = useState(false);
    const [sendError, setSendError] = useState(false);

    const update = (field: Field, value: string) => {
        setForm((f) => ({ ...f, [field]: value }));
        setInvalid((list) => list.filter((f) => f !== field));
    };

    const handleSubmit = async (ev: FormEvent) => {
        ev.preventDefault();
        const errors = validate(form);
        setInvalid(errors);
        if (errors.length > 0 || sending) return;

        const edition = EDITIONS.find((e) => e.lang === choice)!;
        const name = form.name.trim();
        setSending(true);
        setSendError(false);
        try {
            await notify(
                `Novo download do eBook: ${name}`,
                `Nome: ${name}\nE-mail: ${form.email.trim()}\nTelefone: ${form.phone.trim()}\nEdição: ${edition.nativeName}\nIdioma do site: ${langSelected}`,
                ["books"],
            );
            const result = { lang: choice, name: name.split(/\s+/)[0] };
            saveUnlocked(result);
            setUnlocked(result);
            window.gtag?.("event", "ebook_lead", { ebook_language: choice });
        } catch {
            setSendError(true);
        } finally {
            setSending(false);
        }
    };

    const chosen = unlocked && EDITIONS.find((e) => e.lang === unlocked.lang)!;
    const other = unlocked && EDITIONS.find((e) => e.lang !== unlocked.lang)!;

    // The cover in front follows the edition being picked (or the one already downloaded)
    const frontLang: Edition["lang"] = unlocked ? unlocked.lang : choice;
    const covers = [...EDITIONS].sort((a) => (a.lang === frontLang ? -1 : 1));

    const variants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    };

    return (
        <motion.section className="ebook-page" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.6 }}>
            <div className="container ebook-body">
                <header className="ebook-header">
                    <span className="ebook-badge"><i className="fa fa-gift"></i> {t("badge")}</span>
                    <h1 className="ebook-title">{t("title")}</h1>
                    <p className="ebook-subtitle">{t("subtitle")}</p>
                    <p className="ebook-intro">{t("intro")}</p>
                    <ul className="ebook-facts">
                        <li className="ebook-facts-languages"><i className="fa fa-globe"></i> {t("languages_title")}</li>
                        <li><i className="fa fa-book"></i> {t("fact_chapters")}</li>
                        <li><i className="fa fa-file-pdf-o"></i> {t("fact_format")}</li>
                        <li><i className="fa fa-check"></i> {t("fact_free")}</li>
                        <li>{t("author_label")} <strong>Ademir Constantino</strong></li>
                    </ul>
                </header>

                <div className="row ebook-main" id="download">
                    <div className="col-md-4">
                        <div className="ebook-cover-stack">
                            {covers.map((e, i) => (
                                <img
                                    key={e.lang}
                                    src={e.cover}
                                    alt={e.bookTitle}
                                    className={i === 0 ? "ebook-cover ebook-cover-front" : "ebook-cover ebook-cover-back"}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="col-md-8">
                        {chosen && other ? (
                            <div className="ebook-panel ebook-success">
                                <h3 className="ebook-success-title"><i className="fa fa-check"></i> {t("success_title")}</h3>
                                <p>{t("success_body").replace("{name}", unlocked!.name)}</p>
                                <p className="ebook-edition-lang">{chosen.nativeName}</p>
                                <p className="ebook-edition-label">{t("edition_" + chosen.lang)}</p>
                                <h3>{chosen.bookTitle}</h3>
                                <p className="ebook-edition-meta">PDF · {chosen.size} · {chosen.lang === "pt" ? "PT-BR" : "EN"}</p>
                                <a href={driveDownloadUrl(chosen)} className="ebook-btn ebook-btn-primary" onClick={() => trackDownload(chosen, "download")}>
                                    <i className="fa fa-download"></i> {t("download")}
                                </a>
                                <a href={driveViewUrl(chosen)} target="_blank" rel="noopener" className="ebook-btn ebook-btn-link" onClick={() => trackDownload(chosen, "read_online")}>
                                    <i className="fa fa-external-link"></i> {t("read_online")}
                                </a>
                                <p className="ebook-other-edition">
                                    {t("other_edition")}{" "}
                                    <a href={driveDownloadUrl(other)} onClick={() => trackDownload(other, "download")}>{other.nativeName}</a>
                                </p>
                            </div>
                        ) : (
                            <form className="ebook-panel ebook-form" onSubmit={handleSubmit} noValidate>
                                <h3>{t("form_title")}</h3>
                                <p>{t("form_body")}</p>

                                <fieldset>
                                    <legend>{t("field_language")}</legend>
                                    {editions.map((e) => (
                                        <label key={e.lang} className={choice === e.lang ? "ebook-choice is-selected" : "ebook-choice"}>
                                            <input type="radio" name="edition" value={e.lang} checked={choice === e.lang} onChange={() => setChoice(e.lang)} />
                                            <span className="ebook-choice-info">
                                                <span className="ebook-edition-lang">{e.nativeName}</span>
                                                <span className="ebook-edition-label">{t("edition_" + e.lang)}</span>
                                                <span className="ebook-choice-title">{e.bookTitle} · PDF · {e.size}</span>
                                            </span>
                                        </label>
                                    ))}
                                </fieldset>

                                <fieldset>
                                    <legend>{t("field_details")}</legend>
                                    {([
                                        ["name", "text", "name"],
                                        ["email", "email", "email"],
                                        ["phone", "tel", "tel"],
                                    ] as const).map(([field, type, autoComplete]) => (
                                        <div key={field} className="form-group">
                                            <label htmlFor={"ebook-" + field}>{t("field_" + field)}</label>
                                            <input
                                                id={"ebook-" + field}
                                                type={type}
                                                autoComplete={autoComplete}
                                                className={invalid.includes(field) ? "form-control is-invalid" : "form-control"}
                                                value={form[field]}
                                                onChange={(ev) => update(field, ev.target.value)}
                                                aria-invalid={invalid.includes(field)}
                                                aria-describedby={invalid.includes(field) ? "ebook-" + field + "-error" : undefined}
                                                required
                                            />
                                            {invalid.includes(field) && (
                                                <p className="ebook-field-error" id={"ebook-" + field + "-error"}>{t("invalid_" + field)}</p>
                                            )}
                                        </div>
                                    ))}
                                </fieldset>

                                {sendError && <p className="ebook-send-error" role="alert">{t("error")}</p>}

                                <button type="submit" className="ebook-btn ebook-btn-primary ebook-submit" disabled={sending}>
                                    <i className="fa fa-download"></i> {sending ? t("sending") : t("submit")}
                                </button>
                                <p className="ebook-privacy">{t("privacy")}</p>
                            </form>
                        )}
                    </div>
                </div>

                <div className="ebook-cta">
                    <div>
                        <h3>{t("cta_title")}</h3>
                        <p>{t("cta_body")}</p>
                    </div>
                    <Link to="/contact" className="ebook-btn ebook-btn-primary">{t("cta_button")}</Link>
                </div>
            </div>
        </motion.section>
    );
}

export default Ebook;
