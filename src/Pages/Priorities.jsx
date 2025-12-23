import { useState, useEffect } from "react";
import PrioritiesTaskItem from "../components/PrioritiesTaskItem";
import PriorityModal from "../components/PriorityModal";
import Footer from "../components/Footer";
import PriorityTables from "../components/PriorityTables";

function Priorities() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

const changePriority = (level) => {
  if (!selectedTask) return;

  const map = {
    very: "Very Important",
    important: "Important",
    low: "Less Important",
  };

  setTasks((prev) =>
    prev.map((t) =>
      t.id === selectedTask.id
        ? { ...t, priority: map[level] }
        : t
    )
  );

  setSelectedTask(null);
};

  const renderTable = (title, level) => (
    <>
      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <span style={badge}>{title}</span>
      </div>

      <table style={table}>
        <thead>
          <tr>
            <th style={th}>Task</th>
            <th style={th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks
            .filter((t) => t.priority === level)
            .map((task) => (
              <PrioritiesTaskItem
                key={task.id}
                task={task}
                onChangePriority={setSelectedTask}
              />
            ))}
        </tbody>
      </table>
    </>
  );

  return (
    <div style={{ padding: "30px" }}>
      
      <h2 style={pageTitle}>Tasks by Priority</h2>

      {renderTable("🔴 Very Important", "Very Important")}
      {renderTable("🟠 Important", "Important")}
      {renderTable("🟢 Less Important", "Less Important")}


      <div style={cardsContainer}>
        <div style={{ ...card, ...greenCard }}>
          <div style={count}>
            {tasks.filter(t => t.priority === "Very Important").length}
          </div>
          <div style={label}>Very Important</div>
        </div>

        <div style={{ ...card, ...yellowCard }}>
          <div style={count}>
            {tasks.filter(t => t.priority === "Important").length}
          </div>
          <div style={label}>Important</div>
        </div>

        <div style={{ ...card, ...redCard }}>
          <div style={count}>
            {tasks.filter(t => t.priority === "Less Important").length}
          </div>
          <div style={label}>Less Important</div>
        </div>
      </div>

      {selectedTask && (
        <PriorityModal
          onSelect={changePriority}
          onClose={() => setSelectedTask(null)}
        />
      )}

      <Footer
        studentName="Abderhman Janem"
        studentId="12400463"
        githubUrl="https://github.com/i3bodeee"
      />
    </div>
  );
}

const pageTitle = {
  textAlign: "center",
  fontSize: "26px",
  fontWeight: "700",
  color: "#2c7a7b",
  marginBottom: "30px",
};

const badge = {
  display: "inline-block",
  padding: "6px 16px",
  borderRadius: "999px",
  background: "#f1f5f9",
  fontSize: "14px",
  fontWeight: "600",
  color: "#1f2937",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: "10px",
  marginBottom: "30px",
};

const th = {
  padding: "14px",
  textAlign: "center",
  background: "#f8fafc",
  borderBottom: "2px solid #e5e7eb",
  fontSize: "15px",
  fontWeight: "600",
  color: "#374151",
};

const cardsContainer = {
  display: "flex",
  gap: "20px",
  marginTop: "40px",
  marginBottom: "30px",
};

const card = {
  flex: 1,
  padding: "22px",
  borderRadius: "14px",
  color: "#fff",
  textAlign: "center",
};

const count = {
  fontSize: "34px",
  fontWeight: "700",
  marginBottom: "6px",
};

const label = {
  fontSize: "15px",
  fontWeight: "600",
  opacity: 0.95,
};

const greenCard = {
  background: "#ef4444",
};

const yellowCard = {
  background: "#eab308",
};

const redCard = {
  background: "#22c55e",
};

function Dashboard() {
  return (
    <div className="container">
      <h1>Task Priorities</h1>
      <PriorityTables />
    </div>
  );
}

export default Priorities;
