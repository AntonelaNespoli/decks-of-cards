/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import { createDeck, getCard, sortByValue } from "./helpers/cards";
import { Suits } from "./helpers/enums/Suits";
import { ICard } from "./interfaces/ICard";
import { IDeck } from "./interfaces/IDeck";
import { Header } from "./App.styles";

export default function App() {
  const [deck, setDeck]: [IDeck | undefined, any] = useState();
  const [card, setCard]: [ICard | undefined, any] = useState();
  const [cards, setCards]: [(ICard | undefined)[], any] = useState([]);
  const [cardsHeart, setCardsHeart]: [(ICard | undefined)[], any] = useState([]);
  const [cardsSpades, setCardsSpades]: [(ICard | undefined)[], any] = useState([]);
  const [cardsClub, setCardsClubs]: [(ICard | undefined)[], any] = useState([]);
  const [cardsDiamond, setCardsDiamonds]: [(ICard | undefined)[], any] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (deck === undefined) {
        const data = await createDeck();
        setDeck(data);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    setRandomCard();
  }, [deck]);

  useEffect(() => {
    setTimeout(() => {
      if (deck !== undefined && cards.length < 52) {
        setRandomCard();
      }
    }, 1000);
  }, [cards]);

  const setRandomCard = async () => {
    if (deck) {
      const newCard = await getCard(deck.deck_id);
      if (newCard) {
        setCard(newCard);
        let newCards: (ICard | undefined)[] = [...cards, newCard];
        setCards(newCards);

        let newSuitCards: (ICard | undefined)[];
        switch (newCard?.suit) {
          case Suits.HEARTS:
            newSuitCards = [...cardsHeart, newCard].sort(sortByValue);
            setCardsHeart(newSuitCards);
            break;
          case Suits.DIAMONDS:
            newSuitCards = [...cardsDiamond, newCard].sort(sortByValue);
            setCardsDiamonds(newSuitCards);
            break;
          case Suits.SPADES:
            newSuitCards = [...cardsSpades, newCard].sort(sortByValue);
            setCardsSpades(newSuitCards);
            break;
          case Suits.CLUBS:
            newSuitCards = [...cardsClub, newCard].sort(sortByValue);
            setCardsClubs(newSuitCards);
            break;
        }
      }
    }
  };

  return (
    <>
      <Header elevation={5}>
        <Typography variant="h5" component="h1">
          Carta Nueva
        </Typography>
        {!!card && <Card card={card} />}
      </Header>
      {!!cardsHeart.length && <CardsContainer cards={cardsHeart} />}
      {!!cardsDiamond.length && <CardsContainer cards={cardsDiamond} />}
      {!!cardsSpades.length && <CardsContainer cards={cardsSpades} />}
      {!!cardsClub.length && <CardsContainer cards={cardsClub} />}
    </>
  );
}
