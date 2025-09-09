import { useState, useEffect } from "react";

export default function Sort({ articles, onSort }) {
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    let sorted = [...articles];

    sorted = sorted.map((article) => {
      if (typeof window !== "undefined") {
        const storedRate = localStorage.getItem(`rate-${article.id}`);
        return {
          ...article,
          rate: storedRate ? parseInt(storedRate, 10) : article.rate || 0,
        };
      }
      return article;
    });

    switch (sortType) {
      case "date-asc":
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "date-desc":
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "rate-asc":
        sorted.sort((a, b) => a.rate - b.rate);
        break;
      case "rate-desc":
        sorted.sort((a, b) => b.rate - a.rate);
        break;
      case "random":
        sorted.sort(() => Math.random() - 0.5);
        break;
      default:
        break;
    }

    onSort(sorted);
  }, [sortType, articles]);

  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      <select
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="date-desc">作成日新しい順</option>
        <option value="date-asc">作成日古い順</option>
        <option value="rate-desc">評価が多い順</option>
        <option value="rate-asc">評価が少ない順</option>
        <option value="random">ランダム</option>
      </select>
    </div>
  );
}
