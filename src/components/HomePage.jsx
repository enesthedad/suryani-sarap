import landingPhoto from "../images/landing.jpg";
import approve from "../images/icons/quality.png";
import approveLight from "../images/icons/quality-light.png";

const HomePage = () => {
  return (
    <main>
      <div className='first-section'>
        <img className='landing' src={landingPhoto} alt='' />
        <div className='mini-container'>
          <div className='ad-container'>
            <img src={approve} alt='' />
            <div>
              <h4>Suryani Sarabi</h4>
              <p>Dogal Suryani Saraplari</p>
            </div>
          </div>
          <div className='dark-ad-container'>
            <img src={approveLight} alt='' />
            <div>
              <h4>Kaliteli urunler</h4>
              <p>Dogal Suryani Saraplari</p>
            </div>
          </div>
          <div className='ad-container'>
            <img src={approve} alt='' />
            <div>
              <h4>Mutlu Musteri</h4>
              <p>Musteri Odakli Hizmet Anlayisi</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
