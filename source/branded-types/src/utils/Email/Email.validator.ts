import { Email } from "./Email.type";

const regexEmail = /^[A-Za-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;

function validEmail(emailLike: string): emailLike is Email {
  return typeof emailLike === "string" && regexEmail.test(emailLike);
}
