import "./Button.css";

const Button = ({ onClick, content }) => {
  return <button onClick={onClick}>{content}</button>;
};

export default Button;
