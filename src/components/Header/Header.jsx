import React, { useState } from "react";
import "./Header.css";
import { navigationLink } from "../../constants/navigationLink";
import { Link, useNavigate } from "react-router-dom";
import { RoutePass } from "../../constants/routePass";
import cn from "classnames";
import ReactModal from "react-modal";
import Input from "../Input/Input";
import { registrationInput } from "../../constants/input";

const Header = () => {
  const [activeLink, setActiveLink] = useState(1);

  const [sureName, setSureName] = useState("");
  // const [activeLink, setActiveLink] = useState(1);
  // const [activeLink, setActiveLink] = useState(1);
  // const [activeLink, setActiveLink] = useState(1);
  // const [activeLink, setActiveLink] = useState(1);

  const handleSetActiveLink = (id) => {
    setActiveLink(id);
  };
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

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
      <button onClick={handleOpenModal} className="login-button">
        Войти
      </button>
      <ReactModal
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        className={"modal"}
        isOpen={isOpenModal}
        overlayClassName="modal-overlay"
      >
        <div className="all-modal-registration">
          <div>
            <p className="registration-title">Стать волонтёром</p>
          </div>
          <div className="asdasd">
            <p className="registration">Регистрация</p>
            <div className="input-block-registration">
              <input
                placeholder="Фамилия"
                onChange={(event) => setSureName(event.target.value)}
                value={sureName}
                className="registration-input"
                type="text"
              />
              <input
                placeholder="Имя"
                className="registration-input"
                type="text"
              />
              <input
                placeholder="Номер телефона"
                className="registration-input"
                type="text"
              />
              <input
                placeholder="Придумайте пароль"
                className="registration-input"
                type="password"
              />
              <input
                placeholder="Подтвердите пароль"
                className="registration-input"
                type="password"
              />
            </div>
          </div>
          <div>
            <button className="registration-button">Зарегестрироваться</button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default Header;
