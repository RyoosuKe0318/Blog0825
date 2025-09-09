import { useRouter } from "next/router";
import Link from "next/link";
import articles from "../../../data/articles.json";
import styles from "../../../styles/ArticleDetail.module.css";
import Layout from "@/components/shared/Layout";

export default function ArticleDetail() {
  const router = useRouter();
  const { id, category } = router.query;

  if (!id || router.isFallback) return <div>Loading...</div>;

  const article = articles.find((a) => a.id === parseInt(id));
  if (!article) return <div>記事が見つかりません</div>;

  const categories = Array.isArray(category)
    ? category
    : category
    ? [category]
    : [];

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.date}>{article.date}</p>
        <p className={styles.script}>{article.script}</p>
        <p className={styles.info}>評価: {article.rate}</p>
        <div className={styles.categories}>
          {article.category.map((ctg) => (
            <Link
              key={ctg}
              href={{ pathname: "/blog/list", query: { category: ctg } }}
              className={styles.categoryTag}
            >
              #{ctg}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
