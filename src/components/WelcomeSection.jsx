import React from "react";

function WelcomeSection({ onViewToday }) {
  return (
    <section style={styles.welcome}>
      <div style={styles.welcomeContent}>
        <h2 style={styles.welcomeTitle}>Welcome 👋</h2>
        <p style={styles.welcomeText}>
          Plan your day, stay focused, and manage your tasks efficiently.
        </p>
        <button style={styles.welcomeBtn} onClick={onViewToday}>
          View Today’s Tasks
        </button>
      </div>
    </section>
  );
}

const styles = {
  welcome: {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url('/home-welcome.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "14px",
    border: "1px solid #e6e6e6",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    marginBottom: "26px",
    minHeight: "260px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  welcomeContent: {
    maxWidth: "520px",
    padding: "0 20px",
  },
  welcomeTitle: {
    margin: 0,
    fontSize: "28px",
    color: "#fff",
    fontWeight: "700",
  },
  welcomeText: {
    margin: "10px 0 18px",
    color: "#f1f5f9",
    fontSize: "15px",
    lineHeight: 1.6,
  },
  welcomeBtn: {
    backgroundColor: "#2c7a7b",
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "700",
  },
};

export default WelcomeSection;