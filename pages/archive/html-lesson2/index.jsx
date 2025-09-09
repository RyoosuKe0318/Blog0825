import ArchiveLayout from "@/components/archive/ArchiveLayout";
import styles from "./html-lesson2.module.css";

export default function HtmlLesson2() {
  return (
    <ArchiveLayout>
      <article className={styles.card}>
        <div className={styles.cross}>
          <img src="/archive_photos/html-lesson2.png" alt="マゼランクロス" />
          <div className={styles.description}>
            <h2 className={styles.h2}>
              マゼランクロス
              <span className={styles.subtitle}>Magellan&apos;s Cross</span>
            </h2>
            <p>
              マゼランクロスは、セブ島の中心部に位置する歴史的なモニュメントです。1521年にスペイン人探検家フェルディナンド・マゼランが、
              フィリピンにキリスト教を広める象徴として設置したとされています。
              <br />
              現在は、八角形のチャペル内に収められ、外部の環境から保護されています。天井には、マゼランが現地の人々と
              キリスト教の布教を始めた様子を描いた美しいフレスコ画が施されており、訪れる人々を魅了します。
            </p>
            <p>
              <a
                href="https://cebutravel.net/magellanscross/"
                className={styles.btnRef1}
              >
                詳しく見る
              </a>
            </p>
          </div>
        </div>
      </article>
    </ArchiveLayout>
  );
}
