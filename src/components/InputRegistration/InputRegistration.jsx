import { registrationInput } from "../../constants/input";
import "./InputRegistration.css";

const inputRegistration = () => {
  return (
    <div className="registration-void">
      {registrationInput.map((el) => (
        <div>
          <input
            className={"registration-input"}
            placeholder={el.placeholder}
            type="text"
          />
        </div>
      ))}
    </div>
  );
};

export default inputRegistration;
