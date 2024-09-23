import "../Donation/Donation.css";
import HelpCount from "../HelpCount/HelpCount.jsx";
import DonationModal from "../DonationModal/DonationModal.jsx";
import Footer from "../Footer/Footer.jsx";

const Donation = () => {
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
      </div>
      <div className="block-text-video">
        <p className="header-video">
          Ваши пожертвования будут направлены на питание, лечение и обустройство
          животных.
        </p>
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
          <iframe
            className="video"
            src="https://www.youtube.com/embed/MulzJQ7PUVE?si=PJ_RbIOqIUHnK74T"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
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
