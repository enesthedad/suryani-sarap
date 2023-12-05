import { useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [activePage, setActivePage] = useState(1);

  const [isMenuVisible, setMenuVisibility] = useState(true);
  console.log(isMenuVisible);
  const HandleMenuToggle = () => {};
  return (
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
  );
};

export default App;
