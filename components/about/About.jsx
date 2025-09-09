export default function About() {
  return (
    <div className="flex flex-col justify-center gap-6 my-[20px] mx-[100px]">
      <h1 className="text-4xl font-bold">このブログについて</h1>
      <p className="text-xl ">
        このブログは、2025年の夏にRing GLobal
        AcademyのITクラスにおいて、NextJSの最終課題として作成したものです。
        <br />
        製作時間はおよそ25時間、架空のブログ記事などNextJSとかかわりの薄い部分のほか、レイアウトやエラーの確認などでChatGPTを使用しました。
        <br />
        <br />
        この場を借りて、ご指導賜ったRing GLobal
        Academyの方々はじめ、関係者の皆様に感謝申し上げます。
      </p>
      <div className="grid grid-cols-[250px_1fr] mt-[40px] border rounded p-4">
        <img
          src="/main_photos/chikuwa.jpg"
          alt="ちくわ"
          className="w-[200px] h-[200px] object-cover object-center rounded-full border-4 border-gray-300"
        />
        <div className="flex flex-col">
          <h2>作成者：河合稜介</h2>
          <p>2003年3月18日生まれ、成蹊大学法学部在籍（2025年8月現在）。</p>
          <br />
          <h2>写真：ちくわ</h2>
          <p>
            2023年8月26日生まれ、同年11月に保護猫として動物病院から我が家にやってきた。
          </p>
        </div>
      </div>
    </div>
  );
}
