"use client";

import { useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { MdCall } from 'react-icons/md'
import "./nav.css";

export default function Nav() {
  //Navbar for mobile and tablet devices
  const [mobileNav, setMobileNavbar] = useState(false);
  const handleMobileNav = () => {
    setMobileNavbar(!mobileNav);
  };

  return (
    <nav className="nav">
      <div className="navigation">
        <Link href="/">
          <Image src={logo} alt="lqs logo" className="lqs-logo" />
        </Link>
        <div className={mobileNav ? "nav-links open" : "nav-links"}>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="https://lqshealthcareservices.co.uk/about.html">
              <li>LQS Team</li>
            </Link>
            <Link href="https://lqshealthcareservices.co.uk/services.html">
              <li>Care Services we provide</li>
            </Link>
            <Link href="https://lqshealthcareservices.co.uk/testimonial.html">
              <li>Review</li>
            </Link>
            <Link href="https://lqshealthcareservices.co.uk/contact.html">
              <li>Contact</li>
            </Link>
          </ul>
          <div className="number">
            <MdCall />
            <Link href="tel:01903930455">+01903 930 455</Link>
          </div>
        </div>
        <div className="hamburger" onClick={handleMobileNav}>
          <Hamburger size={25} />
        </div>
      </div>
    </nav>
  );
}
