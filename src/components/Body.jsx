import { lazy, Suspense } from "react";
import Comments from "./pages/Comments/Comments";
import WhyWe from "./pages/WhyWe";

const AssyrianWine = lazy(() => import("./pages/AssyrianWine/AssyrianWine"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const HomePage = lazy(() => import("./HomePage"));
const LastNews = lazy(() => import("./pages/LastNews/LastNews"));
const OurWines = lazy(() => import("./pages/OurWine/OurWine"));
const Products = lazy(() => import("./Products"));
const Assyrians = lazy(() => import("./pages/Assyrian/Assyrians"));
const Midyat = lazy(() => import("./pages/Midyat/Midyat"));
const Prizes = lazy(() => import("./pages/Prizes/Prizes"));
const Order = lazy(() => import("./pages/Order/Order"));
const Body = ({ activePage, wineVisible, handleWineClick }) => {
  return (
    <>
      <div className='body-container'>
        {activePage === 1 && (
          <div>
            <HomePage />
            <WhyWe />
            <Comments />
          </div>
        )}
        {activePage === 2 && (
          <div>
            <OurWines
              wineVisible={wineVisible}
              handleWineClick={handleWineClick}
            />
          </div>
        )}
        {activePage === 3 && (
          <div>
            <AssyrianWine />
          </div>
        )}
        {activePage === 4 && (
          <div>
            <Blog />
          </div>
        )}
        {activePage === 5 && (
          <div>
            <Assyrians />
          </div>
        )}
        {activePage === 6 && (
          <div>
            <Midyat />
          </div>
        )}
        {activePage === 7 && (
          <div>
            <Prizes />
          </div>
        )}
        {activePage === 8 && (
          <div>
            <Order />
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
