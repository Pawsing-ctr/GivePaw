import React, { useState } from "react";
import ReactModal from "react-modal";

const StartVolunteers = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  return (
    <>
      <button onClick={handleOpenModal} className="title-button">
        Добавить задачу в категорию
      </button>
      <ReactModal
        shouldCloseOnOverlayClick={true}
        className={"modal"}
        isOpen={isOpenModal}
      >
        <button className="modal-button" onClick={handleCloseModal}>
          Выйти
        </button>
      </ReactModal>
    </>
  );
};

export default StartVolunteers;
