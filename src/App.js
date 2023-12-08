import { useState, useEffect, lazy, Suspense } from "react";
import Loading from "./components/pages/Loading";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

const Body = lazy(() => import("./components/Body.jsx"));
const App = () => {
  const [activePage, setActivePage] = useState(1);

  const [isMenuVisible, setMenuVisibility] = useState(true);

  return (
    <>
      <div className='App'>
        <Suspense fallback={<Loading />}>
          <Header
            isMenuVisible={isMenuVisible}
            setMenuVisibility={setMenuVisibility}
            setActivePage={setActivePage}
          />

          {isMenuVisible ? null : <div className='blacker'></div>}
          <Body activePage={activePage} />
          <Loading />
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default App;
