import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="#">
          <img src="../Logov2.png" alt="Логотип" />
        </a>
      </div>
      <nav className="nav-menu">
        <a href="#">О фонде</a>
        <a href="#">Животные</a>
        <a href="#">Волонтеры</a>
        <a href="#">Стать волонтером</a>
      </nav>
      <button className="login-button">Войти</button>
    </div>
  );
};

export default Header;
