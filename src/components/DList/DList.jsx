import { useSelector } from "react-redux";

const DList = ({ isShowMore }) => {
  const { donats } = useSelector((state) => state.donats);
  const filteredList = isShowMore ? donats : donats.slice(0, 4);

  return (
    <div>
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
