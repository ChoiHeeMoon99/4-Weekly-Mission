import React, { ChangeEvent, useState } from "react";
import "../style/searchLink.css";
import searchIcon from "../assets/Search.png";
import searchClose from "../assets/_close.png";
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
      <img className="searchIcon" src={searchIcon} alt="searchIcon" />
      <input
        className="search-link"
        placeholder="링크를 검색해 보세요."
        onChange={handleInputChange}
        value={searchWord}
      />
      {searchWord && (
        <img
          className="searchCloseIcon"
          src={searchClose}
          alt="searchClose"
          onClick={handleInputClear}
        />
      )}
    </form>
  );
}
export default SearchLink;
