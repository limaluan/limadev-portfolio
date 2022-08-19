import styles from "./contact.module.scss";
import blobImg from "../../assets/img/blob.svg";

interface IContactPageProps {
  id: string;
}

export function Contact({ id }: IContactPageProps) {
  return (
    <section id={id} className={styles.container}>
      <div className={styles.content}>
        <section>
          <div className={styles.avatar}>
            <img src={blobImg} alt="" />
            <img
              src="https://avatars.githubusercontent.com/u/83187601?v=4"
              alt=""
            />
          </div>
          <div className={styles.info}>
            <h1>Sobre mim</h1>
            <article className={styles.description}>
              <p>
                <b>Aracaju, Sergipe</b>
              </p>
              <p>
                Oi! Atualmente sou gerente admnistrativo e estou em transição de
                carreira com dedicação e empenho nos estudos e aprendizado para
                ser um grande <b>Desenvolvedor Front-End.</b>
                <br />
                Sou um <b>rápido aprendiz</b> e sei lidar muito bem com
                <b> novas tecnologias e novos desafios</b>.
              </p>
              <div className={styles.buttons}>
                <a
                  href="https://docs.google.com/document/d/1afAzTGjkX1W6xfwXoXJ66uZE4oCBEhe05X_5ZOZmflo/edit"
                  target="new_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" />
                  </svg>
                  Currículo
                </a>
                <a href="https://github.com/limaluan" target="new_blank">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/lima-luan/"
                  target="new_blank"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                  LinkedIn
                </a>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
                  </svg>
                  Email
                </a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}
