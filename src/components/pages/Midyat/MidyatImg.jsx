import midyatPic from "../../../images/midyat.jpg";
import Image from "../Image";
const MidyatImg = () => {
  return (
    <>
      <div className='product-header'>
        <Image path={midyatPic} />
        <h5 className='product-header-title'>MIDYAT</h5>
      </div>
    </>
  );
};
export default MidyatImg;
