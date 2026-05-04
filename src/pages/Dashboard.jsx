import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="dashboard">
        <h2>Welcome back 👋</h2>

        <div className="stats">
          <StatCard title="Study Time" value="2h 30m" />
          <StatCard title="Sessions" value="3" />
          <StatCard title="Streak" value="5 days" />
          <StatCard title="Best Subject" value="Biology" />
        </div>

        <button className="start-btn">Start Session</button>
      </div>
    </div>
  );
}