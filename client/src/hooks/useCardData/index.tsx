import { useState, useEffect } from "react";
import { cardsPrototype } from "../types";

export function useCardData() {
  const [cards, setCards] = useState([] as cardsPrototype[]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("../../../cardData.json");
      const response = await data.json();
      const randomizedResponse = response.sort(() => Math.random() - 0.5);
      setCards(randomizedResponse);
    };

    fetchData();
  }, []);

  return [cards];
}
