import { registrationInput } from "../../constants/input";
import "./InputRegistration.css";

const InputRegistration = () => {
  return (
    <div className="registration-void">
      {registrationInput.map((el) => (
        <div>
          <input
            className="registration-input"
            placeholder={el.placeholder}
            type={el.type}
          />
        </div>
      ))}
    </div>
  );
};

export default InputRegistration;
