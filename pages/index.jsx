import Layout from "@/components/shared/Layout";
import CategoryCard from "@/components/home/CategoryCard";
import RecommendCard from "@/components/home/Recommend";
import GallalyCard from "@/components/home/GallalyCard";

export default function HomePage() {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-[400px_1fr]">
          <RecommendCard top={4} />
          <GallalyCard />
        </div>
        <CategoryCard />
      </Layout>
    </>
  );
}
