import React, { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";

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
    return <Typography>No tasks added yet</Typography>;
  }

  return (
    <>
      {tasks.map((task) => (
        <Card key={task.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <Typography>Priority: {task.priority}</Typography>
            <Typography>Status: {task.status}</Typography>
            <Typography>
              Category: {categoryMap[String(task.categoryId)]}
            </Typography>
            <Typography>Start Date: {task.startDate}</Typography>
            <Typography>Duration: {task.durationDays} days</Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Button variant="outlined" onClick={() => onEdit(task)}>
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default TaskList;