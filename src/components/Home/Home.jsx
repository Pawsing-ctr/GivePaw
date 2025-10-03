import React, { useState } from "react";
import "../Home/Home.css";
import Footer from "../Footer/Footer.jsx";
import { petsSliderTitle, petsSlides } from "../../constants/slide.js";
import PetSlider from "../Slider/Slider.jsx";
import ReactModal from "react-modal";
import HelpCount from "../HelpCount/HelpCount.jsx";
import DonationModal from "../DonationModal/DonationModal.jsx";

const Home = () => {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const handleOpenHelpModal = () => {
    setIsHelpModalOpen(true);
  };

  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  return (
    <div className="home-page">
      <div className="main">
        <div className="background-img" />
        <div className="left-content">
          <div className="main-title">
            <p className="title-content">Фонд для помощи бездомным животным</p>
          </div>
          <p className="description-content">
            Животные в нас нуждаются, они хотят поддержки
          </p>
          <div>
            <button onClick={handleOpenHelpModal} className="home-button">
              Помочь сейчас
            </button>
          </div>
        </div>
        <div className="right-content">
          <div>
            <img className="img-home" src="../scale_1200 1.png" alt="" />
          </div>
        </div>
      </div>
      <HelpCount />
      <div>
        <PetSlider sliderTitle={petsSliderTitle} slides={petsSlides} />
      </div>
      <Footer />
      <ReactModal
        isOpen={isHelpModalOpen}
        onRequestClose={closeHelpModal}
        shouldCloseOnOverlayClick={true}
        className={"modal"}
        overlayClassName="modal-overlay"
      >
        <DonationModal />
      </ReactModal>
    </div>
  );
};

export default Home;
