import DarkButton from "./DarkButton";
import NavButton from "./NavButton";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-[#fbd770] shadow p-4 z-50">
        <div className="mx-[120px] flex items-center justify-between">
          <Link href="/blog">
            <h1 className="text-5xl font-bold cursor-pointer">
              🐾ちくわBlog🐈
            </h1>
          </Link>
          {/* <DarkButton /> */}
          <NavButton />
        </div>
      </header>
    </div>
  );
}
