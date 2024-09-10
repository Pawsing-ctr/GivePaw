import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Slider/Slider.css";
// import ArrowLeft from "../../../public/ArrowLeft.jsx";

const Slider = () => {
  return (
    <Carousel
      dynamicHeight={false}
      infiniteLoop
      centerSlidePercentage={25}
      centerMode={true}
      autoPlay
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      selectedItem={0}
      itemClass="carousel-photo"
      renderArrowPrev={() => (
        <img
          style={{ height: "50px", width: "auto" }}
          src="../ArrowLeft.png"
          alt=""
        />
      )}
      renderArrowNext={() => (
        <img
          style={{ height: "50px", width: "auto" }}
          src="../ArrowRight.png"
          alt=""
        />
      )}
    >
      <div>
        <img
          style={{ borderRadius: "20px" }}
          className="img-saved-animal"
          src="../Kitti1.png"
        />
      </div>
      <div>
        <img
          style={{ borderRadius: "20px" }}
          className="img-saved-animal"
          src="../dog1.png"
        />
      </div>
      <div>
        <img
          style={{ borderRadius: "20px" }}
          className="img-saved-animal"
          src="../kitty2.png"
        />
      </div>
    </Carousel>
  );
};

export default Slider;
