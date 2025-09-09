import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../../styles/ListCard.module.css";

export default function ListCard({ article }) {
  const [rate, setRate] = useState(0);

  useEffect(() => {
    const savedRate = localStorage.getItem(`rate-${article.id}`);
    if (savedRate !== null) {
      setRate(Number(savedRate));
    } else {
      const randomRate = Math.floor(Math.random() * 100) + 1;
      setRate(randomRate);
      localStorage.setItem(`rate-${article.id}`, randomRate);
    }
  }, [article.id]);

  const handleLike = () => {
    setRate((prev) => {
      const newRate = prev + 1;
      localStorage.setItem(`rate-${article.id}`, newRate);
      return newRate;
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.date}>{article.date}</p>
        <p className={styles.script}>{article.script}</p>

        <div className={styles.categories}>
          {article.category.map((ctg) => (
            <Link
              key={ctg}
              href={{ pathname: "/list", query: { category: ctg } }}
              className={styles.categoryTag}
            >
              #{ctg}
            </Link>
          ))}
        </div>

        <div className={styles.rateBox}>
          <button onClick={handleLike} className={styles.likeButton}>
            ♡
          </button>
          <span>{rate}</span>
        </div>

        <Link
          href={{
            pathname: `/blog/list/${article.id}`,
            query:
              article.category.length > 0 ? { category: article.category } : {},
          }}
          className={styles.link}
        >
          続きを読む
        </Link>
      </div>
    </div>
  );
}
