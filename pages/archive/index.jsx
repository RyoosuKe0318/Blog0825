import Layout from "@/components/shared/Layout";
import Link from "next/link";
import projects from "@/data/archive.json";
import styles from "../../../styles/ArchivePage.module.css";

export default function ArchivePage() {
  return (
    <Layout>
      <h1 className={styles.heading}>制作アーカイブ</h1>
      <p className={styles.description}>
        これまでのITクラスの授業を、制作してきた作品とともに振り返ります。
      </p>
      <div className={styles.bgCatPaws}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {projects.map((proj, index) => (
              <Link
                key={proj.slug}
                href={
                  proj.slug === "nextjs-lesson8-9"
                    ? "/blog"
                    : `/blog/archive/${proj.slug}`
                }
                className={`${styles.card} ${
                  index % 2 === 1 ? styles.cardRight : styles.cardLeft
                }`}
              >
                <h2 className={styles.title}>{proj.title}</h2>
                <p className={styles.date}>{proj.date}</p>
                <p className={styles.script}>{proj.script}</p>
                <img
                  src={proj.img}
                  alt={proj.title}
                  className={styles.cardImg}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
