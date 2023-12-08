import { useState, useEffect, lazy, Suspense } from "react";
import Loading from "./components/pages/Loading";
const Body = lazy(() => import("./components/Body.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const Header = lazy(() => import("./components/Header.jsx"));

const App = () => {
  const [activePage, setActivePage] = useState(1);

  const [isMenuVisible, setMenuVisibility] = useState(true);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className='App'>
          <Header
            isMenuVisible={isMenuVisible}
            setMenuVisibility={setMenuVisibility}
            setActivePage={setActivePage}
          />

          {isMenuVisible ? null : <div className='blacker'></div>}
          <Body activePage={activePage} />

          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default App;
