import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";

const STORAGE_KEY = "tasks";

function AddTask() {
  const [tasks, setTasks] = useState(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  });

  const [taskToEdit, setTaskToEdit] = useState(null);

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

  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  return (
    <Box sx={{ backgroundColor: "#f7fafc", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Add Task
        </Typography>

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
      </Container>

      <Footer
        studentName="Yazan Barham"
        studentId="12400199"
        githubUrl="https://github.com/YazanBarham"
      />
    </Box>
  );
}

export default AddTask;