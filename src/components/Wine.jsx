import product from "../images/icons/product.png";
const Wine = ({ wine, handleWineClick }) => {
  return (
    <div onClick={() => handleWineClick(wine.id)} className='wine'>
      <div style={{ backgroundColor: wine.color }} className='wine-img'>
        <img className='product-img' src={product} alt='' />
      </div>
      <p className='wine-name'>{wine.wineName}</p>
    </div>
  );
};

export default Wine;
