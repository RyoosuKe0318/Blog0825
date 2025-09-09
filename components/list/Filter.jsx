import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import categoriesData from "../../data/categories.json";

export default function Filter({ articles, onFilter }) {
  const router = useRouter();
  const { category } = router.query;

  const parseCategories = (query) => {
    if (!query) return [];
    let cats = [];
    if (Array.isArray(query)) {
      query.forEach((c) => {
        if (typeof c === "string") {
          cats.push(
            ...c
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean)
          );
        }
      });
    } else if (typeof query === "string") {
      cats = query
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }
    return Array.from(new Set(cats));
  };

  const [selectedCategories, setSelectedCategories] = useState(
    parseCategories(category)
  );

  useEffect(() => {
    const cats = parseCategories(category);
    setSelectedCategories(cats);

    const filtered =
      cats.length > 0
        ? articles.filter(
            (article) =>
              Array.isArray(article.category) &&
              cats.every((c) => article.category.includes(c))
          )
        : articles;

    onFilter(filtered);
  }, [category, articles]);

  const toggleCategory = (cat) => {
    let newSelected;
    if (cat === "all") {
      newSelected = [];
    } else {
      newSelected = selectedCategories.includes(cat)
        ? selectedCategories.filter((c) => c !== cat)
        : [...selectedCategories, cat];
    }

    router.push(
      {
        pathname: "/blog/list",
        query: newSelected.length > 0 ? { category: newSelected } : {},
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      <button
        className={`px-4 py-2 border rounded ${
          selectedCategories.length === 0 ? "bg-blue-500 text-white" : ""
        }`}
        onClick={() => toggleCategory("all")}
      >
        すべて
      </button>
      {Object.keys(categoriesData).map((catKey) => (
        <button
          key={catKey}
          className={`px-4 py-2 border rounded ${
            selectedCategories.includes(catKey) ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => toggleCategory(catKey)}
        >
          {categoriesData[catKey].title}
        </button>
      ))}
    </div>
  );
}
