import { useState } from "react";
import DList from "../DList/DList";
import "./YouDonation.css";
import { useSelector } from "react-redux";

const YouDonation = () => {
  const { donats } = useSelector((state) => state.donats);
  const [isShowMore, setIsShowMore] = useState(false);

  const handleShowMore = () => {
    setIsShowMore((prev) => !prev);
  };

  return (
    <div className="all-you-donation">
      <div className="left-you-donation-content">
        <div>
          <span className="you-donation-title">Вы пожертвовали</span>
        </div>
        <DList isShowMore={isShowMore} />
        {donats?.length > 3 && (
          <p onClick={handleShowMore} className="show-more-donation">
            {isShowMore ? "Скрыть" : "Показать ещё"}
          </p>
        )}
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
