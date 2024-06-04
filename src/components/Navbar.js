import React from "react";
import { GiBananaPeeled } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSideBar = () => {
    setIsOpen(true);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav>
        <a href="#home" className="logo">
          <GiBananaPeeled size={30} />
          <h3>fruitsWorld</h3>
        </a>
        <div className="list">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              {" "}
              <a href="#products">Products</a>
            </li>
            <li>
              {" "}
              <a href="#blog">Blog</a>
            </li>
            <li>
              {" "}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="sidebar_icon" onClick={openSideBar}>
          <FiMenu size={30} color="#2c5539" />
        </div>
      </nav>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <FiX className="close_btn" size={30} onClick={closeSidebar} />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            {" "}
            <a href="#categories">Categories</a>
          </li>
          <li>
            {" "}
            <a href="#products">Products</a>
          </li>
          <li>
            {" "}
            <a href="#about">About</a>
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
