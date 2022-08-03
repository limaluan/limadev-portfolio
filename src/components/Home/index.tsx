import styles from "./home.module.scss";

import { useEffect, useState } from "react";
import { useLoading } from "../../hooks/useLoading";

import meImg from "../../assets/img/meImg.png";
import scrollImg from "../../assets/img/scroll_icon.png";

export default function Home() {
    const { handleCloseLoading, pageLoads, isLoaded } = useLoading();
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch(`https://api.github.com/users/limaluan`).then(response => response.json().then(data => {
            setDescription(data.bio)
        }))
    }, []);

    window.onload = () => {
        handleCloseLoading();
        setTimeout(() => pageLoads(), 3000);
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.description}>
                    <h1>Desenvolvedor Front-End</h1>
                    <p>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia corrupti unde sit architecto facilis beatae facere ducimus esse l</p>
                </div>
                <img className={styles.meImg} src={meImg} alt="Foto do Desenvolvedor" />
            </div>
            <img className={styles.scrollImg} src={scrollImg} alt="Ícone demonstrando scroll" />
        </section>
    );
}
