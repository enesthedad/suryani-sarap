const Image = ({ path }) => {
  return (
    <>
      <img src={path} alt={`image-${path}`} />
    </>
  );
};
export default Image;
