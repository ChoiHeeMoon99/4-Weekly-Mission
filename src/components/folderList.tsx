"use client";
import "../../styles/folderList.css";
import React, { useEffect, useState } from "react";
import fetchData from "../apis/FetchData";
import FolderCard from "./folderCard";
import SearchLink from "./searchLink";
import Image from "next/image";
import addIcon from "@/public/images/add.png";
import shareIcon from "@/public/images/share.png";
import penIcon from "@/public/images/pen.png";
import deleteIcon from "@/public/images/delete.png";

interface Link {
  count: number;
}
interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: Link;
}
interface FolderData {
  data: Folder[];
}
function FolderList() {
  const [folderList, setFolderList] = useState<FolderData | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string>("전체");
  const [linkToFetch, setLinkToFetch] = useState<string>("users/1/links");
  const [searchWord, setSearchWord] = useState<string>("");
  useEffect(() => {
    const fetchFolderList = async () => {
      try {
        const data = await fetchData("users/1/folders");
        if (data) {
          setFolderList(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchFolderList();
  });

  const handleFolderClick = (folderName: string, folderId: number | null) => {
    setSelectedFolder(folderName);
    const folderIdToSend = folderName === "전체" ? null : folderId;
    const linkToFetch = folderIdToSend
      ? `users/1/links?folderId=${folderIdToSend}`
      : "users/1/links";
    setLinkToFetch(linkToFetch);
  };
  const handleSearchWordChange = (word: string) => {
    setSearchWord(word);
  };
  return (
    <div>
      <SearchLink onSearchWordChange={handleSearchWordChange} />
      <div className="sorting-container">
        <div className="sortingBtn-container">
          <button
            className={`sortingBtn ${
              selectedFolder === "전체" ? "selected" : ""
            }`}
            onClick={() => handleFolderClick("전체", null)}
          >
            전체
          </button>
          {folderList &&
            folderList.data.map((folder, id) => (
              <button
                key={id}
                className={`sortingBtn ${
                  selectedFolder === folder.name ? "selected" : ""
                }`}
                onClick={() => handleFolderClick(folder.name, folder.id)}
              >
                {folder.name}
              </button>
            ))}
        </div>
        <button className="addFolder">
          <p className="addFolderText">폴더 추가</p>
          <Image width={16} height={16} src={addIcon} alt="addFolder" />
        </button>
      </div>
      {selectedFolder !== "전체" ? (
        <div className="folderOption-container">
          <p className="folderName">{selectedFolder}</p>
          <div className="folderOption">
            <div>
              <Image src={shareIcon} alt="shareImg" />
              <p>공유</p>
            </div>
            <div>
              <Image src={penIcon} alt="penImg" />
              <p>이름 변경</p>
            </div>
            <div>
              <Image src={deleteIcon} alt="deleteImg" />
              <p>삭제</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="folderOption-container">
          <p className="folderName">{selectedFolder}</p>
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FolderCard linkToFetch={linkToFetch} searchWord={searchWord} />
      </div>
    </div>
  );
}
export default FolderList;
