import { useEffect, useState } from "react";

export default function DarkButton() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
      document.body.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.body.setAttribute("data-theme", "light");
      setDark(false);
    } else {
      document.body.setAttribute("data-theme", "dark");
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "6px 12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        cursor: "pointer",
      }}
    >
      {dark ? "ライトモード ON" : "ダークモード OFF"}
    </button>
  );
}
