import { useRouter } from "next/router";
import { useState } from "react";
import products from "../products.json";
import styles from "../nextjs-lesson5.module.css";
import ArchiveLayout from "@/components/archive/ArchiveLayout";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = products[id - 1];
  const [section, setSection] = useState("");

  if (!product)
    return (
      <p className="flex flex-col items-center p-6 text-6xl">
        アイテム が みつかりません
      </p>
    );

  console.log(`URL: ${router.asPath}`);
  console.log(id);

  return (
    <ArchiveLayout>
      <div className={styles.container}>
        <h1 className="text-6xl font-bold mb-6">{product.name}</h1>
        <div className="grid grid-cols-[200px_1fr] gap-6 w-full max-w-3xl text-4xl">
          <ul className="space-y-2 mb-6 cursor-pointer">
            <li
              className={`${
                section === "price" ? "underline underline-offset-4" : ""
              }`}
              onClick={() => setSection("price")}
            >
              ねだん
            </li>
            <li
              className={`${
                section === "effect" ? "underline underline-offset-4" : ""
              }`}
              onClick={() => setSection("effect")}
            >
              こうか
            </li>
            <li
              className={`${
                section === "comment" ? "underline underline-offset-4" : ""
              }`}
              onClick={() => setSection("comment")}
            >
              ひとこと
            </li>
          </ul>

          <div>
            {section === "price" && <p> {product.price}</p>}
            {section === "effect" && <p> {product.effect}</p>}
            {section === "comment" && <p> {product.comment}</p>}
          </div>
        </div>
      </div>
    </ArchiveLayout>
  );
}
