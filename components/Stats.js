import { useEffect, useState, useRef, useCallback } from "react";
import styles from "../styles/Stats.module.css";

export default function Stats() {
  const [reports, setReports] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const fetchReports = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/stats?lastVisible=${lastVisible || ""}`);
      const data = await res.json();
      setReports((prev) => [...prev, ...data.reports]);
      setLastVisible(data.lastVisible);
    } catch (error) {
      console.error("Error loading reports:", error);
    }
    setLoading(false);
  }, [lastVisible]);

  useEffect(() => {
    fetchReports();
  }, []);

  const lastReportRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && lastVisible) {
          fetchReports();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, lastVisible, fetchReports]
  );

  return (
    <div className={styles.statsContainer}>
      <h2>📊 Recent No-Show Reports</h2>
      <div className={styles.grid}>
        {reports.map((report, index) => (
          <div
            key={report.id}
            ref={index === reports.length - 1 ? lastReportRef : null}
            className={styles.card}
          >
            <strong>Route:</strong> {report.busNumber} <br />
            <strong>Time:</strong> {report.time}, {report.date} <br />
            <strong>Reason:</strong> {report.reason}
          </div>
        ))}
      </div>
      {loading && <p>Loading more reports...</p>}
    </div>
  );
}
