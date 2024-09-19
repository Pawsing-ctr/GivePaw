import React from "react";
import { volunteersTeamMas } from "../../constants/slide";
import "../Volunteers/Volunteers.css";
import Footer from "../Footer/Footer";

const Volunteers = () => {
  return (
    <div className="all-page-volunteers">
      <div>
        <p className="volunteers-count">Волонтёры: 16</p>
      </div>
      <div className="volunteers">
        {volunteersTeamMas.map((el) => (
          <div className="volunteers-element">
            <img src={el.src} alt="" />
            <div>
              <p className="volunteers-title-name">{el.volunteersName}</p>
            </div>
            <div className="volunteers-saved-animal">
              <p>{el.helpAnimal}</p>
              <div className="volunteers-saved-block" />
              <p>{el.attachedAnimal}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Volunteers;
