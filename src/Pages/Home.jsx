import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeSection from "../components/WelcomeSection";
import HeroBox from "../components/HeroBox";
import Footer from "../components/Footer";

function Home() {
  const dailyRef = useRef(null);
  const navigate = useNavigate();

  const goToDailyTasks = () => {
    dailyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <WelcomeSection onViewToday={goToDailyTasks} />

        <section style={styles.hero}>
          <HeroBox
            onAddTask={() => navigate("/add-task")}
            onViewStatus={() => navigate("/status")}
          />

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Quick Tips</h3>
            <ul style={styles.list}>
              <li style={styles.li}>Use clear and short task titles</li>
              <li style={styles.li}>Set priorities wisely</li>
              <li style={styles.li}>Update task status regularly</li>
            </ul>
          </div>
        </section>

        <section ref={dailyRef} style={styles.dailySection}>
          <h3 style={styles.dailyTitle}>Today’s Tasks</h3>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Title</th>
                <th style={styles.th}>Priority</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>—</td>
                <td style={styles.td}>—</td>
                <td style={styles.td}>—</td>
                <td style={styles.td}>—</td>
              </tr>
            </tbody>
          </table>
        </section>
        <Footer
          studentName="NOOR JANAJREH"
          studentId="12400696"
          githubUrl="https://github.com/noorjanajreh2006-create"
        />
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f7fafc",
  },
  main: {
    padding: "30px",
  },
  hero: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  card: {
    flex: "0 1 320px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "24px",
    border: "1px solid #e6e6e6",
  },
  cardTitle: {
    margin: 0,
    color: "#2c7a7b",
    fontSize: "18px",
  },
  list: {
    marginTop: "14px",
    paddingLeft: "18px",
    color: "#374151",
  },
  li: {
    marginBottom: "10px",
  },
  dailySection: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "24px",
    border: "1px solid #e6e6e6",
  },
  dailyTitle: {
    marginBottom: "14px",
    color: "#2c7a7b",
    fontSize: "18px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    textAlign: "left",
    padding: "10px",
    borderBottom: "1px solid #e6e6e6",
    color: "#374151",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #f0f0f0",
    color: "#111827",
  },
};

export default Home;
