import { useLoading } from "./hooks/useLoading";

import { Projects } from "./components/Projects";
import Home from "./components/Home";
import { useEffect } from "react";
import "./styles/global.scss";
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";
import { captureRejectionSymbol } from "events";

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
      <Home id="about" />
      <Projects id="projects" />
      <Contact />
    </>
  );
}

export default App;
