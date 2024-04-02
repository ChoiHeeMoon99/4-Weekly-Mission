"use client";
import React from "react";
import { useEffect, useState } from "react";
import "../../styles/card.css";
import { formatDate, getTimeDifference } from "../utils/util";
import fetchData from "../apis/FetchData";
import SearchLink from "./searchLink";
import Image from "next/image";

interface Item {
  imageSource: string;
  url: string;
  createdAt: string;
  description: string;
}
function Card() {
  const [items, setItems] = useState<Item[] | null>(null);
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    const fetchCardData = async () => {
      const data = await fetchData("sample/folder");
      if (data) {
        setItems(data.folder.links);
      }
    };
    fetchCardData();
  }, []);
  const handleSearchWordChange = (word: string) => {
    setSearchWord(word);
    console.log(searchWord);
  };
  return (
    <div className="cardImg-grid">
      <SearchLink onSearchWordChange={handleSearchWordChange} />
      {items &&
        items.map((item, id) => (
          <div className="card-container" key={id}>
            <Image className="cardImg" src={item.imageSource} alt="img" />
            <a href={item.url}>
              <div className="cardScript">
                <p className="timeDifference">
                  {getTimeDifference(item.createdAt)}
                </p>
                <p className="item-description">{item.description}</p>
                <p>{formatDate(item.createdAt)}</p>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
}
export default Card;
