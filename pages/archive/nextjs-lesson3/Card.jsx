import styles from "./Card.module.css";

export default function Card({ items = [] }) {
  return (
    <div className={styles.container}>
      <main className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <img src={item.img} alt={item.title} className={styles.image} />
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.grade}>{item.grade}</p>
            <p className={styles.content}>{item.content}</p>
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              詳しく見る
            </a>
          </div>
        ))}
      </main>
    </div>
  );
}
