import { useRouter } from "next/router";
import categories from "../../data/categories.json";
import styles from "../../styles/CategoryCard.module.css";

export default function CategoryCard() {
  const router = useRouter();

  const handleClick = (key) => {
    router.push(`/list/?category=${key}`);
  };

  return (
    <div>
      <h2 className={styles.pageTitle}>カテゴリー 一覧</h2>
      <ul className={styles.ulGrid}>
        {Object.entries(categories).map(([key, value], index) => (
          <li
            key={index}
            className={styles.liCard}
            onClick={() => handleClick(key)}
          >
            <img src={value.img} alt={value.title} className={styles.imgCard} />
            <div className={styles.overlay}>
              <h2 className={styles.cardTitle}>{value.title}</h2>
              <p className={styles.description}>{value.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
