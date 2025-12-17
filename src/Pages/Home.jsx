const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to Personal Task Manager</h1>
        <p>Organize, prioritize, and track your daily tasks efficiently.</p>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>Easy to Use</h2>
          <p>Simple interface to manage your tasks without clutter.</p>
        </div>
        <div className="feature-card">
          <h2>Track Progress</h2>
          <p>Stay on top of your priorities and see your progress daily.</p>
        </div>
        <div className="feature-card">
          <h2>Stay Organized</h2>
          <p>Group your tasks by category and status to keep everything neat.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;