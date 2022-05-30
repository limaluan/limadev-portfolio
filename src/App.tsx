import { GlobalStyle } from "./styles/global";

import { useLoading } from "./hooks/useLoading";

import { About } from "./components/About";
import Home from "./components/Home";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const { isLoaded } = useLoading();

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
