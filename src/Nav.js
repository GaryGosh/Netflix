import React, { useState } from "react";
import { useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Nteflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
