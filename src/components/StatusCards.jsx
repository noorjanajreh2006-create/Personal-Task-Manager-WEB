import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "tasks";

function StatusCards({ styles, TaskRow }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setTasks(Array.isArray(saved) ? saved : []);
  }, []);

  const lists = useMemo(() => {
    const norm = (s) => String(s || "").trim().toLowerCase();
    const isTodo = (t) => ["to do", "todo"].includes(norm(t.status));
    const isMissed = (t) => ["missed"].includes(norm(t.status));
    const isDone = (t) => ["done"].includes(norm(t.status));

    return {
      todo: tasks.filter(isTodo),
      missed: tasks.filter(isMissed),
      done: tasks.filter(isDone),
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
            <TaskRow key={t.id} title={t.title || "Untitled Task"} />
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
            <TaskRow key={t.id} title={t.title || "Untitled Task"} />
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
            <TaskRow key={t.id} title={t.title || "Untitled Task"} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatusCards;
