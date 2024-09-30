import DList from "../DList/DList";
import "./YouDonation.css";

const YouDonation = () => {
  return (
    <div className="all-you-donation">
      <div className="left-you-donation-content">
        <div>
          <p className="you-donation-title">Вы пожертвовали</p>
        </div>
        {/* <div>
          <p className="donation-day">18 ноября 2024</p>
          <p className="donation-input">2700 ₽</p>
        </div>
        <div>
          <p className="donation-day">23 сентября 2024</p>
          <p className="donation-input">1300 ₽</p>
        </div>
        <div>
          <p className="donation-day">10 августа 2024</p>
          <p className="donation-input">1100 ₽</p>
        </div> */}
        <DList />
        <div>
          <p className="show-more-donation">Показать ещё</p>
        </div>
      </div>
      <div className="right-you-donation-content">
        <p className="title-right-content">
          Благодарим вас за ваш вклад!
          <p className="opis-right-content">
            Ваши пожертвования будут направлены на питание, лечение и
            обустройство животных.
          </p>
        </p>
      </div>
    </div>
  );
};

export default YouDonation;
