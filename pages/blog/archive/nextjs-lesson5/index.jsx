import { useRouter } from "next/router";
import products from "./products.json";
import styles from "./nextjs-lesson5.module.css";
import ArchiveLayout from "@/components/archive/ArchiveLayout";

export default function ProductList() {
  const router = useRouter();

  const handleClick = (id) => {
    // 現在のパスを取得して id を結合
    const currentPath = router.asPath;
    // 末尾に / があれば消す
    const basePath = currentPath.endsWith("/")
      ? currentPath.slice(0, -1)
      : currentPath;
    router.push(`${basePath}/${id}`);
  };
  // console.log(`URL: ${router.asPath}`);

  return (
    <ArchiveLayout>
      <div className={styles.container}>
        <h1 className=" text-6xl">アイテム リスト</h1>
        <ul className=" text-3xl cursor-pointer">
          {products.map((product, i) => (
            <li
              key={i}
              onClick={() => handleClick(product.id)}
              className=" p-2 gap-2 "
            >
              <h2>
                {product.id}.{product.name}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </ArchiveLayout>
  );
}
