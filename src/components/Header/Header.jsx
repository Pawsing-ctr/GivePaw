import React from "react";
import "./Header.css";
import { navigationLink } from "../../constants/navigationLink";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="../Logov2.png" alt="" />
      </div>
      <nav className="nav-menu">
        {navigationLink.map((link) => (
          <Link key={link.to} className="link-item" to={link.to}>
            {link.title}
          </Link>
        ))}
      </nav>
      <button className="login-button">Войти</button>
    </div>
  );
};

export default Header;
