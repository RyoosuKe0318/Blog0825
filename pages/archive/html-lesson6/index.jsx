import { useState } from "react";
import ArchiveLayout from "@/components/archive/ArchiveLayout";
import styles from "./html-lesson6.module.css";

export default function HtmlLesson6() {
  const colors = [
    { color: "❤️赤", message: "情熱が高まり、積極的に行動すると良い日!" },
    { color: "💙青", message: "冷静な判断ができる日。集中力アップ!" },
    {
      color: "💚緑",
      message: "自然との調和を意識すると、リラックスできる日。",
    },
    { color: "💛黄色", message: "アイデアが冴える日。ひらめきを大切に!" },
    {
      color: "💜紫",
      message: "直感が冴える日。スピリチュアルなひらめきがあるかも?",
    },
    { color: "🖤黒", message: "周囲を見渡し、慎重な選択をすると吉!" },
    { color: "🤍白", message: "新しいことを始めるのに最適な日!" },
  ];

  const [result, setResult] = useState({ color: "", message: "" });

  const drawColor = () => {
    const x = Math.floor(Math.random() * colors.length);
    setResult(colors[x]);
  };

  return (
    <ArchiveLayout>
      <div className={styles.body}>
        <fieldset className={styles.fieldset}>
          <h1 className={styles.h1}>今日のラッキーカラーを占おう！</h1>
          <button className={styles.button} onClick={drawColor}>
            占う
          </button>
          <h2 className={styles.h2}>
            今日のラッキーカラー:{" "}
            <span className={styles.color}>{result.color}</span>
          </h2>
          <p className={styles.msg}>{result.message}</p>
        </fieldset>
      </div>
    </ArchiveLayout>
  );
}
