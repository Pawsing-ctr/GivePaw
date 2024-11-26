import React, { useState } from "react";
import "./Header.css";
import { navigationLink } from "../../constants/navigationLink";
import { Link, useNavigate } from "react-router-dom";
import { RoutePass } from "../../constants/routePass";
import cn from "classnames";
import ReactModal from "react-modal";
import { enqueueSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slice/userSlice";
import { CustomCursor } from "@feverus/react-custom-cursor";
import "@feverus/react-custom-cursor/dist/style.css";
import Cursor from "../../Icons/Cursor";

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [sureName, setSureName] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [replayPassword, setReplayPassword] = useState("");
  const [loginPhoneNumber, setLoginPhoneNumber] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { user } = useSelector((state) => state.user);
  const localUser = localStorage.getItem("newUser");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleError = (message) => {
    enqueueSnackbar({
      message: message,
      variant: "error",
    });
  };

  const handleSuccess = (message) => {
    enqueueSnackbar({
      message: message,
      variant: "success",
    });
  };

  const handleLogin = () => {
    if (!loginPhoneNumber.trim()) {
      return handleError("Введите номер!");
    }
    if (!loginPassword.trim()) {
      return handleError("Введите пароль!");
    }
    return handleError("Пользователя с такими данными не существует");
  };

  const handleRegistration = () => {
    if (!sureName.trim()) {
      return handleError("Введите фамилию!");
    }
    if (!name.trim()) {
      return handleError("Введите имя!");
    }
    if (!phoneNumber.trim()) {
      return handleError("Введите номер!");
    }
    if (!password.trim()) {
      return handleError("Введите пароль!");
    }
    if (!replayPassword.trim()) {
      return handleError("Введите повторно пароль!");
    }
    if (password !== replayPassword) {
      return handleError("Пароли не совпадают!");
    }

    const newUser = {
      sureName,
      name,
      phoneNumber,
      password,
    };

    dispatch(setUser(newUser));

    localStorage.setItem("newUser", JSON.stringify(newUser));

    finalClosedRegisterModal();

    handleSuccess("Вы успешно зарегестрировались!");
  };

  const handleSetActiveLink = (id) => {
    setActiveLink(id);
  };

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

  const finalClosedRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleLogo = () => {
    navigate(RoutePass.Home);
    handleSetActiveLink(0);
  };

  const userName = `${user?.sureName} ${user?.name}`;

  return (
    <div className="header">
      <img onClick={handleLogo} src="../Logov2.png" alt="" className="logo" />
      <CustomCursor scale={1.2} hoverClassName="qwerqwer" cursor={<Cursor />}>
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
      </CustomCursor>

      {user ? (
        <button className="login-button">{userName}</button>
      ) : (
        <button onClick={openLoginModal} className="login-button">
          Войти
        </button>
      )}
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
              maxLength={12}
              className="registration-input"
              placeholder="Номер телефона"
              onChange={(e) => setLoginPhoneNumber(e.target.value)}
              value={loginPhoneNumber}
            />
            <input
              className="registration-input"
              placeholder="Пароль"
              type="password"
              onChange={(e) => setLoginPassword(e.target.value)}
              value={loginPassword}
            />
          </div>
          <div>
            <p className="forgot-your-password">Забыли пароль?</p>
          </div>
          <div>
            <button onClick={handleLogin} className="registration-button">
              Войти
            </button>
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
              <input
                className="registration-input"
                placeholder="Фамилия"
                type="text"
                onChange={(e) => setSureName(e.target.value)}
                value={sureName}
              />
              <input
                className="registration-input"
                placeholder="Имя"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                maxLength={12}
                className="registration-input"
                placeholder="Номер телефона"
                // type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
              <input
                className="registration-input"
                placeholder="Придумайте пароль"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <input
                className="registration-input"
                placeholder="Подтвердите пароль"
                type="password"
                onChange={(e) => setReplayPassword(e.target.value)}
                value={replayPassword}
              />
              {/* <InputRegistration /> */}
            </div>
          </div>
          <button onClick={handleRegistration} className="registration-button">
            Зарегестрироваться
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default Header;
