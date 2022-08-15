import styles from "./contact.module.scss";

interface IContactPageProps {
  id: string;
}

export function Contact({ id }: IContactPageProps) {
  return (
    <section id={id} className={styles.container}>
      <div className={styles.content}></div>
    </section>
  );
}
