import "../Donation/Donation.css";
import HelpCount from "../HelpCount/HelpCount.jsx";
import DonationModal from "../DonationModal/DonationModal.jsx";
import Footer from "../Footer/Footer.jsx";
import YouDonation from "../YouDonation/YouDonation.jsx";
import { useDispatch, useSelector } from "react-redux";

const Donation = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="donation-page">
      <div>
        <p className="help-number">Помощь в цифрах</p>
      </div>
      <div>
        <HelpCount />
      </div>
      <div>
        <p className="help-number-opis">
          Мы стараемся сделать наш мир немного добрее и спасти как можно больше
          животных. Благодаря вам и вашей помощи, многие животные были спасены и
          обрели дом.
        </p>
      </div>
      <div>
        <DonationModal />
        {user ? (
          <YouDonation />
        ) : (
          <p className="header-video">
            Ваши пожертвования будут направлены на питание, лечение и
            обустройство животных.
          </p>
        )}
      </div>
      <div className="block-text-video">
        <p className="opis-video">
          Мы верим, что каждый может внести свой вклад в помощь бездомным
          животным. Благотворительный фонд «Дай лапу» благодарит всех, кто не
          остается равнодушным к судьбе бездомных собак и кошек. Вместе мы можем
          сделать этот мир лучше и подарить животным шанс на счастливую жизнь.
        </p>
      </div>
      <div>
        <div>
          <p className="video-title">Видео от наших волонтёров</p>
        </div>
        <div>
          <video
            class="video"
            controls
            poster="https://sun9-1.userapi.com/impg/vCymCkGvCgcAH0kRJeGnN0CjBngMXFNFvS94oQ/zoapoE_3wFY.jpg?size=604x423&quality=96&sign=60e57513a2e061049796be83c6475c4c&type=album"
            preload="auto"
            data-setup="{}"
          >
            <source type="video/mp4" src="../Video/HelpKitty.mp4" />
          </video>

          <p className="video-comment">
            Волонтёры фонда “Дай лапу” заботятся о бездомных животных
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Donation;
