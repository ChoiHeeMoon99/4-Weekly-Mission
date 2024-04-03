"use client";
import React, { ChangeEvent, useState } from "react";
import "../../styles/searchLink.css";
import searchIcon from "@/public/images/Search.png";
import searchCloseIcon from "@/public/images/_close.png";
import Image from "next/image";
interface Props {
  onSearchWordChange: (word: string) => void;
}
function SearchLink({ onSearchWordChange }: Props) {
  const [searchWord, setSearchWord] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchWordChange(e.target.value);
    setSearchWord(e.target.value);
  };
  const handleInputClear = () => {
    onSearchWordChange("");
    setSearchWord("");
  };
  return (
    <form className="searchLink-container">
      <Image className="searchIcon" src={searchIcon} alt="searchIcon" />
      <input
        className="search-link"
        placeholder="링크를 검색해 보세요."
        onChange={handleInputChange}
        value={searchWord}
      />
      {searchWord && (
        <Image
          className="searchCloseIcon"
          src={searchCloseIcon}
          alt="searchClose"
          onClick={handleInputClear}
        />
      )}
    </form>
  );
}
export default SearchLink;
