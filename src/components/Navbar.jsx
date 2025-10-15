// src/components/Navbar.jsx
export default function Navbar({ title = "Mini-Insta" }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "white",
        borderBottom: "1px solid #f1a8ecff",
        padding: "10px 16px",
      }}
      aria-label="app navigation"
    >
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <strong style={{ fontSize: 18 }}>{title}</strong>
        <div style={{ display: "flex", gap: 8 }}>
          <button aria-label="Upload (placeholder)" disabled>Upload</button>
          <button aria-label="Messages (placeholder)" disabled>MSG</button>
        </div>
      </div>
    </header>
  );
}
