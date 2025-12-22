import React from "react";

function StatusHero() {
  const goToCards = () => {
    document
      .getElementById("status-cards")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={styles.hero}>
      <div style={styles.left}>
        <h1 style={styles.title}>Task Status</h1>

        <p style={styles.subtitle}>
          View your tasks and track their progress easily.
        </p>

        <button
          type="button"
          style={styles.btn}
          onClick={goToCards}
        >
          View Status
        </button>
      </div>

      <img
        src="/status-hero.png"
        alt="Task status"
        style={styles.img}
      />
    </div>
  );
}

const styles = {
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    padding: "28px 32px",
    borderRadius: "18px",
    backgroundColor: "#f1f8f7",  
    marginBottom: "22px",
    border: "1px solid rgba(44,122,123,0.15)",
  },

  left: {
    maxWidth: "540px",
  },

  title: {
    margin: "0 0 8px -160px",       
    fontSize: "32px",
    color: "#3a8f8a",
    fontWeight: "600",
  },

  subtitle: {
    margin: "0 0 16px 0",
    color: "#64748b",
    fontSize: "15px",
    lineHeight: 1.6,
  },

  btn: {
    padding: "8px 16px",
    borderRadius: "10px",
    border: "1px solid rgba(44,122,123,0.3)",
    backgroundColor: "#2c7a7b",
    color: "#e6f3f2",
    fontSize: "14px",
    cursor: "pointer",
  },

  img: {
    width: "200px",
    height: "auto",
    opacity: 0.9,
    flexShrink: 0,
  },
};

export default StatusHero;
