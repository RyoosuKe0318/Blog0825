import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Breadcrumbs from "../shared/Breadcrumbs";

export default function ArchiveLayout({ children, imageSrc }) {
  return (
    <>
      <Header />
      <div className="pt-20 mx-[150px] min-h-screen flex flex-col mb-[20px]">
        <Breadcrumbs />
        <main className="flex-1 px-4 py-8 bg-white border border-gray-300 rounded-xl shadow-sm">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
