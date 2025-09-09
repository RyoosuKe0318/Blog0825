import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import ArchiveLayout from "@/components/archive/ArchiveLayout";

export default function About() {
  const cardItems = [
    {
      title: "ナルスアン島",
      grade: "★★★★★",
      content:
        "ナルスアン島は、海洋保護区として知られ、透明度抜群の海と豊かな珊瑚礁が魅力です。島全体が小さなリゾートとして機能しており、美しい桟橋が印象的です。ここでは、ダイビングやスノーケリングで海中世界を楽しむことができ、熱帯魚やカラフルなサンゴを間近で観察できます。また、レストランで新鮮な海鮮料理も楽しめるため、日帰り観光にも最適なスポットです。",
      src: "https://cebutravel.net/nalusuanisland/",
      img: "/archive_photos/nalusuan.jpg",
    },
    {
      title: "マゼランクロス",
      grade: "★★★☆☆",
      content:
        "マゼランクロスは、ポルトガルの探検家フェルディナンド・マゼランが1521年にフィリピンに到着した際に建てられた十字架で、セブ市にあります。この十字架はフィリピンでのキリスト教の始まりを象徴し、教会と同様に多くの巡礼者や観光客が訪れる場所です。建物内の天井には、十字架が建てられた当時の様子が描かれた美しいフレスコ画があり、歴史を感じることができます。",
      src: "https://cebutravel.net/magellanscross/",
      img: "/archive_photos/Magellans-Cross.jpg",
    },
    {
      title: "Cebu Wonderland Shooters Club",
      grade: "★★★★☆",
      content:
        "マクタン島の東側に位置する「Cebu Wonderland Shooters Club」は、セブ島で唯一の屋外射撃場として知られています。​開放的な雰囲気の中、ハンドガン、ライフル、ショットガンなど多彩な銃器を取り揃えており、初心者から上級者まで対応可能です。",
      src: "https://cebutravel.net/shooting/#index_id4",
      img: "/archive_photos/CebuWonderlandShootersClub.jpg",
    },
  ];
  return (
    <ArchiveLayout>
      <div className="bg-[#faebd7]">
        <Header />
        <Card items={cardItems} />
        <Footer YourBrandName={"Ring Global Academy"} />
      </div>
    </ArchiveLayout>
  );
}
