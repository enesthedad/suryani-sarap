import storePic from "../../../images/omursarap.jpg";
import Image from "../Image";
const OrderImg = () => {
  return (
    <>
      <div className='product-header'>
        <Image path={storePic} />

        <h5 className='product-header-title'>SIPARIS</h5>
      </div>
    </>
  );
};

export default OrderImg;
