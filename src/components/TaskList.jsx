import React, { useEffect, useMemo, useState } from "react";

function TaskList({ tasks, onEdit, onDelete }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("categories") || "[]");
    setCategories(Array.isArray(stored) ? stored : []);
  }, []);

  const categoryMap = useMemo(() => {
    const map = {};
    categories.forEach((c) => {
      map[String(c.id)] = c.title;
    });
    return map;
  }, [categories]);

  if (tasks.length === 0) {
    return <p>No tasks added yet</p>;
  }

  return (
    <>
      {tasks.map((task) => (
        <div className="task-card" key={task.id}>
          <h3>{task.title}</h3>

          <p><b>Priority:</b> {task.priority}</p>
          <p><b>Status:</b> {task.status}</p>

          <p>
            <b>Category:</b>{" "}
            {task.categoryId && task.categoryId !== "Select"
              ? (categoryMap[String(task.categoryId)] || "Unknown Category")
              : "Select"}
          </p>

          <p><b>Start Date:</b> {task.startDate}</p>
          <p><b>Duration:</b> {task.durationDays} days</p>

          <button className="btn edit" onClick={() => onEdit(task)}>
            Edit
          </button>
          <button className="btn delete" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default TaskList;
