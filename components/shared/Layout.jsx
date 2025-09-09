import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="pt-20 mx-[150px]">
        <Breadcrumbs />
        <main className="px-4">{children}</main>
      </div>
      <Footer />
    </>
  );
}
