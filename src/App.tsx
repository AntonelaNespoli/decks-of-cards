/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import { createDeck, getCard, sortByValue } from "./helpers/cards";
import { Suits } from "./helpers/enums/Suits";
import { ICard } from "./interfaces/ICard";
import { IDeck } from "./interfaces/IDeck";
import { CardBox, Header } from "./App.styles";

export default function App() {
  const [deck, setDeck]: [IDeck | undefined, any] = useState();
  const [card, setCard]: [ICard | undefined, any] = useState();
  const [queens, setQueens]: [(ICard | undefined)[], any] = useState([]);
  const [cards, setCards]: [(ICard | undefined)[], any] = useState([]);
  const [cardsHeart, setCardsHeart]: [(ICard | undefined)[], any] = useState(
    []
  );
  const [cardsSpades, setCardsSpades]: [(ICard | undefined)[], any] = useState(
    []
  );
  const [cardsClub, setCardsClubs]: [(ICard | undefined)[], any] = useState([]);
  const [cardsDiamond, setCardsDiamonds]: [
    (ICard | undefined)[],
    any
  ] = useState([]);

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
      if (deck !== undefined && queens.length < 4 && cards.length < 52) {
        setRandomCard();
      }
    }, 1000);
  }, [cards]);

  const setRandomCard = async () => {
    if (deck) {
      const newCard = await getCard(deck.deck_id);
      if (newCard) {
        setCard(newCard);
        setCards([...cards, newCard]);

        if (newCard.value === "QUEEN") setQueens([...queens, newCard]);

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
      <Header>
        {!!card &&
        <>
          <CardBox elevation={5}>
            <Typography variant="h5" component="h1">
              Carta Nueva
            </Typography>
            <Card card={card} />
          </CardBox>
          <CardsContainer cards={queens} title='Reinas'/>
        </>
        }
      </Header>
      {!!cardsHeart.length && <CardsContainer cards={cardsHeart} title='Corazones'/>}
      {!!cardsDiamond.length && <CardsContainer cards={cardsDiamond} title='Diamantes' />}
      {!!cardsSpades.length && <CardsContainer cards={cardsSpades} title='Picas' />}
      {!!cardsClub.length && <CardsContainer cards={cardsClub} title='Treboles' />}
    </>
  );
}
