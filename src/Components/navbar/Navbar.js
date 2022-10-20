import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { FaBars, FaCut } from "react-icons/fa";

const MenuItem = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Liabrary</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
    <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-links_logo">
        <img src={logo} />
      </div>
      <div className="gpt3__navbar-links_container">
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT3?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
      </div>
    </div>
    <div className="gpt3__navbar-sign">
      <p>Sign in</p>
      <button type="button">Sign up</button>
    </div>
    <div className="gpt3__navbar-menu">
      {toggleMenu
        ? <FaCut color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <FaBars color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
      <div className="gpt3__navbar-menu_container scale-up-center">
        <div className="gpt3__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
        <div className="gpt3__navbar-menu_container-links-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
      </div>
      )}
    </div>
  </div>
  );
};

export default Navbar;
