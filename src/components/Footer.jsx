import React from "react";

function Footer({ studentName, studentId, githubUrl }) {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.line}>
          <span style={styles.text}>2026 © Personal Task Manager</span>
          <span style={styles.dot}>•</span>
          <span style={styles.text}>Organize your tasks. Stay productive.</span>
        </div>

        <div style={styles.line}>
          <span style={styles.text}>Developed by</span>
          <span style={styles.strong}>{studentName}</span>
          <span style={styles.sep}>|</span>
          <span style={styles.text}>Student ID</span>
          <span style={styles.strong}>{studentId}</span>
        </div>

        <a href={githubUrl} target="_blank" rel="noreferrer" style={styles.link}>
          View GitHub Profile
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
  marginTop: "28px",
  backgroundColor: "#fff",
  border: "1px solid #e6e6e6",
  borderRadius: "16px",

  backgroundImage: "url('/github.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 24px center",
  backgroundSize: "120px",
},

  inner: {
    padding: "18px 22px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },
  line: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#6b7280",
    fontSize: "14px",
  },
  strong: {
    color: "#111827",
    fontSize: "14px",
    fontWeight: 600,
  },
  dot: {
    color: "#cbd5e1",
    fontSize: "14px",
  },
  sep: {
    color: "#cbd5e1",
    margin: "0 2px",
  },
  link: {
    color: "#2c7a7b",
    fontWeight: 600,
    textDecoration: "none",
    padding: "8px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(44, 122, 123, 0.25)",
    backgroundColor: "rgba(44, 122, 123, 0.06)",
  },
};

export default Footer;
