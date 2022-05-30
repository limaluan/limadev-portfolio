import { useEffect, useState } from "react";
import { About } from "./components/About";

import Home from "./components/Home";
import LoadingScreen from "./components/LoadingScreen";
import { GlobalStyle } from "./styles/global";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000)
  }, [])

  return (
    <>
      {loading
        ? <LoadingScreen />
        : <></>
      }
      <Home />
      <About />
      <GlobalStyle />
    </>
  );
}

export default App;
