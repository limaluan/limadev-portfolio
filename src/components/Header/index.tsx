import styles from "./header.module.scss";
import logoImg from "../../assets/img/LimaDev_Logo1.png";

export function Header() {
  return (
    <header className={styles.container + " pages"}>
      <div className={styles.content}>
        <a href="#">
          <img
            alt="Logo do site"
            className={styles.logoImg + " headerItem"}
            src={logoImg}
          />
        </a>
        <ul className={styles.menu + " headerItem"}>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
