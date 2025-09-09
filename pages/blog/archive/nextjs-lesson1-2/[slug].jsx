import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Photo from "./Photo";
import ArchiveLayout from "@/components/archive/ArchiveLayout";

export default function AboutSlugPage() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router.query);

  return (
    <ArchiveLayout>
      <Header name={slug} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "40px",
        }}
      >
        <Photo
          img={
            <img
              src="/archive_photos/nextjs-lesson1-2.jpg"
              alt="ちくわ"
              style={{ width: "500px", height: "auto" }}
            />
          }
        />
        <main>
          <h1 style={{ fontSize: "24px" }}>
            河合 稜介 （成蹊大学法学部法律学科3年生）
          </h1>
          <p>勉強している法律：刑法、独占禁止法</p>
          <p>好きなことわざ：禍福は糾える縄の如し</p>
        </main>
      </div>
      <Footer YourBrandName="RingGlobalAcademy" />
    </ArchiveLayout>
  );
}
