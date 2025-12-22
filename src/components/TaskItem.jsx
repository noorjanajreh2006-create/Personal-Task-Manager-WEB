function TaskItem({ task, onChangePriority }) {
  return (
    <tr>
      <td style={td}>{task.title}</td>
      <td style={td}>
        <button style={btn} onClick={() => onChangePriority(task)}>
          Change Priority
        </button>
      </td>
    </tr>
  );
}

const td = {
  padding: "14px",
  textAlign: "center",
  borderBottom: "1px solid #e5e7eb",
  fontSize: "14px",
  color: "#111827",
};


const btn = {
  background: "#2c7a7b",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};



export default TaskItem;
