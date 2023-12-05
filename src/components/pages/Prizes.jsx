import prizePic from "../../images/prizes.jpg";
const Prizes = () => {
  return (
    <div className='product-container'>
      <div className='product-header'>
        <img src={prizePic} alt='' />
        <h5 className='product-header-title'>ODULLERIMIZ</h5>
      </div>
      <div className='blog-text'>
        <ul>
          <li>
            Shiluh Manastır Süryani Şarabı - 2017 CMC Silver
            <li>Shiluh Turabdin Süryani Şarabı - 2017 CMC Silver</li>
            <li>Shiluh Manastır Süryani Şarabı - 2021 Sommeliers Selection</li>
            <li>Shiluh Ninve Süryani Şarabı - 2021 Sakura Japan Gold</li>
            <li>Shiluh Turabdin Süryani Şarabı- 2021 Sakura Japan Silver </li>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Prizes;
