"use client";
import React, { useEffect, useState } from "react";
import fetchData from "../apis/FetchData";
import { formatDate, getTimeDifference } from "../utils/util";
import "../../styles/card.css";
import kebab from "@/public/images/kebab.png";
import star from "@/public/images/star.png";
import Image from "next/image";

interface Item {
  image_source: string;
  url: string;
  created_at: string;
  description: string;
}

interface FolderCardProps {
  linkToFetch: string;
  searchWord?: string;
}

function FolderCard({ linkToFetch, searchWord }: FolderCardProps) {
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    const fetchCardData = async () => {
      const data = await fetchData(linkToFetch);
      if (data) {
        setItems(data.data);
      }
    };
    fetchCardData();
  }, [linkToFetch]);

  const filteredItems =
    items && searchWord
      ? items.filter(
          (item) =>
            (item.url && item.url.includes(searchWord)) ||
            (item.description && item.description.includes(searchWord))
        )
      : items;

  return (
    <div className="cardImg-grid">
      {filteredItems && filteredItems.length > 0 ? (
        filteredItems.map((item, id) => (
          <div className="card-container" key={id}>
            <div className="cardImg-container">
              <Image
                className="cardFavoriteImg"
                src={star}
                alt="cardFavoriteImg"
              />
              <img className="cardImg" src={item.image_source} alt="img" />
            </div>
            <a href={item.url}>
              <div className="cardScript">
                <div>
                  <p className="timeDifference">
                    {getTimeDifference(item.created_at)}
                  </p>
                  <Image src={kebab} alt="kebabImg" />
                </div>
                <p className="item-description">{item.description}</p>
                <p>{formatDate(item.created_at)}</p>
              </div>
            </a>
          </div>
        ))
      ) : (
        <div className="noLink">저장된 링크가 없습니다</div>
      )}
    </div>
  );
}

export default FolderCard;
