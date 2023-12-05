import Wine from "./Wine";

const Products = () => {
  const wines = [
    { id: 1, winename: "Shiluh Mesopotamia Suryani Sarabi", color: "#7d1128" },
    { id: 2, winename: "Shiluh Manastir Suryani Sarabi", color: "#800000" },
    { id: 3, winename: "Shiluh Turabdin Suryani Sarabi", color: "#510400" },
    { id: 4, winename: "Shiluh Mazrona Suryani Sarabi", color: "#EEEDC4" },
    { id: 5, winename: "Shiluh Dara Suryani Sarabi", color: "#7d1128" },
    { id: 6, winename: "Shiluh Ninve Suryani Sarabi", color: "#c32148" },
    { id: 7, winename: "Shiluh Ninve Suryani Sarabi", color: "#F4C4BB" },
    { id: 8, winename: "Shiluh Ninve Suryani Sarabi", color: "#B52C37" },
    { id: 9, winename: "Shiluh Ninve Suryani Sarabi", color: "#f9e8c0" },
    { id: 10, winename: "Shiluh Hamro Suryani Sarabi", color: "#c24852" },
  ];
  return (
    <div className='menu-container'>
      <div className='menu'>
        {wines.map((wine, index) => (
          <Wine key={wine.id} color={wine.color} definition={wine.winename} />
        ))}
      </div>
    </div>
  );
};

export default Products;
