import React from "react";
import Profile from "./profile";
import "../../styles/HeaderNavigation.css";
import Link from "next/link";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
function HeaderNavigation() {
  return (
    <div className="Header-Container">
      <div className="Header">
        <Link href="/">
          <Image
            width={133}
            height={24}
            className="logo"
            src={Logo}
            alt="logo"
          />
        </Link>
        <Profile />
      </div>
    </div>
  );
}

export default HeaderNavigation;
