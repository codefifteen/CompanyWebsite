import React from "react";
import "../Styles/Header.css";
import Logo from "../Assets/codefifteen_official_logo_transparent.png";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={Logo} alt="codefifteen logo" />
        <div id="nav-items">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
