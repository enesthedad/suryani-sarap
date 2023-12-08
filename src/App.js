import { useState, useEffect, lazy, Suspense } from "react";
import Loading from "./components/pages/Loading";
const Body = lazy(() => import("./components/Body.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const Header = lazy(() => import("./components/Header.jsx"));

const App = () => {
  const [activePage, setActivePage] = useState(1);

  const [isMenuHidden, setMenuVisibility] = useState(true);
  isMenuHidden
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div
          style={
            isMenuHidden ? { overflowX: "hidden", overflow: "hidden" } : null
          }
          className='App'
        >
          <Header
            isMenuHidden={isMenuHidden}
            setMenuVisibility={setMenuVisibility}
            setActivePage={setActivePage}
          />

          {isMenuHidden ? null : <div className='blacker'></div>}
          <Body activePage={activePage} />

          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default App;
