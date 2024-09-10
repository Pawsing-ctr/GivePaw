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
          <a className="vk-link" href="#">
            ТМООПБЖ «КОТО-ПЕС» г.Таганрог
          </a>
        </div>
        <div className="vk-link">
          <img src="../vk.png" alt="" />
          <a className="vk-link" href="#">
            Четыре лапы г. ИЖЕВСК Помощь бездомным животным
          </a>
        </div>
        <div className="vk-link">
          <img src="../vk.png" alt="" />
          <a className="vk-link" href="#">
            "Преданное сердце" Помощь животным
          </a>
        </div>
        <div>
          <img src="../vk.png" alt="" />
          <a className="vk-link" href="#">
            Фонд "Рука помощи бездомным животным
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
