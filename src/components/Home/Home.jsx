import React from "react";
import "../Home/Home.css";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="left-content">
          <div className="main-title">
            <p className="title-content">Фонд для помощи бездомным животным</p>
            <p className="description-content">
              Животные в нас нуждаются, они хотят поддержки
            </p>
          </div>
          <button className="home-button">Помочь сейчас</button>
        </div>
        <div className="right-content">
          <div>
            <img className="img-home" src="../scale_1200 1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
