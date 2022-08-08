import { ICard } from "../../interfaces/ICard";
import { CardImg } from "./Card.styles";

function Card({ card }: { card: ICard | undefined }) {
  return (
    <CardImg src={card?.image} alt={`card ${card?.value} of ${card?.suit}`} />
  );
}

export default Card;
