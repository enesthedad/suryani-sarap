import { useState, lazy } from "react";
import Detail from "./pages/Detail";

const Wine = lazy(() => import("./Wine"));

const Products = ({ wineLib, handleWineClick }) => {
  return (
    <div className='menu-container'>
      <div className='menu'>
        {wineLib.map((wine, index) => (
          <Wine key={index + 1} handleWineClick={handleWineClick} wine={wine} />
        ))}
      </div>
    </div>
  );
};

export default Products;
