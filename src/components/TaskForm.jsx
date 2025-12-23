import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Paper,
} from "@mui/material";

function TaskForm({ addTask, updateTask, taskToEdit }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Important");
  const [durationDays, setDurationDays] = useState("");
  const [startDate, setStartDate] = useState("");
  const [status, setStatus] = useState("To Do");

  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("Select");

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

    if (selectedCategoryId === "Select") {
      alert("Please select a category");
      return;
    }

    const task = {
      id: taskToEdit ? taskToEdit.id : crypto.randomUUID(),
      title,
      priority,
      durationDays: Number(durationDays),
      startDate,
      status,
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
    <Paper sx={{ p: 3, mb: 3 }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 2 }}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <TextField
          select
          label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <MenuItem value="Very Important">Very Important</MenuItem>
          <MenuItem value="Important">Important</MenuItem>
          <MenuItem value="Less Important">Less Important</MenuItem>
        </TextField>

        <TextField
          select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="To Do">To Do</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
          <MenuItem value="Missed">Missed</MenuItem>
        </TextField>

        <TextField
          select
          label="Category"
          value={selectedCategoryId}
          onChange={(e) => setSelectedCategoryId(e.target.value)}
        >
          <MenuItem value="Select">Select</MenuItem>
          {categories.map((c) => (
            <MenuItem key={c.id} value={String(c.id)}>
              {c.title}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          type="date"
          label="Start Date"
          InputLabelProps={{ shrink: true }}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <TextField
          type="number"
          label="Duration (Days)"
          value={durationDays}
          onChange={(e) => setDurationDays(e.target.value)}
        /> 

        <Button
  variant="contained"
  type="submit"
  sx={{
    backgroundColor: "#2c7a7b",
    "&:hover": {
      backgroundColor: "#225e61",
    },
    fontWeight: "bold",
  }}
>
  {taskToEdit ? "Update Task" : "Add Task"}
</Button>




      </Box>
    </Paper>
  );
}

export default TaskForm;