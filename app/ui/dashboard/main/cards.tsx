import { Stack } from "@mui/material";
import * as React from "react";
import MCard from "./mcard";

export interface ICardsProps {}
interface cardProps {
  title: string;
  total: number;
  text: string;
}

export default function Cards(props: ICardsProps) {
  const cardInfos: cardProps[] = [
    {
      title: "Total Users",
      total: 10.928,
      text: "12% more than previous week",
    },
    {
      title: "New Users",
      total: 2.12,
      text: "23% more than previous week",
    },
    {
      title: "Ex Users",
      total: 1.025,
      text: "6% more than previous week",
    },
  ];

  return (
    <Stack
      sx={{
        justifyContent: "space-around",
        flexDirection: {xs: 'column', sm:'row'},
        columnGap: 1,
        rowGap: 1
      }}
    >
      {cardInfos.map((card, index) => (
        <MCard
          key={index}
          title={card.title}
          total={card.total}
          text={card.text}
        />
      ))}
    </Stack>
  );
}
