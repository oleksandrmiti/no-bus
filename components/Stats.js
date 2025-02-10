import { useEffect, useState } from "react";
import styles from "../styles/Stats.module.css";

export default function Stats({ stats }) {

  return (
    <div className={styles.statsContainer}>
      <h2>📊 Recent No-Show Reports</h2>
      <ul className={styles.statsList}>
      {Array.isArray(stats) && stats.length > 0 ? (
        stats.map((report, index) => (
          <li key={index} className={styles.statsItem}>
            <strong>Route:</strong> {report.busNumber} <br />
            <strong>Time and Date:</strong> {report.time}, {report.date} <br />
            <strong>Reason:</strong> {report.reason}
          </li>
        ))
      ) : (
        <li>No reports available yet.</li>
      )}
      </ul>
    </div>
  );
}
