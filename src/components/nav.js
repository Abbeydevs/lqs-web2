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
            <Link href="/courses">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>LQS Team</li>
            </Link>
            <Link href="/pricing">
              <li>Care Services we provide</li>
            </Link>
            <Link href="/#faq">
              <li>Review</li>
            </Link>
            <Link href="/#faq">
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
