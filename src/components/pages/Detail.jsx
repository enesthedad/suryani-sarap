import starImg from "../../images/star.png";
import closeIcon from "../../images/icons/return.png";
import { useState } from "react";
const Detail = ({ handleWineClick, wine }) => {
  return (
    //     {
    //     id: 10,
    //     wineName: "Shiluh Hamro Süryani Şarabı",
    //     color: "#c24852",
    //     definition:
    //       "Mardin ve çevresinde yetişen boğazkere ve öküzgözü üzümlerinin doğal fermantasyonuyla üretilmiştir. Parlak yakut görünümlü ve yuvarlak tanenli bir içime sahiptir. Alkol oranı %12.5 olan Shiluh Hamro Süryani Şarabı'nın yatık olarak saklanması önerilir. Shiluh hamro şarap siparişi vermek için whatsapp sipariş hattımızdan bize ulaşabilirsiniz. ",
    //     type: "Boğazkere - Öküzgözü",
    //     percentage: "%12.5",
    //     volume: "75CL-750ML",
    //   },
    <div className='background-wine'>
      <div className='wine-card'>
        <a onClick={handleWineClick} className='close-btn'>
          <img src={closeIcon} alt='' />
        </a>
        <h3 className='wine-card-title'>{wine.wineName}</h3>
        <p className='wine-card-detail'>{wine.definition}</p>
        <div className='wine-detail-table'>
          <p>
            <strong>Ürün:</strong>
            {wine.wineName}
          </p>
          <p>
            <strong>Üzüm Cinsi: </strong>
            {wine.type}
          </p>
          <p>
            <strong>Alkol Oranı:</strong>
            {wine.percentage}
          </p>
          <p>
            <strong>Hacim:</strong> {wine.volume}
          </p>
          <div className='point'>
            <img src={starImg} alt='' />

            <img src={starImg} alt='' />
            <img src={starImg} alt='' />
            <img src={starImg} alt='' />
            <img src={starImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
