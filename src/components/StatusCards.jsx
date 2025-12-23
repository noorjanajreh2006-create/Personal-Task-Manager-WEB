import React, { useEffect, useMemo, useState } from "react";
import TaskRow from "./TaskRow";

const STORAGE_KEY = "tasks";

function StatusCards({ styles }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = () => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setTasks(Array.isArray(saved) ? saved : []);
  };

  useEffect(() => {
    loadTasks();

    const refresh = () => loadTasks();
    window.addEventListener("tasks-updated", refresh);

    return () => window.removeEventListener("tasks-updated", refresh);
  }, []);

  const lists = useMemo(() => {
    const norm = (s) => String(s || "").trim().toLowerCase();
    return {
      todo: tasks.filter((t) => norm(t.status) === "to do"),
      missed: tasks.filter((t) => norm(t.status) === "missed"),
      done: tasks.filter((t) => norm(t.status) === "done"),
    };
  }, [tasks]);

  return (
    <div id="status-cards" style={styles.cards}>
      <div style={{ ...styles.card, backgroundColor: "#edf2f7" }}>
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>To Do</h2>
          <span style={styles.count}>{lists.todo.length} Tasks</span>
        </div>
        <div style={styles.taskList}>
          {lists.todo.map((t) => (
            <TaskRow key={t.id} task={t} />
          ))}
        </div>
      </div>

      <div style={{ ...styles.card, backgroundColor: "#fff5f5" }}>
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>Missed</h2>
          <span style={styles.count}>{lists.missed.length} Tasks</span>
        </div>
        <div style={styles.taskList}>
          {lists.missed.map((t) => (
            <TaskRow key={t.id} task={t} />
          ))}
        </div>
      </div>

      <div style={{ ...styles.card, backgroundColor: "#f0fff4" }}>
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>Done</h2>
          <span style={styles.count}>{lists.done.length} Tasks</span>
        </div>
        <div style={styles.taskList}>
          {lists.done.map((t) => (
            <TaskRow key={t.id} task={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatusCards;
