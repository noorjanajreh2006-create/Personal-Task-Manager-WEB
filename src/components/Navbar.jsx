import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <style>
        {`
          .nav-hover {
            text-decoration: none;
            color: #6b6b6b;
            font-weight: 500;
            padding: 8px 14px;
            border-radius: 6px;
            transition: color 0.3s ease;
          }

          .nav-hover:hover {
            color: #49a078;
          }
        `}
      </style>

      <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src="/logo.png" alt="Personal Task Manager" style={styles.logo} />
        <span style={styles.title}>Personal Task Manager</span>

      </div>


       <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
    <ul style={styles.links}>
    <li><NavLink to="/" className="nav-hover">Home</NavLink></li>
    <li><NavLink to="/add-task" className="nav-hover">Add Tasks</NavLink></li>
    <li><NavLink to="/priorities" className="nav-hover">Priorities</NavLink></li>
    <li><NavLink to="/categories" className="nav-hover">Categories</NavLink></li>
    <li><NavLink to="/status" className="nav-hover">Status</NavLink></li>
  </ul>

</div>

      </nav>
    </>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 30px",
    borderBottom: "1px solid #ddd",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logo: {
    width: "70px",
    height: "70px",
    borderRadius: "10px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#2c7a7b",
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "22px",
    margin: 0,
    padding: 0,
  },
};

export default Navbar;
