import { Typography } from "@mui/material";
import { ICard } from "../../interfaces/ICard";
import Card from "../Card/Card";
import { Container, CardsBox } from "./CardsContainer.styles";

function CardsContainer({ cards, title }: { cards: (ICard | undefined)[], title : string }) {
  return (
    <Container elevation={5}>
      <Typography variant="h6" component="h2" align="center">
        {title}
      </Typography>
      <CardsBox>
        {cards.map((c: ICard | undefined, i: number) => (
          <Card key={i} card={c} />
        ))}
      </CardsBox>
    </Container>
  );
}

export default CardsContainer;
