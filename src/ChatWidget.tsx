import { useEffect, useRef, useState, type FormEvent } from "react";
import JsonReader from "./JSonReader";
import { useLang } from "./LangContext";

const NTFY_URL = "https://ntfy.sh/";
const NTFY_TOPIC = "cit-site-8f3k2q9x";

// Answers are stored in this order; each question is a key under "chat" in the JSON files
const QUESTIONS = [
  { field: "business_name", key: "chat.question_business_name", label: "Negócio" },
  { field: "employees", key: "chat.question_employees", label: "Funcionários" },
  { field: "revenue", key: "chat.question_revenue", label: "Faturamento anual" },
  { field: "email", key: "chat.question_email", label: "E-mail" },
] as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DONE_KEY = "chatDone";
const DISMISSED_KEY = "chatDismissed";

// Bot messages keep the JSON key, so they are re-translated if the language changes mid-chat
type Message = { from: "bot"; key: string } | { from: "user"; text: string };

function storageGet(storage: () => Storage, key: string) {
  try {
    return storage().getItem(key);
  } catch {
    return null;
  }
}

function storageSet(storage: () => Storage, key: string, value: string) {
  try {
    storage().setItem(key, value);
  } catch {
    // storage unavailable (private mode)
  }
}

function ChatWidget() {
  const { langSelected } = useLang();
  const t = (key: string) => JsonReader(langSelected, key);

  const alreadyDone = storageGet(() => localStorage, DONE_KEY) === "1";

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(
    alreadyDone
      ? [{ from: "bot", key: "chat.thank_you" }]
      : [
          { from: "bot", key: "chat.greeting" },
          { from: "bot", key: QUESTIONS[0].key },
        ]
  );
  const [answers, setAnswers] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(alreadyDone);

  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Pop the chat open shortly after the home page loads, unless it was closed or completed before
  useEffect(() => {
    if (alreadyDone || storageGet(() => sessionStorage, DISMISSED_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, [alreadyDone]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [messages, open]);

  useEffect(() => {
    if (open && !done) inputRef.current?.focus({ preventScroll: true });
  }, [open, done, sending]);

  const close = () => {
    setOpen(false);
    storageSet(() => sessionStorage, DISMISSED_KEY, "1");
  };

  const notify = async (all: string[]) => {
    const message = QUESTIONS.map((q, i) => `${q.label}: ${all[i]}`).join("\n");
    const response = await fetch(NTFY_URL, {
      method: "POST",
      body: JSON.stringify({
        topic: NTFY_TOPIC,
        title: `Novo lead do site: ${all[0]}`,
        message: `${message}\nIdioma: ${langSelected}`,
        tags: ["briefcase"],
      }),
    });
    if (!response.ok) throw new Error(`ntfy responded ${response.status}`);
  };

  const submit = async (all: string[]) => {
    setSending(true);
    try {
      await notify(all);
      setDone(true);
      storageSet(() => localStorage, DONE_KEY, "1");
      setMessages((m) => [...m, { from: "bot", key: "chat.thank_you" }]);
    } catch {
      setMessages((m) => [...m, { from: "bot", key: "chat.error" }]);
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (sending || done) return;

    // Every question was answered but the send failed: the button retries it
    if (answers.length === QUESTIONS.length) {
      submit(answers);
      return;
    }

    const text = input.trim();
    if (!text) return;

    const question = QUESTIONS[answers.length];
    if (question.field === "email" && !EMAIL_REGEX.test(text)) {
      setMessages((m) => [...m, { from: "user", text }, { from: "bot", key: "chat.invalid_email" }]);
      setInput("");
      return;
    }

    const next = [...answers, text];
    setAnswers(next);
    setInput("");

    if (next.length < QUESTIONS.length) {
      setMessages((m) => [...m, { from: "user", text }, { from: "bot", key: QUESTIONS[next.length].key }]);
    } else {
      setMessages((m) => [...m, { from: "user", text }]);
      submit(next);
    }
  };

  const retrying = answers.length === QUESTIONS.length && !done;
  const isEmailStep = QUESTIONS[answers.length]?.field === "email";

  return (
    <div className="cit-chat" dir={langSelected === "em" ? "rtl" : "ltr"}>
      {open && (
        <div className="cit-chat-panel" role="dialog" aria-label={t("chat.title") ?? undefined}>
          <div className="cit-chat-header">
            <span>{t("chat.title")}</span>
            <button type="button" className="cit-chat-close" onClick={close} aria-label={t("chat.close") ?? undefined}>
              <i className="fa fa-times" aria-hidden="true" />
            </button>
          </div>

          <div className="cit-chat-body" ref={bodyRef} aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`cit-chat-msg cit-chat-msg-${m.from}`}>
                {m.from === "bot" ? t(m.key) : m.text}
              </div>
            ))}
          </div>

          {!done && (
            <form className="cit-chat-form" onSubmit={handleSubmit}>
              {!retrying && (
                <input
                  ref={inputRef}
                  className="cit-chat-input"
                  type="text"
                  inputMode={isEmailStep ? "email" : "text"}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t("chat.placeholder") ?? undefined}
                  disabled={sending}
                  maxLength={200}
                />
              )}
              <button type="submit" className="cit-chat-send" disabled={sending}>
                {t("chat.send")}
              </button>
            </form>
          )}
        </div>
      )}

      {!open && (
        <button type="button" className="cit-chat-toggle" onClick={() => setOpen(true)} aria-label={t("chat.open") ?? undefined}>
          <i className="fa fa-comments" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export default ChatWidget;
