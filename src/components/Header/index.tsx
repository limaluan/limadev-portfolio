import styles from "./header.module.scss";
import logoImg from "../../assets/img/LimaDev_Logo1.png";

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img className={styles.logoImg} src={logoImg} />
                <ul className={styles.menu}>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
        </header>
    )
}
