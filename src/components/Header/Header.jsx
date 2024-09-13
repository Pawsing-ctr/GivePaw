import React, { useState } from "react";
import "./Header.css";
import { navigationLink } from "../../constants/navigationLink";
import { Link, useNavigate } from "react-router-dom";
import { RoutePass } from "../../constants/routePass";
import cn from "classnames";

const Header = () => {
  const [activeLink, setActiveLink] = useState(1);
  const handleSetActiveLink = (id) => {
    setActiveLink(id);
  };
  const navigate = useNavigate();

  return (
    <div className="header">
      <div onClick={() => navigate(RoutePass.Home)} className="logo">
        <img src="../Logov2.png" alt="" />
      </div>
      <nav className="nav-menu">
        {navigationLink.map((link) => (
          <Link
            onClick={() => handleSetActiveLink(link.id)}
            key={link.to}
            className={cn("link-item", { isActive: link.id === activeLink })}
            to={link.to}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <button className="login-button">Войти</button>
    </div>
  );
};

export default Header;
