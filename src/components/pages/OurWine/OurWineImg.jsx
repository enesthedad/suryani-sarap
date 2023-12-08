import wines from "../../../images/our-wine.jpg";
import Image from "../Image";
const OurWineImg = () => {
  return (
    <>
      <div className='product-header'>
        <Image path={wines} />
        <h5 className='product-header-title'>URUNLERIMIZ</h5>
      </div>
    </>
  );
};

export default OurWineImg;
