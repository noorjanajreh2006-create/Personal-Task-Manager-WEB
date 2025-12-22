import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "tasks";

function StatusStats({ styles }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setTasks(Array.isArray(saved) ? saved : []);
  }, []);

  const stats = useMemo(() => {
    const norm = (s) => String(s || "").trim().toLowerCase();
    const isTodo = (t) => ["to do", "todo"].includes(norm(t.status));
    const isMissed = (t) => ["missed"].includes(norm(t.status));
    const isDone = (t) => ["done"].includes(norm(t.status));

    return {
      total: tasks.length,
      todo: tasks.filter(isTodo).length,
      missed: tasks.filter(isMissed).length,
      done: tasks.filter(isDone).length,
    };
  }, [tasks]);

  return (
    <div style={styles.summaryBox}>
      <div>
        <div style={styles.summaryLabel}>Overview</div>
        <div style={styles.summaryValue}>{stats.total} Total Tasks</div>
        <div style={styles.summaryMeta}>
          Done: {stats.done} • Missed: {stats.missed} • To Do: {stats.todo}
        </div>
      </div>

      <div style={styles.summaryRight}>
        <div style={styles.smallNote}>Statistics update from saved tasks.</div>
      </div>
    </div>
  );
}

export default StatusStats;
