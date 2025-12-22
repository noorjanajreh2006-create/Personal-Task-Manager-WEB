import React, { useEffect, useState } from "react";

const STORAGE_KEY = "tasks";

function PriorityTables() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setTasks(Array.isArray(saved) ? saved : []);
  }, []);

  const groups = {
    "Very Important": tasks.filter(t => t.priority === "Very Important"),
    "Important": tasks.filter(t => t.priority === "Important"),
    "Less Important": tasks.filter(t => t.priority === "Less Important"),
  };

  const renderTable = (title, list) => (
    <div style={{ marginBottom: "40px" }}>
      <h2>{title} ({list.length})</h2>

      {list.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <table border="1" width="100%" cellPadding="8">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>Duration</th>
            </tr>
          </thead>

          <tbody>
            {list.map(task => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>{task.startDate}</td>
                <td>{task.durationDays}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

  return (
    <>
      {renderTable("Very Important", groups["Very Important"])}
      {renderTable("Important", groups["Important"])}
      {renderTable("Less Important", groups["Less Important"])}
    </>
  );
}

export default PriorityTables;
