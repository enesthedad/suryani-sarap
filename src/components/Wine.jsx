import product from "../images/icons/product.png";
const Wine = (props) => {
  return (
    <div className='wine'>
      <div style={{ backgroundColor: props.color }} className='wine-img'>
        <img className='product-img' src={product} alt='' />
      </div>
      <p className='wine-name'>{props.definition}</p>
    </div>
  );
};

export default Wine;
