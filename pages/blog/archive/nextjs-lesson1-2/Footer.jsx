export default function Footer({ YourBrandName }) {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        border: "1px solid #1dacffff",
        backgroundColor: "#aee8ffff",
      }}
    >
      © 2025 {YourBrandName}. All rights reserved.
    </footer>
  );
}
