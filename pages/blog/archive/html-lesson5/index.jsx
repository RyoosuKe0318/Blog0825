import { useState, useEffect } from "react";
import ArchiveLayout from "@/components/archive/ArchiveLayout";
import styles from "./html-lesson5.module.css";

export default function HtmlLesson5() {
  const omikujiResult = ["大吉😍", "中吉😊", "小吉😑", "末吉😣", "凶😫"];

  const [result, setResult] = useState("");

  useEffect(() => {
    const x = Math.floor(Math.random() * omikujiResult.length);
    setResult(omikujiResult[x]);
  }, []);

  return (
    <ArchiveLayout>
      <article>
        <h1 className={styles.h1}>おみくじを引こう！</h1>
        <div className={styles.result}>{result}</div>
      </article>
    </ArchiveLayout>
  );
}
