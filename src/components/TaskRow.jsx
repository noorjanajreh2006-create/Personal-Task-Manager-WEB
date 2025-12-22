import React from "react";

const STORAGE_KEY = "tasks";

function TaskRow({ task }) {
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;

    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    const updated = saved.map((t) =>
      t.id === task.id ? { ...t, status: newStatus } : t
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    window.dispatchEvent(new Event("tasks-updated"));
  };

  return (
    <div style={styles.row}>
      <span style={styles.title}>{task.title}</span>

      <select
        value={task.status}
        onChange={handleStatusChange}
        style={styles.select}
      >
        <option value="To Do">To Do</option>
        <option value="Missed">Missed</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}

const styles = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    borderRadius: "12px",
    backgroundColor: "rgba(255,255,255,0.75)",
    border: "1px solid rgba(0,0,0,0.06)",
  },
  title: {
    fontWeight: "700",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  select: {
    padding: "6px 8px",
    borderRadius: "8px",
    border: "1px solid rgba(0,0,0,0.2)",
    fontSize: "13px",
    cursor: "pointer",
  },
};

export default TaskRow;
