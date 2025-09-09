import { useState } from "react";
import photos from "../../data/gallaly.json";
import styles from "../../styles/Gallaly.module.css";

export default function GallalyCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.container}>
      <img
        src={photos[currentIndex].src}
        alt={photos[currentIndex].alt}
        className={styles.photo}
      />
      <button onClick={prevPhoto} className={`${styles.arrow} ${styles.left}`}>
        ＜
      </button>
      <button onClick={nextPhoto} className={`${styles.arrow} ${styles.right}`}>
        ＞
      </button>
    </div>
  );
}
