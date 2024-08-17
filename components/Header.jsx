"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
  const [navBar, setNavbar] = useState(false);

  const handleShowNavbar = () => {
    setNavbar(!navBar);
  };

  return (
    <section className="navbar">
      <nav className="container--responsive pd--20 flex flex--justify-content-between flex--align-items-center">
        <div className="log0">
          <Image
            src={"/assets/images/brand_logo.svg"}
            width={150}
            height={150}
            alt="logo"
          />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <CiMenuFries />
        </div>
        <div className={`nav-elemnts ${navBar && "active"}`}>
          <ul className="flex">
            <li className="nav-list">HOME</li>
            <li className="nav-list">LOCATION</li>
            <li className="nav-list">ABOUT</li>
            <li className="nav-list">CONTACT</li>
          </ul>
        </div>
        <button className="btn btn--login-btn">LOGIN</button>
      </nav>
    </section>
  );
}
