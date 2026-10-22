import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangContext";

const LANGUAGES = [
    { code: "en", name: "English", flag: "/img/en.png", label: "EN" },
    { code: "es", name: "Español", flag: "/img/es.png", label: "ES" },
    { code: "it", name: "Italiano", flag: "/img/it.png", label: "IT" },
    { code: "pt", name: "Português", flag: "/img/br.png", label: "PT" },
    { code: "fr", name: "Français", flag: "/img/fr.png", label: "FR" },
    { code: "de", name: "Deutsch", flag: "/img/de.png", label: "DE" },
    { code: "ch", name: "中文", flag: "/img/ch.png", label: "ZH" },
    { code: "jp", name: "日本語", flag: "/img/jp.png", label: "JA" },
    { code: "em", name: "العربية", flag: "/img/em.png", label: "AR" },
];

// Flag + language code button that opens the list of languages (closes on outside click or Esc)
function LanguageSelect() {
    const { langSelected, setLangSelected } = useLang();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const current = LANGUAGES.find((l) => l.code === langSelected) ?? LANGUAGES[0];

    useEffect(() => {
        if (!open) return;
        const onClick = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) setOpen(false);
        };
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("mousedown", onClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <div className="lang" ref={ref}>
            <button
                type="button"
                className="lang-btn"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={`Language: ${current.name}`}
                onClick={() => setOpen((o) => !o)}
            >
                <img src={current.flag} alt="" width={20} height={20} />
                <span className="lang-code">{current.label}</span>
            </button>
            {open && (
                <ul className="lang-menu" role="listbox" aria-label="Language">
                    {LANGUAGES.map((l) => (
                        <li key={l.code}>
                            <button
                                type="button"
                                role="option"
                                aria-selected={l.code === langSelected}
                                className={l.code === langSelected ? "active" : ""}
                                onClick={() => {
                                    setLangSelected(l.code);
                                    setOpen(false);
                                }}
                            >
                                <img src={l.flag} alt="" width={20} height={20} />
                                {l.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default LanguageSelect;
