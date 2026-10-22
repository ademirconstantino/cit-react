// Site notifications (chat leads, eBook downloads) are published to this ntfy topic
const NTFY_URL = "https://ntfy.sh/";
const NTFY_TOPIC = "cit-site-8f3k2q9x";

export async function notify(title: string, message: string, tags: string[]) {
  const response = await fetch(NTFY_URL, {
    method: "POST",
    body: JSON.stringify({ topic: NTFY_TOPIC, title, message, tags }),
  });
  if (!response.ok) throw new Error(`ntfy responded ${response.status}`);
}
