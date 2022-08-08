import { CARDS_ORDER } from "./const/CardsOrder";
import { ICard } from "../interfaces/ICard";
import { IDeck } from "../interfaces/IDeck";
import CardsService from "../services/CardsService";

function createDeck(): IDeck {
  return CardsService.createDeck();
}

function getCard(deck_id: string): ICard {
  return CardsService.getCard(deck_id);
}

function sortByValue(a: any, b: any): number {
  return CARDS_ORDER.indexOf(a.value) - CARDS_ORDER.indexOf(b.value);
}

export { createDeck, getCard, sortByValue };
