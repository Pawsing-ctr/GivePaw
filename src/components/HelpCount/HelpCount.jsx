import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../redux/slice/countSlice";
const HelpCount = () => {
  return (
    <div className="stat-count">
      <div className="zxc">
        <div className="live-count">
          <div className="title-save">
            <p className="live-number">54</p>
            <p className="live-text">Животных спасено</p>
          </div>
        </div>
        <div className="border-block" />
        <div className="live-count">
          <div className="title-save">
            <p className="live-number">70,000 ₽</p>
            <p className="live-text">Собрано средств</p>
          </div>
        </div>
        <div className="border-block" />
        <div className="live-count">
          <div className="title-save">
            <p className="live-number">48</p>
            <p className="live-text">Животных нашли дом</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCount;
