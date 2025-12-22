import TaskItem from "./TaskItem";

function PrioritySection({
  title,
  level,
  tasks,
  onDelete,
  onChangePriority,
})

 {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h3 style={sectionTitle}>{title}</h3>

      {tasks
        .filter((t) => t.priority === level)
        .map((t) => (
          <TaskItem
            key={t.id}
            task={t}
            onDelete={onDelete}
            onChangePriority={onChangePriority}
          />
        ))}
    </div>
  );
}

const sectionTitle = {
  margin: "30px 0 12px",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "700",
  color: "#1f2937",
  letterSpacing: "0.5px",
};

export default PrioritySection;