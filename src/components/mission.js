import React from "react";
import Image from "next/image";
import footerImg from "../../public/images/about.png";
import "./mission.css";
import Link from "next/link";

export const Mission = () => {
  return (
    <div className="footer">
      <div className="footer-contents">
        <h1>LQS Mission Statement</h1>
        <p>
          LQS (Life Quality Service) strives to offer excellent and affordable
          home care services to individuals and families in and around West
          Sussex.
        </p>
        <p>
          Caring for our clients is at the heart of everything we do. Showing
          compassion and kindness to our clients and each other will ensure we
          are well led and deliver safe care every day. We belive in always
          treating everyone with dignity and respect and we adopt a
          person-centred approach.
        </p>
        <Link href="https://lqshealthcareservices.co.uk/about.html">
          <button>Explore all Services</button>
        </Link>
      </div>
      <div className="footer-contents">
        <Image src={footerImg} alt="footer" className="footer-img" />
      </div>
    </div>
  );
};
