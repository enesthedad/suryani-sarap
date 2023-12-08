import { lazy, Suspense } from "react";
import Loading from "../Loading";

// LAZY IMPORTS
const Products = lazy(() => import("../../Products"));
const OurWineImg = lazy(() => import("./OurWineImg"));

const OurWines = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className='product-container'>
        <OurWineImg />
        <div className='padding'>
          <Products />
        </div>
      </div>
    </Suspense>
  );
};

export default OurWines;
