import { useDispatch, useSelector } from "react-redux";
import "../DonationModal/DonationModal.css";
import "../Header/Header.css";
import { addDonation } from "../../redux/slice/donatsSlice";
import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";

const DonationModal = () => {
  const { donats } = useSelector((state) => state.donats);

  const dispatch = useDispatch();
  const [donationInput, setDonationInput] = useState("");

  const handleSumDonationPrice = (value) => {
    setDonationInput(String(Number(donationInput) + value));
  };

  const handleSuccess = (message) => {
    enqueueSnackbar({
      message: message,
      variant: "success",
    });
  };

  const handleDonation = () => {
    const newDonat = {
      date: new Date().toLocaleDateString(),
      donationInput,
    };

    dispatch(addDonation(newDonat));

    handleSuccess("Спасибо за поддержку!");
    setDonationInput("");
  };

  useEffect(() => {
    if (donats?.length) {
      localStorage.setItem("donats", JSON.stringify(donats));
    }
  }, [donats]);

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
          type="number"
        />
      </div>
      <div className="help-modal-sum">
        <button
          onClick={() => handleSumDonationPrice(100)}
          className="sum-number"
        >
          +100
        </button>
        <button
          onClick={() => handleSumDonationPrice(200)}
          className="sum-number"
        >
          +200
        </button>
        <button
          onClick={() => handleSumDonationPrice(500)}
          className="sum-number"
        >
          +500
        </button>
        <button
          onClick={() => handleSumDonationPrice(1000)}
          className="sum-number"
        >
          +1000
        </button>
      </div>
      <div>
        <button
          disabled={!Number(donationInput)}
          onClick={handleDonation}
          className="donation-button"
        >
          Помочь
        </button>
      </div>
    </div>
  );
};

export default DonationModal;
