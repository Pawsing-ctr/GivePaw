import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { useCallback, useRef } from "react";
import "swiper/css";
import "swiper/css/autoplay";

const PetSlider = ({ slides, sliderTitle }) => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="carousel-container">
      <div className="slider-header">
        <span className="carousel-text">{sliderTitle}</span>
        <div className="slider-arrows">
          <button
            onClick={handlePrev}
            type="button"
            className="custom-prev-arrow"
          >
            <img
              className="arrow-left-slider"
              src="../ArrowLeft.png"
              alt="Prev"
            />
          </button>

          <button
            onClick={handleNext}
            type="button"
            className="custom-next-arrow"
          >
            <img
              className="arrow-right-slider"
              src="../ArrowRight.png"
              alt="Next"
            />
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={60}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        ref={sliderRef}
      >
        {slides.map((el) => (
          <SwiperSlide key={el.id}>
            <div>
              <img className="pet" src={el.src} alt="#" />
              {!!el.teamName && (
                <div className="team-name-title">{el.teamName}</div>
              )}
              {!!el.teamPosition && (
                <div className="positoin-worker-title">{el.teamPosition}</div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PetSlider;
