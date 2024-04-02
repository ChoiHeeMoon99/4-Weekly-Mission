"use client";
import React, { ChangeEvent, useState } from "react";
import "../../styles/searchLink.css";

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
      <Image
        width={16}
        height={16}
        className="searchIcon"
        src="/images/Search.png"
        alt="searchIcon"
      />
      <input
        className="search-link"
        placeholder="링크를 검색해 보세요."
        onChange={handleInputChange}
        value={searchWord}
      />
      {searchWord && (
        <Image
          className="searchCloseIcon"
          src="/images/_close.png"
          alt="searchClose"
          onClick={handleInputClear}
        />
      )}
    </form>
  );
}
export default SearchLink;
