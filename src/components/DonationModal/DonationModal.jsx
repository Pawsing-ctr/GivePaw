import "../DonationModal/DonationModal.css";
import "../Header/Header.css";

const DonationModal = () => {
  return (
    <div className="all-help-modal">
      <div className="help-modal-text">
        <p className="help-modal-title">Помочь сейчас</p>
        <p className="help-modal-donate">Сумма пожертвования:</p>
      </div>
      <div>
        <input className="help-modal-input" placeholder="0,00 ₽" type="text" />
      </div>
      <div className="help-modal-sum">
        <p className="sum-number">+100</p>
        <p className="sum-number">+200</p>
        <p className="sum-number">+500</p>
        <p className="sum-number">+1000</p>
      </div>
      <div>
        <button className="donation-button">Помочь</button>
      </div>
    </div>
  );
};

export default DonationModal;
