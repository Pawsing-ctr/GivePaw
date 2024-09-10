import React from "react";
import "./Info.css";

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
        </div>
      </div>
    </div>
  );
};

export default Info;
