import { Email } from "./Email.type";
import { validEmail } from "./Email.validator";

export function createEmailValue(emailLike: string) {
  assertEmail(emailLike);

  return emailLike;
}

function assertEmail(emailLike: string): asserts emailLike is Email {
  if (!validEmail(emailLike)) {
    throw new Error(`${emailLike} is not correct mail!`);
  }
}
