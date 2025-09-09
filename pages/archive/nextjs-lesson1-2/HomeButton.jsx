import { useRouter } from "next/router";

export default function HomeButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/blog/archive");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "#333  ",
        color: "white",
        padding: "5px 10px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      Home
    </button>
  );
}
