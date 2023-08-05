import { Email, createEmailValue } from "./utils/Email";
import { SubscriberService } from "./subscriber";

function addNewSubscriber(name: string, email: Email) {
  console.log("incoming subscriber 📧", { name, email });

  return SubscriberService.addSubscriber({
    subscriberEmail: email,
    subscriberName: name,
  });
}

// 🌄🌄🌄🌄🌄🌄🌄 🌳🌳🌳🌳🌳🌳🌳
// frontend - dane z widoku
// frontend - dane z serwera
// backend - payload np. z frontu

let name = "joe";
let email = "kod+w+butach@dot.com";

addNewSubscriber(name, createEmailValue(email));

// async function validAndAdd(email:string, callback: any) {
//   if (validEmail(email)) {
//     addNewSubscriber(name, email);
//   } else {
//     throw new Error(`${email} is not correct mail!`);
//   }

// }
