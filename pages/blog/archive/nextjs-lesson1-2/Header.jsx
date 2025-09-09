import HomeButton from "./HomeButton";

export default function Header({ name }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        fontSize: "30px",
        borderBottom: "1px solid #333",
        padding: "16px 40px",
      }}
    >
      <h1>Hello, {name}!</h1>
      <HomeButton />
    </div>
  );
}
