import { GetCardResponse } from "../interfaces/GetCardResponse";
import { ICard } from "../interfaces/ICard";
import { IDeck } from "../interfaces/IDeck";
import API from "./config";
import { DECKS_OF_CARDS_ENDPOINTS } from "./endpoints";

const CardsService = {
  createDeck: (): IDeck | any =>
    new Promise((resolve, reject) => {
      API.get(DECKS_OF_CARDS_ENDPOINTS.SHUFFLE_THE_CARDS)
        .then((res: { data: IDeck }) => res.data)
        .then((data: IDeck) => resolve(data))
        .catch((err: any) => reject(err));
    }),
  getCard: (deck_id: string): ICard | any =>
    new Promise((resolve, reject) => {
      API.get(`${deck_id}/${DECKS_OF_CARDS_ENDPOINTS.DRAW_CARDS}`)
        .then((res: { data: GetCardResponse }) => {
          return res.data;
        })
        .then((data: GetCardResponse) => resolve(data.cards[0]))
        .catch((err: any) => reject(err));
    }),
};

export default CardsService;
