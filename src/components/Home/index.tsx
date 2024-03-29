import styles from "./home.module.scss";

import meImg from "../../assets/img/meImg.png";
import scrollImg from "../../assets/img/scroll_icon.png";

interface IHomeProps {
  id: string;
}

export default function Home({ id }: IHomeProps) {
  return (
    <section id='about' className={styles.container}>
      <div className={styles.content}>
        <div className={styles.description}>
          <h1>Desenvolvedor Front-End</h1>
          <p>
            Oi, me chamo Luan, sou apaixonado por tecnologia e em aprender coisas novas! 💪 <br />Possuo habilidades
            com as melhores e mais portáteis tecnologias do mercado como ReactJs, NextJs, e NodeJs.
            
          </p>
          <div className={styles.stacksImg}>
            <img alt="react icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            <img alt="nodejs icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
            <img alt="typescript icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            <img alt="css3 icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
            <img alt="html5 icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" /> */}
          </div>
        </div>
        <img className={styles.meImg} src={meImg} alt="Foto do Desenvolvedor" />
        <span className={styles.gradient}></span>
      </div>
      <img
        className="scrollImg"
        src={scrollImg}
        alt="Ícone demonstrando scroll"
      />
    </section>
  );
}
