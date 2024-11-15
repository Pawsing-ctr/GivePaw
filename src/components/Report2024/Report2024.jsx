import React from 'react';
import ModalImage from "react-modal-image";
import "./Report2024.css"

const Report2024 = () => {
  return (
    <div className='all-report2024'>
      <div className='check-title'>
      <p className='report'>Отчеты за 2024 год</p>
      <p className='count-report'>10160 руб. — корм ProХвост</p>
      </div>
      <div className='check-img'>
        
        <ModalImage
        small={"../CheckPay/firstcheck.jpeg"}
        medium={"../CheckPay/firstcheck.jpeg"}
        large={"../CheckPay/firstcheck.jpeg"}
        className='firstcheck'
      />
      <ModalImage
        small={"../CheckPay/secondcheck.jpg"}
        medium={"../CheckPay/secondcheck.jpg"}
        large={"../CheckPay/secondcheck.jpg"}
        className='secondcheck'
      />
      </div>
    </div>
  );
};

export default Report2024;