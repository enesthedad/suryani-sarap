import Products from "../Products";
import wines from "../../images/our-wine.jpg";
const OurWines = () => {
  return (
    <div className='product-container'>
      <div className='product-header'>
        <img src={wines} alt='' />
        <h5 className='product-header-title'>URUNLERIMIZ</h5>
      </div>
      <div className='padding'>
        <Products />
      </div>
    </div>
  );
};

export default OurWines;
