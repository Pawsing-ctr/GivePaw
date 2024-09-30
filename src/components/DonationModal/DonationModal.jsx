import { useDispatch, useSelector } from "react-redux";
import "../DonationModal/DonationModal.css";
import "../Header/Header.css";
import {
  countPlus2Hungred,
  countPlus5Hungred,
  countPlusHundred,
  countPlusThousand,
  setValue,
} from "../../redux/slice/countSlice";
import { useState } from "react";
import YouDonation from "../YouDonation/YouDonation";
import DList from "../DList/DList";
import { enqueueSnackbar } from "notistack";

const DonationModal = () => {
  const { value } = useSelector((state) => state.value);
  const localDonat = localStorage.getItem("newDonation");
  // console.log(value);

  const dispatch = useDispatch();
  const [donationInput, setDonationInput] = useState(0);

  dispatch(setValue());

  const handleSuccess = (message) => {
    enqueueSnackbar({
      message: message,
      variant: "success",
    });
  };

  const handleDonation = () => {
    const newDonat = {
      donationInput,
    };

    dispatch(setValue(newDonat));

    localStorage.setItem("newDonation", JSON.stringify(newDonat));

    handleSuccess("Спасибо за поддержку!");
  };

  return (
    <div className="all-help-modal">
      <div className="help-modal-text">
        <p className="help-modal-title">Помочь сейчас</p>
        <p className="help-modal-donate">Сумма пожертвования:</p>
      </div>
      <div>
        <input
          onChange={(e) => setDonationInput(e.target.value)}
          value={donationInput}
          className="help-modal-input"
          placeholder="0,00 ₽"
          type="text"
        />
      </div>
      <div className="help-modal-sum">
        {/* <p
          onClick={dispatch(countPlusHundred(donationInput))}
          className="sum-number"
        >
          +100
        </p>
        <p
          onClick={dispatch(countPlus2Hungred(donationInput))}
          className="sum-number"
        >
          +200
        </p>
        <p
          onClick={dispatch(countPlus5Hungred(donationInput))}
          className="sum-number"
        >
          +500
        </p>
        <p
          onClick={dispatch(countPlusThousand(donationInput))}
          className="sum-number"
        >
          +1000
        </p> */}
        {/* {youDonationList} */}
      </div>
      <div>
        <button onClick={handleDonation} className="donation-button">
          Помочь
        </button>
      </div>
    </div>
  );
};

export default DonationModal;
