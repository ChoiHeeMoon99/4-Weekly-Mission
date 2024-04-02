"use client";
import React, { useEffect, useState } from "react";
import fetchData from "../apis/FetchData";
import { formatDate, getTimeDifference } from "../utils/util";
import "../../styles/card.css";
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
                width={330}
                height={200}
                className="cardFavoriteImg"
                src="/images/star.png"
                alt="cardFavoriteImg"
              />
              <Image className="cardImg" src={item.image_source} alt="img" />
            </div>
            <a href={item.url}>
              <div className="cardScript">
                <div>
                  <p className="timeDifference">
                    {getTimeDifference(item.created_at)}
                  </p>
                  <Image src="/images/kebab.png" alt="kebabImg" />
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
