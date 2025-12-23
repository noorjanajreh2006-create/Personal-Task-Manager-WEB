function PriorityModal({ onSelect, onClose }) {
  return (
    <div className="priority-overlay" style={overlay}>
    <div className="priority-modal" style={modal}>

        <h3 style={{ marginBottom: "15px" }}>Change Priority</h3>

        <button style={modalBtn} onClick={() => onSelect("very")}>
          Very Important
        </button>
        <button style={modalBtn} onClick={() => onSelect("important")}>
          Important
        </button>
        <button style={modalBtn} onClick={() => onSelect("low")}>
          Less Important
        </button>
        <button style={cancelBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modal = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  width: "300px",
  textAlign: "center",
};

const modalBtn = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  background: "#2c7a7b",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const cancelBtn = {
  display: "block",
  width: "100%",
  padding: "10px",
  background: "#e5e7eb",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default PriorityModal;