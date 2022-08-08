import { ICard } from "./ICard";

export interface GetCardResponse {
  success: boolean;
  cards: ICard[];
  deck_id: string;
  remaining: number;
}
