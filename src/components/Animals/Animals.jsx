import React from "react";
import { allAnimal } from "../../constants/slide";
import "./Animals.css";

const Animals = () => {
  return (
    <div className="animal-page">
      <div>
        <p className="animal-title">Животные: 36</p>
      </div>
      <div className="animal-img-block">
        {allAnimal.map((el) => (
          <div className="img-block">
            <img className="animal-img" src={el.src} alt="" />
          </div>
        ))}
      </div>
      <div>
        <p className="zxczxc">Показать еще</p>
      </div>
    </div>
  );
};

export default Animals;
