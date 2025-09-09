import articles from "../../data/articles.json";
import Link from "next/link";
import styles from "../../styles/RecommendCard.module.css";

export default function RecommendCard({ top }) {
  const recommended = [...articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, top);

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>新着記事</h2>
      {recommended.map((article) => (
        <div key={article.id} className={styles.card}>
          <h3>{article.title}</h3>
          <p>{article.scrpit}</p>
          <Link href={`/list/${article.id}`}>記事を読む</Link>
        </div>
      ))}
    </div>
  );
}
