// Contact details shared by the footer and the contact page
export const EMAIL = "ademir@constantinoit.com";

export const PHONES = ["+55 41 9 9607 5187", "+55 11 9 4956 0056"];

export function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}
