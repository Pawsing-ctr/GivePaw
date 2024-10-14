import { useSelector } from "react-redux";
import "./DList.css";

const DList = ({ isShowMore }) => {
  const { donats } = useSelector((state) => state.donats);
  const filteredList = isShowMore ? donats : donats.slice(0, 4);

  return (
    <div className="all-you-donaition-sum">
      {filteredList.map((el) => (
        <div>
          <p className="donation-day">{el.date}</p>
          <p className="donation-input">{el.donationInput}</p>
        </div>
      ))}
    </div>
  );
};

export default DList;
