import { useEffect, useState } from "react";
import styles from "../styles/Stats.module.css";

export default function Stats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch("/api/stats");
      const data = await res.json();
      setStats(data);
    };
    fetchStats();
  }, []);

  return (
    <div className={styles.statsContainer}>
      <h2>📊 Recent No-Show Reports</h2>
      <ul className={styles.statsList}>
        {stats.map((report, index) => (
          <li key={index} className={styles.statsItem}>
            <strong>Route:</strong> {report.busNumber} <br />
            <strong>Time:</strong> {report.time} <br />
            <strong>Location:</strong> {report.location || "N/A"} <br />
            <strong>Issue:</strong> {report.reason}
          </li>
        ))}
      </ul>
    </div>
  );
}
