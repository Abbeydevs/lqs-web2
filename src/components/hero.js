import React from "react";
import Image from "next/image";
import img1 from "../../public/images/img_1.jpg";
import img2 from "../../public/images/img_2.jpg";
import img3 from "../../public/images/img_4.jpg";
import img4 from "../../public/images/hero-img1.png";
import Link from "next/link";

import "./hero.css";

export const Hero = () => {
  return (
    <div className="hero-container">
      <p>LQS Healthcare Services</p>
      <h3>Dependable Healthcare Provider making your life better</h3>
      <div className="h-contents">
        <div className="hero-options">
          <div className="card">
            <Image src={img1} alt="options" width={250} className="card-img" />
            <div className="card-content">
              <h2>Nursing and Allied Health Professionals</h2>
              <Link href="https://lqshealthcareservices.co.uk/services.html">
                <button>Learn more</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <Image src={img2} alt="options" width={250} className="card-img" />
            <div className="card-content">
              <h2>Care Services </h2>
              <Link href="https://lqshealthcareservices.co.uk/services.html">
                <button>Learn more</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <Image src={img3} alt="options" width={250} className="card-img" />
            <div className="card-content">
              <h2>Recruitment Agency Services </h2>
              <Link href="https://lqshealthcareservices.co.uk/services.html">
                <button>Learn more</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="out-card">
          <Image src={img4} alt="options" width={320} />
        </div>
      </div>
      <Link href="https://lqshealthcareservices.co.uk/services.html">
        <p className="serv">Explore more services</p>
      </Link>
    </div>
  );
};
