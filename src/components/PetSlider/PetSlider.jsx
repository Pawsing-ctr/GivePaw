import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./PetSlider.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { useCallback, useRef } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const PetSlider = ({ slides }) => {
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
        <span className="carousel-text">Нашли хозяина</span>
        <div className="slider-arrows">
          <button
            onClick={handlePrev}
            type="button"
            className="custom-prev-arrow"
          >
            <img src="../ArrowLeft.png" alt="Prev" />
          </button>

          <button
            onClick={handleNext}
            type="button"
            className="custom-next-arrow"
          >
            <img src="../ArrowRight.png" alt="Next" />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
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
            <img className="pet" src={el.src} alt="#" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PetSlider;
