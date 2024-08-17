"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import useCheckMobileScreen from "./hooks/useCheckMobileScreeen";

export default function Header() {
  const [navBar, setNavbar] = useState(false);
  const { isMobile, isIpad } = useCheckMobileScreen();

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
        <div className={`nav-elements ${navBar ? "active" : ""}`}>
          <ul className={`flex ${isMobile ? "flex--direction-column " : ""} nav-item`}>
            <li className="nav-list">HOME</li>
            <li className="nav-list">LOCATION</li>
            <li className="nav-list">ABOUT</li>
            <li className="nav-list">CONTACT</li>
            <li>
              <button className="btn btn--login-btn" id="login-mob">
                LOGIN
              </button>
            </li>
          </ul>
        </div>
        <button className="btn btn--login-btn" id="login">
          LOGIN
        </button>
      </nav>
    </section>
  );
}
