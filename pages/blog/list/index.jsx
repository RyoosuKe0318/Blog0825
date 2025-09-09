import { useState } from "react";
import Layout from "@/components/shared/Layout";
import Filter from "@/components/list/Filter";
import Sort from "@/components/list/Sort";
import articles from "../../../data/articles.json";
import ListCard from "@/components/list/ListCard";

export default function BlogList() {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [displayArticles, setDisplayArticles] = useState(articles);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">記事一覧</h1>

        <Filter
          articles={articles}
          onFilter={(filtered) => {
            setFilteredArticles(filtered);
            setDisplayArticles(filtered);
          }}
        />

        <Sort
          articles={filteredArticles}
          onSort={(sorted) => setDisplayArticles(sorted)}
        />

        <div className="grid grid-cols-2 gap-6">
          {displayArticles.map((article) => (
            <ListCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
