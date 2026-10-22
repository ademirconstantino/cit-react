// eBook editions and lead state, shared by the landing page and the home page promo

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export type Edition = {
    lang: "en" | "pt";
    nativeName: string;
    bookTitle: string;
    cover: string;
    driveId: string;
    size: string;
};

export const EDITIONS: Edition[] = [
    {
        lang: "en",
        nativeName: "English",
        bookTitle: "Software Architecture in Java",
        cover: "/ebook-arch/cover-en.jpg",
        driveId: "186WuSykB5IBsuWh-xf-41Pb_FMi1Vl4S",
        size: "2.6 MB",
    },
    {
        lang: "pt",
        nativeName: "Português (Brasil)",
        bookTitle: "Arquitetura de Software em Java",
        cover: "/ebook-arch/cover-pt.jpg",
        driveId: "1x6q225ex0jZ6zu9sJdDwrMAMpcCZyMy_",
        size: "2.7 MB",
    },
];

// Portuguese visitors get their edition by default; everyone else gets English
export const defaultEditionLang = (siteLang: string): Edition["lang"] => (siteLang === "pt" ? "pt" : "en");

// PDFs are hosted on Google Drive (shared as "anyone with the link")
export const driveDownloadUrl = (e: Edition) => `https://drive.google.com/uc?export=download&id=${e.driveId}`;
export const driveViewUrl = (e: Edition) => `https://drive.google.com/file/d/${e.driveId}/view`;

// Once the form is sent, the links stay available on this browser
const UNLOCK_KEY = "ebookUnlocked";

export type Unlocked = { lang: Edition["lang"]; name: string };

export function readUnlocked(): Unlocked | null {
    try {
        const stored = JSON.parse(localStorage.getItem(UNLOCK_KEY) ?? "null");
        return stored && EDITIONS.some((e) => e.lang === stored.lang) ? stored : null;
    } catch {
        return null;
    }
}

export function saveUnlocked(unlocked: Unlocked) {
    try {
        localStorage.setItem(UNLOCK_KEY, JSON.stringify(unlocked));
    } catch {
        // storage unavailable (private mode): the links show for this visit only
    }
}

export function trackDownload(edition: Edition, action: "download" | "read_online") {
    window.gtag?.("event", "ebook_" + action, { ebook_language: edition.lang });
}
