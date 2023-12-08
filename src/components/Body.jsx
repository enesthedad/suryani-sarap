import { lazy, Suspense } from "react";
import Loading from "./pages/Loading";

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
const Body = ({ activePage }) => {
  return (
    <>
      <div className='body-container'>
        {activePage === 1 && (
          <div>
            <HomePage />
            <div className='menu-container'>
              <h3 className='menu-header'>URUNLERIMIZ</h3>
              <Products />
            </div>
            <LastNews />
          </div>
        )}
        {activePage === 2 && (
          <div>
            <OurWines />
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
