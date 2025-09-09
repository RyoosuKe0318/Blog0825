import { useState, useEffect } from "react";
import styles from "./react-lesson7.5.module.css";
import ArchiveLayout from "@/components/archive/ArchiveLayout";

export default function Countdown() {
  const goal = new Date("2025-09-20T08:40:00");

  const [timeLeft, setTimeLeft] = useState({
    day: 0,
    hour: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const differ = goal.getTime() - now.getTime();

      if (differ > 0) {
        const day = Math.floor(differ / 1000 / 60 / 60 / 24);
        const hour = Math.floor(differ / 1000 / 60 / 60) % 24;
        const min = Math.floor(differ / 1000 / 60) % 60;
        const sec = Math.floor(differ / 1000) % 60;
        setTimeLeft({ day, hour, min, sec });
      } else {
        setTimeLeft({ day: 0, hour: 0, min: 0, sec: 0 });
        clearInterval(timerId);
      }
    }

    const timerId = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timerId);
  }, [goal]);

  return (
    <ArchiveLayout>
      <div className={styles.container}>
        <h1 className={styles.heading}>帰国までの残り時間</h1>
        <main className={styles.main}>
          <div className={styles.timeBlock}>
            <span>{timeLeft.day}</span>
            <span className={styles.unit}>日</span>
          </div>
          <div className={styles.timeBlock}>
            <span>{timeLeft.hour}</span>
            <span className={styles.unit}>時間</span>
          </div>
          <div className={styles.timeBlock}>
            <span>{timeLeft.min}</span>
            <span className={styles.unit}>分</span>
          </div>
          <div className={styles.timeBlock}>
            <span>{timeLeft.sec}</span>
            <span className={styles.unit}>秒</span>
          </div>
        </main>
      </div>
    </ArchiveLayout>
  );
}
