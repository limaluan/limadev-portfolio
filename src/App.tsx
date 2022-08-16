import { useLoading } from "./hooks/useLoading";

import { Projects } from "./components/Projects";
import Home from "./components/Home";
import { useEffect } from "react";
import "./styles/global.scss";
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";

function App() {
  // const { isLoaded } = useLoading();

  useEffect(() => {
    console.log("executou");
    // if (!isLoaded) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "scroll";
    // }
  }, []);

  return (
    <>
      <Header />
      <Home id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </>
  );
}

export default App;
