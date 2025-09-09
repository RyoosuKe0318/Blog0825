import ArchiveLayout from "@/components/archive/ArchiveLayout";

export default function ReactLesson() {
  return (
    <ArchiveLayout>
      <section
        style={{
          fontFamily: "DotGothic16",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
          }}
        >
          React初回授業の感想　
          <span
            style={{
              fontSize: "24px",
            }}
          >
            2025/08/15 Fri　河合稜介
          </span>
        </h1>

        <h2
          style={{
            fontSize: "32px",
          }}
        >
          難易度:★★★☆☆
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              border: "2px solid",
              padding: "16px",
              maxWidth: "480px",
              wordWrap: "break-word",
            }}
          >
            <h2 style={{ borderBottom: "2px solid #00ff00" }}>わかったこと</h2>
            <ul>
              <li>ReactはJavaScriptの便利なライブラリのひとつ</li>
              <li>コンポーネントごとに作るので整理がしやすい</li>
              <li>
                モジュールがたくさんあるので、新しく作らなくてもできることが多い
              </li>
              <li>Buildで様々なブラウザに対応できるように変換してくれる</li>
            </ul>
          </div>
          <div
            style={{
              border: "2px solid",
              padding: "16px",
              maxWidth: "480px",
              wordWrap: "break-word",
            }}
          >
            <h2 style={{ borderBottom: "2px solid #ff0000" }}>
              わからないこと
            </h2>
            <ul>
              <li>動的なUIを作るにはどうすればいい？</li>
              <li>イベント処理とは？</li>
              <li>結局、わざわざReactを使う理由は？</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "400px 1fr",
            gap: "30px",
          }}
        >
          <div>
            <img
              src="/archive_photos/react-lesson7.png"
              alt="空の様子"
              style={{
                width: "400px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            <span style={{ fontSize: "24px" }}>
              本日の空の様子(12:00ごろ撮影)
            </span>
          </div>

          <div>
            <h2 style={{ fontSize: "32px" }}>感想</h2>
            <p style={{ fontSize: "24px" }}>
              今まで名前だけは聞いていたReactの授業がついに始まった。
              <br />
              インストールして実際に使えるようになるまでにこんなに時間がかかるとは、、、
              <br />
              次回以降はかなり難易度が上がるそうだが、大丈夫だろうか？
              <br />
              土日にしっかりと復習しておかないと、すぐに忘れてしまいそう。
            </p>
          </div>
        </div>
      </section>
    </ArchiveLayout>
  );
}
