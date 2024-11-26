import React, { useState } from "react";
import Heart from "../../assets/Heart";

const AnimalImgHeart = ({ el }) => {
  const [colorHeart, setColorHeart] = useState("white");

  const handleFavotireKitty = () => {
    if(colorHeart === "white"){
      setColorHeart("red")
    }
    else{
      setColorHeart("white")
    }
  };

  return (
    <div className="img-block">
      <img className="animal-img" src={el.src} alt="" />
      <img
        onClick={handleFavotireKitty}
        className="heart-img"
        src={el.heart}
        alt=""
      />
      <div onClick={handleFavotireKitty} className="heart-img">
        <Heart  color={colorHeart} />
      </div>
    </div>
  );
};

export default AnimalImgHeart;
