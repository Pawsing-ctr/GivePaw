/* eslint-disable react/jsx-no-target-blank */
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p className="footer-title">Наши партнёры</p>
      </div>
      <div className="footer-link">
        <div className="vk-link">
          <img src="../vk.png" alt="" />
          <a className="vk-link" href="https://vk.com/catpes" target="_blank">
            ТМООПБЖ «КОТО-ПЕС» г.Таганрог
          </a>
        </div>
        <div className="vk-link">
          <img src="../vk.png" alt="" />
          <a
            className="vk-link"
            href="https://vk.com/kot_i_pec"
            target="_blank"
          >
            Четыре лапы г. ИЖЕВСК Помощь бездомным животным
          </a>
        </div>
        <div className="vk-link">
          <img src="../vk.png" alt="" />
          <a
            className="vk-link"
            href="https://vk.com/predannoeserdce.help"
            target="_blank"
          >
            "Преданное сердце" Помощь животным
          </a>
        </div>
        <div>
          <img src="../vk.png" alt="" />
          <a
            className="vk-link"
            href="https://vk.com/animalspnz_fund58"
            target="_blank"
          >
            Фонд "Рука помощи бездомным животным
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
