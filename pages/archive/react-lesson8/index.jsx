import ArchiveLayout from "@/components/archive/ArchiveLayout";
import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [count, setCount] = useState(null); // ミリ秒
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || count === null) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + 10;
        if (next <= 0) {
          setIsRunning(false); // 0以下になったら停止
          return 0;
        }
        return next;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [isRunning, count]);

  return (
    <ArchiveLayout>
      <div className="stopwatch-wrapper">
        {count !== null && (
          <p>
            時間: {Math.floor(count / 1000 / 60)}分
            {Math.floor(count / 1000) % 60}秒{count % 1000}ミリ秒
          </p>
        )}

        <div className="stopwatch-buttons">
          {count === null ? (
            <button
              onClick={() => {
                setCount(0);
                setIsRunning(true);
              }}
            >
              スタート
            </button>
          ) : (
            <>
              <button onClick={() => setIsRunning(true)}>リスタート</button>
              <button onClick={() => setIsRunning(false)}>ストップ</button>
              <button
                onClick={() => {
                  setCount(null);
                  setIsRunning(false);
                }}
              >
                リセット
              </button>
            </>
          )}
        </div>
      </div>
    </ArchiveLayout>
  );
};

export default Stopwatch;
