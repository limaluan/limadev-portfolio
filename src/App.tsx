import { GlobalStyle } from "./styles/global";

import { useLoading } from "./hooks/useLoading";

import { About } from "./components/About";
import Home from "./components/Home";
import LoadingScreen from "./components/LoadingScreen";
import { useEffect } from "react";

function App() {
  const { isLoaded } = useLoading();

  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isLoaded])
  
  return (
    <>
      {isLoaded
        ? <></>
        : <LoadingScreen />
      }
      <Home />
      <About />
      <GlobalStyle />
    </>
  );
}

export default App;
