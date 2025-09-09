import { useState } from "react";
import Link from "next/link";

export default function NavButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 relative flex flex-col justify-center items-center cursor-pointer"
      >
        <span
          className={`absolute w-8 h-[3px] bg-black rounded transform transition duration-150 ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        ></span>

        <span
          className={`absolute w-8 h-[3px] bg-black rounded transform transition duration-150 ${
            open ? "opacity-0" : ""
          }`}
        ></span>

        <span
          className={`absolute w-8 h-[3px] bg-black rounded transform transition duration-150 ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        ></span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-[#e1f7ff] shadow-lg rounded-lg p-4 flex flex-col space-y-4 text-xl">
          <Link href="/">ホーム</Link>
          <Link href="/list">記事一覧</Link>
          <Link href="/about">概要</Link>
          <Link href="/archive">制作アーカイブ</Link>
          <Link href="/form">お問い合わせフォーム</Link>
        </div>
      )}
    </div>
  );
}
