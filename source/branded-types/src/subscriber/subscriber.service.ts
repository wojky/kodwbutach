import { Response } from "../utils/Response.type";
import { NewSubscriber } from "./New-subscriber.type";

export const SubscriberService = {
  async addSubscriber(payload: NewSubscriber) {
    return {} as Response<NewSubscriber>;
  },
} as const;
