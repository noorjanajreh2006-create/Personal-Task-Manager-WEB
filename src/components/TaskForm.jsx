import React, { useState, useEffect } from "react";

function TaskForm({ addTask, updateTask, taskToEdit, }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Important");
  const [durationDays, setDurationDays] = useState("");
  const [categories, setCategories] = useState([]);//edit
  const [startDate, setStartDate] = useState("");
  const [status, setStatus] = useState("To Do");

  //edit
    useEffect(() => {
            const storeCategories = localStorage.getItem("categories");
            setCategories(JSON.parse(storeCategories));
    }, []);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setPriority(taskToEdit.priority);
      setDurationDays(taskToEdit.durationDays);
      setCategories(taskToEdit.categories);
      setStartDate(taskToEdit.startDate);
      setStatus(taskToEdit.status);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      priority,
      durationDays,
      categories,
      startDate,
      status,
    };

    taskToEdit ? updateTask(task) : addTask(task);

    setTitle("");
    setPriority("Important");
    setDurationDays("");
    // setCategories("");
    setStartDate("");
    setStatus("To Do");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

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
      <select>
          <option value="Select">Select</option>

          {categories.map((category)=>(
              <option key={category.id} value={category.title}>{category.title}</option>
          ))}

      </select>

      <label>Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <label>Duration (Days)</label>
      <input
        type="number"
        value={durationDays}
        onChange={(e) => setDurationDays(e.target.value)}
      />

      <button className="btn primary">
        {taskToEdit ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;