import { ReactNode } from "react";
import styles from "./projects.module.scss";

interface IProjectProps {
  title: string;
  href: string;
  src: string;
  children: ReactNode;
  srcAlt?: string;
}

export default function Project({
  title,
  src,
  srcAlt,
  href,
  children,
}: IProjectProps) {
  return (
    <article className={styles.projectContainer}>
      <img src={src} alt={srcAlt} />

      <div className={styles.projectInfo}>
        <h2>{title}</h2>
        <p>{children}</p>
        <div className="buttons black">
          <a href={href} target="new_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            Repositório
          </a>
        </div>
      </div>
    </article>
  );
}
