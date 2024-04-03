import React from "react";
import "../../styles/footer.css";
import Image from "next/image";
import facebook from "@/public/images/facebook.png";
import twitter from "@/public/images/twitter.png";
import youtube from "@/public/images/youtube.png";
import instagram from "@/public/images/instagram.png";
function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-codeit">©codeit - 2023</p>
      <div className="footer-link">
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className="footer-sns">
        <Image width={20} height={20} src={facebook} alt="facebook" />
        <Image width={20} height={20} src={twitter} alt="twitter" />
        <Image width={20} height={20} src={youtube} alt="youtube" />
        <Image width={20} height={20} src={instagram} alt="instagram" />
      </div>
    </div>
  );
}
export default Footer;
