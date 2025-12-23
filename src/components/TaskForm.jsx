import React, { useEffect, useState } from "react";

function TaskForm({ addTask, updateTask, taskToEdit }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Important");
  const [durationDays, setDurationDays] = useState("");

 

  const [categories, setCategories] = useState([]); 
  const [selectedCategoryId, setSelectedCategoryId] = useState("Select"); 

  const [startDate, setStartDate] = useState("");
  const [status, setStatus] = useState("To Do");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("categories") || "[]");
    setCategories(Array.isArray(stored) ? stored : []);
  }, []);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || "");
      setPriority(taskToEdit.priority || "Important");
      setDurationDays(taskToEdit.durationDays || "");
      setStartDate(taskToEdit.startDate || "");
      setStatus(taskToEdit.status || "To Do");
      setSelectedCategoryId(taskToEdit.categoryId || "Select");
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      priority,
      durationDays,
      startDate,
      status, // To Do / Missed / Done
      categoryId: selectedCategoryId,

    };

    taskToEdit ? updateTask(task) : addTask(task);

    setTitle("");
    setPriority("Important");
    setDurationDays("");
    setStartDate("");
    setStatus("To Do");
    setSelectedCategoryId("Select");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Priority</label>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Very Important">Very Important</option>
        <option value="Important">Important</option>
        <option value="Less Important">Less Important</option>
      </select>

      <label>Status</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="Done">Done</option>
        <option value="Missed">Missed</option>
      </select>

      <label>Category</label>
      <select value={selectedCategoryId} onChange={(e) => setSelectedCategoryId(e.target.value)}>
        <option value="Select">Select</option>
        {categories.map((c) => (
          <option key={c.id} value={String(c.id)}>
            {c.title}
          </option>
        ))}
      </select>

      <label>Start Date</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

      <label>Duration (Days)</label>
      <input type="number" value={durationDays} onChange={(e) => setDurationDays(e.target.value)} />

      <button type="submit" className="btn primary">{taskToEdit ? "Update Task" : "Add Task"}</button>
    </form>
  );
}

export default TaskForm;
