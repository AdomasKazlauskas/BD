import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchCards } from "../services/userService";

export const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [cardsStatus, setCardsStatus] = useState("idle");

  const fetchCardList = async () => {
    const cards = await fetchCards();
    if (!cards.length) {
      alert("No cards found");
    }
    setCards(cards);
  };

  useEffect(() => {
    const fetchData = async () => await fetchCardList();
    fetchData();
  }, []);

  useEffect(() => {
    if (cardsStatus === "success") {
      const fetchData = async () => await fetchCardList();
      fetchData();
      setCardsStatus("idle");
    }
  }, [cardsStatus]);

  return (
    <GlobalContext.Provider value={{ cards, setCardsStatus }}>
      {children}
    </GlobalContext.Provider>
  );
};
