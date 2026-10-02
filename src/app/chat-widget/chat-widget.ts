import {
  Component,
  DestroyRef,
  ElementRef,
  afterRenderEffect,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Lang } from '../i18n/lang';

const NTFY_URL = 'https://ntfy.sh/';
const NTFY_TOPIC = 'cit-site-8f3k2q9x';

// Answers are stored in this order; each question is a key under "chat" in the JSON files
const QUESTIONS = [
  { field: 'business_name', key: 'chat.question_business_name', label: 'Negócio' },
  { field: 'employees', key: 'chat.question_employees', label: 'Funcionários' },
  { field: 'revenue', key: 'chat.question_revenue', label: 'Faturamento anual' },
  { field: 'email', key: 'chat.question_email', label: 'E-mail' },
] as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DONE_KEY = 'chatDone';
const DISMISSED_KEY = 'chatDismissed';

// Bot messages keep the JSON key, so they are re-translated if the language changes mid-chat
type Message = { from: 'bot'; key: string } | { from: 'user'; text: string };

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

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.html',
})
export class ChatWidget {
  protected readonly lang = inject(Lang);

  private readonly alreadyDone = storageGet(() => localStorage, DONE_KEY) === '1';

  protected readonly open = signal(false);
  protected readonly messages = signal<Message[]>(
    this.alreadyDone
      ? [{ from: 'bot', key: 'chat.thank_you' }]
      : [
          { from: 'bot', key: 'chat.greeting' },
          { from: 'bot', key: QUESTIONS[0].key },
        ],
  );
  private readonly answers = signal<string[]>([]);
  protected readonly input = signal('');
  protected readonly sending = signal(false);
  protected readonly done = signal(this.alreadyDone);

  protected readonly retrying = computed(
    () => this.answers().length === QUESTIONS.length && !this.done(),
  );
  protected readonly isEmailStep = computed(
    () => QUESTIONS[this.answers().length]?.field === 'email',
  );

  private readonly body = viewChild<ElementRef<HTMLElement>>('body');
  private readonly inputEl = viewChild<ElementRef<HTMLInputElement>>('inputEl');

  constructor() {
    // Pop the chat open shortly after the home page loads, unless it was closed or completed before
    if (!this.alreadyDone && !storageGet(() => sessionStorage, DISMISSED_KEY)) {
      const timer = setTimeout(() => this.open.set(true), 1500);
      inject(DestroyRef).onDestroy(() => clearTimeout(timer));
    }

    afterRenderEffect(() => {
      this.messages();
      this.open();
      const body = this.body()?.nativeElement;
      body?.scrollTo({ top: body.scrollHeight });
    });

    afterRenderEffect(() => {
      this.sending();
      if (this.open() && !this.done()) {
        this.inputEl()?.nativeElement.focus({ preventScroll: true });
      }
    });
  }

  protected close() {
    this.open.set(false);
    storageSet(() => sessionStorage, DISMISSED_KEY, '1');
  }

  private async notify(all: string[]) {
    const message = QUESTIONS.map((q, i) => `${q.label}: ${all[i]}`).join('\n');
    const response = await fetch(NTFY_URL, {
      method: 'POST',
      body: JSON.stringify({
        topic: NTFY_TOPIC,
        title: `Novo lead do site: ${all[0]}`,
        message: `${message}\nIdioma: ${this.lang.selected()}`,
        tags: ['briefcase'],
      }),
    });
    if (!response.ok) throw new Error(`ntfy responded ${response.status}`);
  }

  private async submit(all: string[]) {
    this.sending.set(true);
    try {
      await this.notify(all);
      this.done.set(true);
      storageSet(() => localStorage, DONE_KEY, '1');
      this.messages.update((m) => [...m, { from: 'bot', key: 'chat.thank_you' }]);
    } catch {
      this.messages.update((m) => [...m, { from: 'bot', key: 'chat.error' }]);
    } finally {
      this.sending.set(false);
    }
  }

  protected handleSubmit(event: Event) {
    event.preventDefault();
    if (this.sending() || this.done()) return;

    const answers = this.answers();

    // Every question was answered but the send failed: the button retries it
    if (answers.length === QUESTIONS.length) {
      this.submit(answers);
      return;
    }

    const text = this.input().trim();
    if (!text) return;

    const question = QUESTIONS[answers.length];
    if (question.field === 'email' && !EMAIL_REGEX.test(text)) {
      this.messages.update((m) => [
        ...m,
        { from: 'user', text },
        { from: 'bot', key: 'chat.invalid_email' },
      ]);
      this.input.set('');
      return;
    }

    const next = [...answers, text];
    this.answers.set(next);
    this.input.set('');

    if (next.length < QUESTIONS.length) {
      this.messages.update((m) => [
        ...m,
        { from: 'user', text },
        { from: 'bot', key: QUESTIONS[next.length].key },
      ]);
    } else {
      this.messages.update((m) => [...m, { from: 'user', text }]);
      this.submit(next);
    }
  }

  protected onInput(event: Event) {
    this.input.set((event.target as HTMLInputElement).value);
  }
}
