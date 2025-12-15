import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src="/logo.png" alt="Personal Task Manager" style={styles.logo} />
        <span style={styles.title}>Personal Task Manager</span>
      </div>

      <ul style={styles.links}>
        <li><NavLink to="/" style={styles.link}>Home</NavLink></li>
        <li><NavLink to="/add-task" style={styles.link}>Add Tasks</NavLink></li>
        <li><NavLink to="/priorities" style={styles.link}>Priorities</NavLink></li>
        <li><NavLink to="/categories" style={styles.link}>Categories</NavLink></li>
        <li><NavLink to="/status" style={styles.link}>Status</NavLink></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #ddd",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#2c7a7b",
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  },
};

export default Navbar;