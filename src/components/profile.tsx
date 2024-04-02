"use client";
import React from "react";
import { useEffect, useState } from "react";
import "../../styles/profile.css";
import fetchData from "../apis/FetchData";
import Image from "next/image";
interface User {
  userEmail: string | null;
  userImg: string | null;
}
function Profile() {
  const [user, setUser] = useState<User | null>({
    userEmail: null,
    userImg: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData("sample/user");
        if (data) {
          setUser({
            userEmail: data.email,
            userImg: data.profileImageSource,
          });
        }
      } catch (e) {
        console.error(e);
        alert("error" + e);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      {user == null ? (
        <button>로그인</button>
      ) : (
        <div className="profile-container">
          <Image
            width={28}
            height={28}
            className="userImg"
            src={user.userImg ?? ""}
            alt="userImg"
          />
          <p className="userEmail">{user.userEmail}</p>
        </div>
      )}
    </div>
  );
}
export default Profile;
