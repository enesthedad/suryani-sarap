import storePic from "../../images/omursarap.jpeg";
import MyMap from "../MyMap";
const Order = () => {
  return (
    <div className='product-container'>
      <div className='product-header'>
        <img src={storePic} alt='' />
        <h5 className='product-header-title'>SIPARIS</h5>
      </div>
      <div className='info'>
        <div className='info-box'>
          <h6 className='blog-text-header'>ILETISIM</h6>

          <div className='blog-content'>
            <p>
              Akçakaya mahallesi, Kocamanoğlu Caddesi No:16K Ömür Süryani Şarap
              Evi
            </p>
            <p>Mardin / Midyat</p>
            <p>0537 397 2468</p>
            <p>omursuryanisarapevi@gmail.com</p>
          </div>
        </div>
        <div className='info-box'>
          <h6 className='blog-text-header'>KONUMUMUZ</h6>

          <MyMap />
        </div>
      </div>
    </div>
  );
};
export default Order;
