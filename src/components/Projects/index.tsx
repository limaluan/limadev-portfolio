import styles from "./projects.module.scss";
// import scrollImg from "../../assets/img/scroll_icon.png";

interface IProjectsPageProps {
  id: string;
}

export function Projects({ id }: IProjectsPageProps) {
  // Detecta se o usuário está nesta seção
  const section = document.querySelector("#projects");
  window.addEventListener("click", () =>
    console.log(section?.getBoundingClientRect())
  );

  const headerItems = document.querySelectorAll(".headerItem");

  window.onscroll = (e) => {
    if (section) {
      if (
        section.getBoundingClientRect().bottom - 20 >=
          section.getBoundingClientRect().height ||
        section.getBoundingClientRect().top * -1 >=
          section.getBoundingClientRect().height
      ) {
        headerItems[0]?.classList.remove("turn-white");
        headerItems[1]?.classList.remove("turn-white");
      } else if (section.getBoundingClientRect().top <= 0) {
        headerItems[0]?.classList.add("turn-white");
        headerItems[1]?.classList.add("turn-white");
      }
    }
  };

  // Carrossel
  const controls = document.querySelectorAll("." + styles.arrow);
  const projects = document.querySelectorAll("." + styles.projectContainer);
  const maxProjects = projects.length;
  const dots = document.querySelectorAll(".dot");

  let currentProject = 0;

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      const isRigth = control.classList.contains(styles.arrowRigth);

      if (isRigth) {
        currentProject += 1;
      } else {
        currentProject -= 1;
      }

      if (currentProject >= maxProjects) {
        currentProject = 0;
      }

      if (currentProject < 0) {
        currentProject = maxProjects - 1;
      }

      projects.forEach((project) => {
        project.classList.remove("current-item");
        dots.forEach((dot) => dot.classList.remove(styles.selected));
        dots[currentProject].classList.add(styles.selected);

        projects[currentProject].scrollIntoView({
          inline: "center",
          behavior: "smooth",
        });
      });
    });
  });

  return (
    <section id={id} className={styles.container + " pages"}>
      {/* Arrow Rigth Left*/}
      <svg
        className={styles.arrow}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
      >
        <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
      </svg>
      {/* Arrow Rigth */}
      <svg
        className={styles.arrow + " " + styles.arrowRigth}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
      >
        <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
      </svg>
      <h1 className={styles.title}>Projetos</h1>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <article className={styles.projectContainer + " current-item "}>
            <img
              src="https://camo.githubusercontent.com/01b10df792c4551ad549c1c851cd156ef747dc02aafb826c127849c4fb022c91/68747470733a2f2f696d6775722e636f6d2f6363535a6775382e676966"
              alt="Imagem da singular ofertas"
            />

            <div className={styles.projectInfo}>
              <h2>Singular Ofertas</h2>
              <p>
                E-commerce de produtos em geral. Sistema de autenticação
                projetado com JWT. Sistema de armazenamento de Cookies com o
                Nookies. Integração total com Rest API própria utilizando Axios.
                Typescript utilizado com ReactJs, NextJs e Styled-Components.
              </p>
            </div>
          </article>

          <article className={styles.projectContainer}>
            <img
              src="https://camo.githubusercontent.com/146045a9a003e9cfd71a9109df7111019a19d991dc6b39fc2ab235aa43356e7c/68747470733a2f2f692e696d6775722e636f6d2f6776736846576c2e676966"
              alt="Imagem da singular ofertas"
            />

            <div className={styles.projectInfo}>
              <h2>Dt Money</h2>
              <p>
                E-commerce de produtos em geral. Sistema de autenticação
                projetado com JWT. Sistema de armazenamento de Cookies com o
                Nookies. Integração total com Rest API própria utilizando Axios.
                Typescript utilizado com ReactJs, NextJs e Styled-Components.
              </p>
            </div>
          </article>

          <article className={styles.projectContainer}>
            <img
              src="https://github.com/recieire/JobsCalc/raw/main/.github/jobscalc.png"
              alt="Imagem da singular ofertas"
            />

            <div className={styles.projectInfo}>
              <h2>JobsCalc</h2>
              <p>
                E-commerce de produtos em geral. Sistema de autenticação
                projetado com JWT. Sistema de armazenamento de Cookies com o
                Nookies. Integração total com Rest API própria utilizando Axios.
                Typescript utilizado com ReactJs, NextJs e Styled-Components.
              </p>
            </div>
          </article>
          <div className={styles.dotContainer}>
            <div className={styles.selected + " dot"}></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
      {/* <img
        className="scrollImg"
        src={scrollImg}
        alt="Ícone demonstrando scroll"
      /> */}
    </section>
  );
}
