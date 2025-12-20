function TaskList({ tasks, onEdit, onDelete }) {
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
          <p><b>Category:</b> {task.category}</p>
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