import React from "react";

function HeroBox({ onAddTask, onViewStatus }) {
  return (
    <div style={styles.heroBox}>
      <div style={styles.content}>
        <h1 style={styles.h1}>Manage your tasks easily</h1>
        <p style={styles.p}>
          Organize tasks by priority, category, and status — and keep your day under control.
        </p>

        <div style={styles.actions}>
          <button style={styles.primaryBtn} onClick={onAddTask}>
            Add Task
          </button>

          <button style={styles.secondaryBtn} onClick={onViewStatus}>
            View Status
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  heroBox: {
    flex: "1 1 420px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "26px",
    border: "1px solid #e6e6e6",
    boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
  },

  content: {
    textAlign: "left",
  },

  h1: {
    margin: "0 470px 0 0",
    fontSize: "34px",
    color: "#1f2937",
  },
  p: {
    marginTop: "12px",
    color: "#6b7280",
    lineHeight: 1.7,
    fontSize: "15px",
  },
  actions: {
    display: "flex",
    gap: "14px",
    marginTop: "20px",
  },
  primaryBtn: {
    border: "none",
    backgroundColor: "#2c7a7b",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "700",
  },
  secondaryBtn: {
    border: "1px solid #cbd5e1",
    backgroundColor: "#f8fafc",
    color: "#1f2937",
    padding: "12px 18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "700",
  },
};

export default HeroBox;
