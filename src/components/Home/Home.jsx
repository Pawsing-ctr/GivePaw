import React from "react";
import "../Home/Home.css";
import Footer from "../Footer/Footer.jsx";
import { petsSlides } from "../../constants/slide.js";
import PetSlider from "../PetSlider/PetSlider.jsx";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="background-img" />
        <div className="left-content">
          <div className="main-title">
            <p className="title-content">Фонд для помощи бездомным животным</p>
          </div>
          <p className="description-content">
            Животные в нас нуждаются, они хотят поддержки
          </p>
          <div>
            <button className="home-button">Помочь сейчас</button>
          </div>
        </div>
        <div className="right-content">
          <div>
            <img className="img-home" src="../scale_1200 1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="stat-count">
        <div className="zxc">
          <div className="live-count">
            <div className="title-save">
              <p className="live-number">54</p>
              <p className="live-text">Животных спасено</p>
            </div>
          </div>
          <div className="border-block" />
          <div className="live-count">
            <div className="title-save">
              <p className="live-number">70,000 ₽</p>
              <p className="live-text">Собрано средств</p>
            </div>
          </div>
          <div className="border-block" />
          <div className="live-count">
            <div className="title-save">
              <p className="live-number">48</p>
              <p className="live-text">Животных нашли дом</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PetSlider slides={petsSlides} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
