import React from "react";
import Footer from "../components/Footer";
import StatusHero from "../components/StatusHero";
import StatusStats from "../components/StatusStats";
import StatusCards from "../components/StatusCards";

function Status() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.page}>
        <StatusHero />
        <StatusStats styles={styles} />
        <StatusCards styles={styles} TaskRow={TaskRow} />
      </div>

      <Footer
        studentName="NOOR JANAJREH"
        studentId="12400696"
        githubUrl="https://github.com/noorjanajreh2006-create"
      />
    </div>
  );
}

function TaskRow({ title }) {
  return (
    <div style={styles.taskRow}>
      <span style={styles.taskTitle}>{title}</span>
      <button type="button" style={styles.editBtn}>
        Edit
      </button>
    </div>
  );
}

const styles = {
  wrapper: { padding: "40px" },
  page: { padding: 0 },

  summaryBox: {
    display: "flex",
    justifyContent: "space-between",
    gap: "14px",
    padding: "18px",
    borderRadius: "14px",
    backgroundColor: "#fff",
    border: "1px solid #e7e7e7",
    boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
    marginBottom: "22px",
    flexWrap: "wrap",
  },
  summaryLabel: { fontSize: "14px", color: "#666", marginBottom: "6px" },
  summaryValue: { fontSize: "22px", fontWeight: "700", marginBottom: "6px" },
  summaryMeta: { color: "#555", fontSize: "14px" },
  summaryRight: {
    minWidth: "260px",
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  smallNote: { color: "#666", fontSize: "13px", textAlign: "right" },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px",
  },
  card: { padding: "18px", borderRadius: "12px" },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  cardTitle: { margin: 0 },
  count: { fontSize: "13px", color: "#555" },

  taskList: {
    marginTop: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  taskRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    padding: "12px",
    borderRadius: "12px",
    backgroundColor: "rgba(255,255,255,0.75)",
    border: "1px solid rgba(0,0,0,0.06)",
  },
  taskTitle: {
    fontWeight: "700",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  editBtn: {
    padding: "7px 12px",
    borderRadius: "10px",
    border: "1px solid rgba(0,0,0,0.15)",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    fontSize: "13px",
    whiteSpace: "nowrap",
  },
};

export default Status;
