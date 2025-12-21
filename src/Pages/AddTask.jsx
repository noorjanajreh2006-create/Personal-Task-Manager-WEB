import React, { useState } from "react";
import "../components/AddTask.css";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";

function AddTask() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
    setTaskToEdit(null);
  }; 

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="page">
      <div className="container">
        <h1>Add Task</h1>

        <TaskForm
          addTask={addTask}
          updateTask={updateTask}
          taskToEdit={taskToEdit}
        />

        <TaskList
          tasks={tasks}
          onEdit={setTaskToEdit}
          onDelete={deleteTask}
        />
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