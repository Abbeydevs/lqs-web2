import React from "react";
import Link from "next/link";
import "./feature.css";

export const Feature = () => {
  return (
    <div className="feature-container">
      <div className="left-f">
        <p>
          We understand the importance of looking after loved ones. It means
          everything to us - just as it means everything to our customers.
        </p>
        <p className="sm-p">
          We believe in always treating everyone with dignity and respect and we
          adopt a person-centred approach.
        </p>
        <br />
        <Link href="https://lqshealthcareservices.co.uk/about.html">
          <button>Learn more</button>
        </Link>
      </div>
      <div className="right-f">
        <p className="rf-title">LQS offer services in these areas:</p>
        <p className="sm-p">
          Caring for our clients is at the heart of everything we do. Showing
          compassion and kindness to our clients and each other will ensure we
          are well led and deliver safe care every day.
        </p>
        <div className="service-ls">
          <ul>
            <li>Home Care and Support</li>
            <li>Specialist Care</li>
            <li>24hrs/day, 7days a Week</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
