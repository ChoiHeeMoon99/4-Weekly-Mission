import React from "react";
import "../../styles/footer.css";
import Image from "next/image";
function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-codeit">©codeit - 2023</p>
      <div className="footer-link">
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className="footer-sns">
        <Image
          width={20}
          height={20}
          src="/images/facebook.png"
          alt="facebook"
        />
        <Image width={20} height={20} src="/images/twitter.png" alt="twitter" />
        <Image width={20} height={20} src="/images/youtube.png" alt="youtube" />
        <Image
          width={20}
          height={20}
          src="/images/instagram.png"
          alt="instagram"
        />
      </div>
    </div>
  );
}
export default Footer;
