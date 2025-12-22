import React, { useEffect, useMemo, useState } from "react";

function TodaysTasksTable({ tableRef }) {
  const STORAGE_KEY = "tasks";
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setTasks(stored);
  }, []);

  const todayTasks = useMemo(() => {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);

    const parseDateOnly = (val) => {
      if (!val) return null;
      const d = new Date(val);
      if (Number.isNaN(d.getTime())) return null;
      d.setHours(0, 0, 0, 0);
      return d;
    };

    const getField = (t, keys) => {
      for (const k of keys) {
        if (t?.[k] !== undefined && t?.[k] !== null && t?.[k] !== "") return t[k];
      }
      return "";
    };

    const isForToday = (t) => {
      const startRaw = getField(t, ["startDate", "start_date", "date", "start"]);
      const durationRaw = getField(t, ["duration", "durationDays", "days"]);

      const start = parseDateOnly(startRaw);
      const duration = Number(durationRaw || 1);

      if (!start) return false;

      const end = new Date(start);
      end.setDate(end.getDate() + Math.max(1, duration) - 1);
      end.setHours(23, 59, 59, 999);

      return start <= endOfToday && end >= startOfToday;
    };

    return tasks.filter(isForToday);
  }, [tasks]);

  return (
    <section ref={tableRef} style={styles.dailySection}>
      <h3 style={styles.dailyTitle}>Today’s Tasks</h3>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Priority</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Start Date</th>
            <th style={styles.th}>Duration</th>
          </tr>
        </thead>
        <tbody>
          {todayTasks.length === 0 ? (
            <tr>
              <td style={styles.td} colSpan={6}>
                No tasks scheduled for today.
              </td>
            </tr>
          ) : (
            todayTasks.map((t, idx) => (
              <tr key={t.id || idx}>
                <td style={styles.td}>{t.title || t.name || "—"}</td>
                <td style={styles.td}>{t.priority || "—"}</td>
                <td style={styles.td}>{t.status || "—"}</td>
                <td style={styles.td}>{t.category || "—"}</td>
                <td style={styles.td}>{t.startDate || t.start_date || "—"}</td>
                <td style={styles.td}>{t.duration || t.durationDays || "—"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}

const styles = {
  dailySection: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "24px",
    border: "1px solid #e6e6e6",
  },
  dailyTitle: {
    marginBottom: "14px",
    color: "#2c7a7b",
    fontSize: "18px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    textAlign: "left",
    padding: "10px",
    borderBottom: "1px solid #e6e6e6",
    color: "#374151",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #f0f0f0",
    color: "#111827",
  },
};

export default TodaysTasksTable;
