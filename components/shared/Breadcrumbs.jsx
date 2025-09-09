import Link from "next/link";
import { useRouter } from "next/router";
import articles from "../../data/articles.json";

export default function Breadcrumbs() {
  const router = useRouter();
  const path = router.asPath.split("?")[0];
  const segments = path.split("/").filter((seg) => seg.length > 0);

  const crumbs = [{ label: "Top", href: "/" }];

  segments.forEach((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");

    if (segments[i - 1] === "list") {
      const article = articles.find((a) => String(a.id) === seg);
      if (article) {
        crumbs.push({ label: article.title, href });
        return;
      }
    }

    crumbs.push({ label: decodeURIComponent(seg), href });
  });

  return (
    <nav className="text-md text-gray-600 px-4 py-2">
      <ol className="flex space-x-2">
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center">
            <Link href={crumb.href} className="hover:underline">
              {crumb.label}
            </Link>
            {i < crumbs.length - 1 && <span className="mx-1">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
