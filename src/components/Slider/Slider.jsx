import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Slider/Slider.css";

// const Slider = () => {
//   return (
//     <Carousel
//       infiniteLoop
//       centerMode={true}
//       centerSlidePercentage={20}
//       autoPlay
//       showThumbs={false}
//       showStatus={false}
//       showIndicators={false}
//       interval={3000}
//       transitionTime={500}
//       renderArrowNext={(onClickHandler, hasNext, label) =>
//         hasNext && (
//           <button
//             type="button"
//             onClick={onClickHandler}
//             className="custom-next-arrow"
//             aria-label={label}
//           >
//             <img src="../ArrowRight.png" alt="Next" />
//           </button>
//         )
//       }
//       renderArrowPrev={(onClickHandler, hasPrev, label) =>
//         hasPrev && (
//           <button
//             type="button"
//             onClick={onClickHandler}
//             className="custom-prev-arrow"
//             aria-label={label}
//           >
//             <img src="../ArrowLeft.png" alt="Prev" />
//           </button>
//         )
//       }
//     >
//       <div>
//         <img src="../Kitti1.png" alt="Cat 1" style={{ borderRadius: "20px" }} />
//       </div>
//       <div>
//         <img src="../dog1.png" alt="Cat 2" style={{ borderRadius: "20px" }} />
//       </div>
//       <div>
//         <img src="../kitty2.png" alt="Dog 1" style={{ borderRadius: "20px" }} />
//       </div>
//     </Carousel>
//   );
// };

// export default Slider;

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="slider-header">
        <span className="carousel-text">Нашли хозяина</span>
        <div className="slider-arrows">
          <button type="button" className="custom-prev-arrow">
            <img src="../ArrowLeft.png" alt="Prev" />
          </button>

          <button type="button" className="custom-next-arrow">
            <img src="../ArrowRight.png" alt="Next" />
          </button>
        </div>
      </div>

      <Carousel
        infiniteLoop
        centerMode={true}
        centerSlidePercentage={20}
        autoPlay
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={3000}
        transitionTime={500}
      >
        <div>
          <img
            src="../Kitti1.png"
            alt="Kitty 1"
            style={{ borderRadius: "20px" }}
          />
        </div>
        <div>
          <img src="../dog1.png" alt="Cat 2" style={{ borderRadius: "20px" }} />
        </div>
        <div>
          <img
            src="../kitty2.png"
            alt="Kitty 2"
            style={{ borderRadius: "20px" }}
          />
        </div>
        <div>
          <img src="../dog3.jpg" alt="Dog 3" style={{ borderRadius: "20px" }} />
        </div>
        <div>
          <img
            src="../kitty4.jpg"
            alt="Kitty 4"
            style={{ borderRadius: "20px" }}
          />
        </div>
        <div>
          <img
            src="../kitty5.jpg"
            alt="Kitty 5"
            style={{ borderRadius: "20px" }}
          />
        </div>
        <div>
          <img src="../dog4.jpg" alt="dog 4" style={{ borderRadius: "20px" }} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
