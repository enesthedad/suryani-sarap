import AssyrianWine from "./pages/AssyrianWine";
import Blog from "./pages/Blog";
import HomePage from "./HomePage";
import LastNews from "./pages/LastNews";
import OurWines from "./pages/OurWine";
import Products from "./Products";
import Assyrians from "./pages/Assyrians";
import Midyat from "./pages/Midyat";
import Prizes from "./pages/Prizes";
import Order from "./pages/Order";
const Body = ({ activePage }) => {
  if (activePage === 1) {
    return (
      <body>
        <HomePage />
        <div className='menu-container'>
          <h3 className='menu-header'>URUNLERIMIZ</h3>
          <Products />
        </div>
        <LastNews />
      </body>
    );
  } else if (activePage === 2) {
    return (
      <body>
        <OurWines />
      </body>
    );
  } else if (activePage === 3) {
    return (
      <body>
        <AssyrianWine />
      </body>
    );
  } else if (activePage === 4) {
    return (
      <body>
        <Blog />
      </body>
    );
  } else if (activePage === 5) {
    return (
      <body>
        <Assyrians />
      </body>
    );
  } else if (activePage === 6) {
    return (
      <body>
        <Midyat />
      </body>
    );
  } else if (activePage === 7) {
    return (
      <body>
        <Prizes />
      </body>
    );
  } else if (activePage === 8) {
    return (
      <body>
        <Order />
      </body>
    );
  } else {
    return null;
  }
};

export default Body;
