import { useSelector } from "react-redux";

const DList = () => {
  const { value } = useSelector((state) => state.value);
  const localDonat = localStorage.getItem("newDonation");
  console.log(localDonat);

  // const zxcv = `${localDonat.donationInput}`;
  return (
    <div>
      <div>
        <p className="donation-day">18 ноября 2024</p>
        <p className="donation-input">{localDonat.donationInput}</p>
      </div>
    </div>
  );
};

export default DList;
