import { useLoading } from "./hooks/useLoading";

import { About } from "./components/About";
import Home from "./components/Home";
import { useEffect } from "react";
import "./styles/global.scss";
import { Header } from "./components/Header";

function App() {
  const { isLoaded } = useLoading();

  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isLoaded]);

  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}

export default App;

