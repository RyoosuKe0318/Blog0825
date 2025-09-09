import { useState, useEffect } from "react";

export default function Rate({ article }) {
  if (!article) return null;

  const [rate, setRate] = useState(article.rate ?? 0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("articles")) || [];
    const found = stored.find((a) => a.id === article.id);

    if (found) {
      setRate(found.rate ?? 0);
    } else {
      localStorage.setItem(
        "articles",
        JSON.stringify([...stored, { ...article, rate: rate }])
      );
    }
  }, [article]);

  const handleClick = () => {
    const newRate = rate + 1;
    setRate(newRate);

    const stored = JSON.parse(localStorage.getItem("articles")) || [];
    const updated = stored.map((a) =>
      a.id === article.id ? { ...a, rate: newRate } : a
    );
    localStorage.setItem("articles", JSON.stringify(updated));
  };

  return (
    <div
      className="absolute top-2 right-2 cursor-pointer text-red-500"
      onClick={handleClick}
    >
      {"♡".repeat(rate)}
    </div>
  );
}
