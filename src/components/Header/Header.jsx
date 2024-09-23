import React, { useState } from "react";
import "./Header.css";
import { navigationLink } from "../../constants/navigationLink";
import { Link, useNavigate } from "react-router-dom";
import { RoutePass } from "../../constants/routePass";
import cn from "classnames";
import ReactModal from "react-modal";
import InputRegistration from "../InputRegistration/InputRegistration.jsx";

const Header = () => {
  const [activeLink, setActiveLink] = useState(1);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleSetActiveLink = (id) => {
    setActiveLink(id);
  };
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);
  // const handleCloseModal = () => {
  //   setIsOpenModal(false);
  // };
  // const handleOpenModal = () => {
  //   setIsOpenModal(true);
  // };

  const closeModal = () => {
    setIsOpenModal(false);
    setIsLoginModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const closeRegisterModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
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
      <button onClick={openLoginModal} className="login-button">
        Войти
      </button>
      <ReactModal
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        className={"modal"}
        isOpen={isLoginModalOpen}
        overlayClassName="modal-overlay"
      >
        <div className="all-model">
          <div>
            <p className="modal-title">Вход</p>
            <p onClick={openRegisterModal} className="modal-opis">
              Зарегистрироваться
            </p>
          </div>
          <div className="login-input-block">
            <input
              placeholder="Номер телефона"
              className="login-input"
              type="number"
            />
            <input
              placeholder="Пароль"
              className="login-input"
              type="password"
            />
          </div>
          <div>
            <p className="forgot-your-password">Забыли пароль?</p>
          </div>
          <div>
            <button className="registration-button">Войти</button>
          </div>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={isRegisterModalOpen}
        onRequestClose={closeModals}
        shouldCloseOnOverlayClick={true}
        className={"modal"}
        overlayClassName="modal-overlay"
      >
        <div className="all-modal-registration">
          <div className="all-registration-page">
            <div>
              <p className="registration">Регистрация</p>
            </div>
            <div>
              <p onClick={closeRegisterModal} className="modal-opis">
                Уже есть учетная запись
              </p>
            </div>
            <div className="input-block-registration">
              <InputRegistration />
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
