import React from "react";
import "./Header.css";
import { navigationLink } from "../../constants/navigationLink";
import { Link, useNavigate } from "react-router-dom";
import { RoutePass } from "../../constants/routePass";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div onClick={() => navigate(RoutePass.Home)} className="logo">
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
