import { allAnimal } from "../../constants/slide";
import "./Animals.css";
import AnimalImgHeart from "../AnimalImgHeart/AnimalImgHeart";

const Animals = () => {
  return (
    <div className="animal-page">
      <div>
        <p className="animal-title">Животных: 36</p>
      </div>
      <div className="animal-img-block">
        {allAnimal.map((el) => {
          return <AnimalImgHeart key={el.id} el={el}/>
        })}
      </div>
    </div>
  );
};

export default Animals;
