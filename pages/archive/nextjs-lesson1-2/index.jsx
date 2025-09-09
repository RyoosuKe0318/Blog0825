import Header from "./Header";
import Footer from "./Footer";
import ArchiveLayout from "@/components/archive/ArchiveLayout";

export default function About() {
  return (
    <ArchiveLayout>
      <Header name="World" />
      <p>Welcome to your first Next.js app.</p>
      <p>
        Type your name after
        "http://localhost:3000/blog/archive/nextjs-lesson1-2/"!
      </p>
      <Footer YourBrandName="リング" />
    </ArchiveLayout>
  );
}
