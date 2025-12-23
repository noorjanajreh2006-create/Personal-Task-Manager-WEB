import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

    useEffect(() => {
        if (dark) {
        document.body.style.backgroundColor = "#0f172a";
        document.body.style.color = "#f8fafc";
        localStorage.setItem("theme", "dark");
        } else {
        document.body.style.backgroundColor = "#f8fafc";
        document.body.style.color = "#111827";
        localStorage.setItem("theme", "light");
        }
    }, [dark]);

  return (
      <button
      onClick={() => setDark(!dark)}
      style={{
          width: "40px",
          height: "40px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          cursor: "pointer",
          backgroundColor: dark ? "#111827" : "#f8fafc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
             }}
    >
    {dark ? "☀️" : "🌙"}
    </button>

  );
}

export default ThemeToggle;
