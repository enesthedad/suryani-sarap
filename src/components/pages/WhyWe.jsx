import { useState } from "react";
import underIcon from "../../images/icons/letter-v.png";
const WhyWe = () => {
  const [activeMessage, setActiveMessage] = useState(null);
  const whyWeMessages = [
    {
      id: 1,
      title: "Gelenek",
      message:
        "Suryani şarap geleneğini modern dünyaya taşıyoruz. Binlerce yıllık zengin mirasımızı sürdürerek, her damla şarabımızda bu köklü geçmişi hissettiriyoruz. Üretim sürecimizde geleneksel yöntemleri koruyor, en kaliteli üzümlerle birleştiriyor ve bu eşsiz birlikteliği sizinle paylaşıyoruz. Bu sadece bir içki değil, bir kültür ve tarih yolculuğudur. Bizimle, geleneksel Suryani şaraplarının eşsiz dünyasını keşfedin.",
    },

    {
      id: 2,
      title: "Müşteri Memnuniyeti",
      message:
        "Müşteri memnuniyetini en üst düzeye çıkarıyoruz. Her siparişi özenle hazırlıyor, sizin için en iyi hizmeti sunmak için sürekli çaba sarf ediyoruz. Sorularınızı çözmek, taleplerinizi karşılamak ve alışveriş deneyiminizi mükemmel hale getirmek için buradayız. Bizimle alışveriş yaptığınızda sadece ürün değil, aynı zamanda özel bir hizmet alacağınızı garanti ediyoruz.",
    },

    {
      id: 3,
      title: "Lezzet",
      message:
        "Biz, en kaliteli üzümleri seçerek ve özenle işleyerek lezzetin zirvesine ulaşıyoruz. Her damla şarabımız, özgün tat profili ve derin karakteri ile sizi büyülüyor. Damak zevkinize hitap eden geniş bir yelpaze sunuyoruz ve her bir şişe, zengin aromalar ve benzersiz lezzetlerle dolu bir deneyim sunuyor. Lezzetin doruklarına çıkmak için bize katılın ve Suryani şaraplarının muhteşem dünyasını keşfedin.",
    },
  ];
  const handleHidenModal = (id) => {
    activeMessage === id ? setActiveMessage(null) : setActiveMessage(id);
  };
  return (
    <div className='why-we-container'>
      <div className='why-we-bg'></div>
      <div className='why-we-text'>
        <h4 className='why-we-header'>Neden Biz?</h4>
        <div className='why-we-messages'>
          {whyWeMessages.map((message, index) => (
            <WhyWeCard
              key={index}
              activeMessage={activeMessage}
              setActiveMessage={setActiveMessage}
              message={message}
              handleHidenModal={handleHidenModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const WhyWeCard = ({
  message,
  activeMessage,
  setActiveMessage,
  handleHidenModal,
}) => {
  return (
    <div className='toggle-message-card'>
      <div
        onClick={() => handleHidenModal(message.id)}
        className='message-card-header'
      >
        <span>{String(message.title).toUpperCase()}</span>
        <img src={underIcon} alt='' />
      </div>
      {message.id === activeMessage ? (
        <div className='message-card-content'>
          <p>{message.message}</p>
        </div>
      ) : null}
    </div>
  );
};
//  <div className='why-we-card'>
{
  /* <div className='why-we-card-header'>
<h4>{message.title}</h4>
<a href='#'>V</a>
</div>
</div> */
}
export default WhyWe;
