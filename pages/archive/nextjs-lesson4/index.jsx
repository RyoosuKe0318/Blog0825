import ArchiveLayout from "@/components/archive/ArchiveLayout";
import { useState } from "react";

export default function Favorite() {
  // 各投稿をpostsの各オブジェクトとして定義
  const [posts, setPosts] = useState([
    { username: "Ryosuke", post: "モアルボアル行ってきました！", fav: 0 },
    { username: "user1", post: "夕日がきれい！", fav: 0 },
    { username: "user2", post: "ウミガメ見れた！", fav: 0 },
  ]);

  // いいねの処理
  const addFav = (i) => {
    const newPosts = [...posts];
    newPosts[i].fav += 1;
    setPosts(newPosts);
  };

  // リセットの処理
  const resetFav = (i) => {
    const newPosts = [...posts];
    newPosts[i].fav = 0;
    setPosts(newPosts);
  };

  return (
    <ArchiveLayout>
      <div className="flex flex-col items-center gap-6">
        <header className="flex items-end gap-8 w-5xl bg-blue-200 p-4 rounded-xl">
          <h1 className="text-3xl font-bold">💬Posts</h1>
          <span className="text-xl">
            Total Fav: {posts.reduce((sum, item) => sum + item.fav, 0)}
          </span>
        </header>
        {posts.map((item, i) => (
          <main
            key={i}
            className="w-4xl bg-white shadow-lg rounded-2xl p-4 border hover:shadow-xl transition-shadow"
          >
            <h2>{item.username}</h2>
            <p className="text-2xl text-[#333]">{item.post}</p>
            <button
              className="text-xl text-[#333] active:text-blue-500 active:scale-110 transition-all duration-50"
              onClick={() => resetFav(i)}
            >
              ↻
            </button>
            <button
              className="text-2xl text-[#333] active:text-red-500 active:scale-110 transition-all duration-100 ease-in-out"
              onClick={() => addFav(i)}
            >
              ♡{item.fav}
            </button>
          </main>
        ))}
      </div>
    </ArchiveLayout>
  );
}
