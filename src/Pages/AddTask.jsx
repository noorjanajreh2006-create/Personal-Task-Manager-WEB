import React, { useEffect, useState } from "react";
import "../components/AddTask.css";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";

const STORAGE_KEY = "tasks";

function AddTask() {
  // ✅ تحميل من localStorage من أول render (بدون useEffect تحميل)
  const [tasks, setTasks] = useState(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  });

  const [taskToEdit, setTaskToEdit] = useState(null);

  // ✅ حفظ بعد أي تغيير (هيك ما رح يكتب [] بالغلط أول ما تفتح الصفحة)
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks((prev) => [...prev, task]);

  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
    setTaskToEdit(null);
  };

  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));

  return (
    <div className="page">
      <div className="container">
        <h1>Add Task</h1>

        <TaskForm addTask={addTask} updateTask={updateTask} taskToEdit={taskToEdit} />

        <TaskList tasks={tasks} onEdit={setTaskToEdit} onDelete={deleteTask} />
      </div>

      <Footer
        studentName="Yazan Barham"
        studentId="12400199"
        githubUrl="https://github.com/YazanBarham"
      />
    </div>
  );
}

export default AddTask;
