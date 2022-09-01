import ProjectsSection from "./components/Projects";
import Home from "./components/Home";
import "./styles/global.scss";
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Home id="about" />
      <ProjectsSection id="projects" />
      <Contact id="contact" />
    </>
  );
}

export default App;
