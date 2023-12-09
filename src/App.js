import { useState, lazy, Suspense } from "react";
import Loading from "./components/pages/Loading";
const Body = lazy(() => import("./components/Body.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const Header = lazy(() => import("./components/Header.jsx"));

const App = () => {
  const [activePage, setActivePage] = useState(1);

  const [isMenuHidden, setMenuVisibility] = useState(true);

  const handleMenuClick = () => {
    setMenuVisibility(!isMenuHidden);
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className='App' id='scroll-container'>
        <Header
          isMenuHidden={isMenuHidden}
          handleMenuClick={handleMenuClick}
          setActivePage={setActivePage}
        />
        <Body activePage={activePage} />
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
