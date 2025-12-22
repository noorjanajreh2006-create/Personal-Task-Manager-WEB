import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeSection from "../components/WelcomeSection";
import HeroBox from "../components/HeroBox";
import TodaysTasksTable from "../components/TodaysTasksTable";
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

        <TodaysTasksTable tableRef={dailyRef} />
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
};

export default Home;
