import React from "react";
import "./Info.css";
import Footer from "../Footer/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Info = () => {
  return (
    <div className="">
      <div className="title-information">
        <div className="platform-inf">
          <p className="title-text">О платформе “Дай лапу”</p>
        </div>
        <div className="all-text">
          <div>
            <p className="description-platform">
              Фонд “Дай лапу” это благотворительный фонд. Здесь мы вместе
              собираем средства чтобы помочь бездомным животным. На нашей
              платформе любой может сделать пожертвование всего в пару кликов.
              Все финансовые сборы ведутся с полной отчетностью о расходах и в
              реальном времени.
            </p>
          </div>
          <div>
            <p className="description-platform">
              Наша миссия - помочь бездомным кошкам и собакам найти новый дом, а
              так же предоставить необходимую медицинскую. помощь и заботу. Мы
              стремимся к тому чтобы спасти как можно больше бездомных животных,
              чтобы они нашли новый дом и хозяев, и получили шанс на новую и
              счастливую жизнь.
            </p>
          </div>
          <div>
            <p className="color-text-info">
              Помагая животным мы помогаем и себе стать лучше и добрее. Давайте
              дарить тепло - вместе!
            </p>
          </div>
        </div>
      </div>
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
            <img
              src="../dog1.png"
              alt="Cat 2"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div>
            <img
              src="../kitty2.png"
              alt="Kitty 2"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div>
            <img
              src="../dog3.jpg"
              alt="Dog 3"
              style={{ borderRadius: "20px" }}
            />
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
            <img
              src="../dog4.jpg"
              alt="dog 4"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </Carousel>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Info;
