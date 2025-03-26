import { useEffect, useState, useRef, useCallback } from "react";
import styles from "../styles/Stats.module.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase"; // Adjust path based on your setup

export default function Stats() {
  const [reports, setReports] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [loading, setLoading] = useState(false);
  const observer = useRef();
  const [reportingId, setReportingId] = useState(null);
  const dropdownRef = useRef(null);

  const handleReport = async (id, reason) => {
    const reportRef = doc(db, "reports", id);
  
    try {
      await updateDoc(reportRef, {
        isSafe: false,
        reportReason: reason
      });
  
      console.log("Report updated successfully");
      setReportingId(null); // Close dropdown
    } catch (error) {
      console.error("Error updating report:", error);
    }
  };

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
            <div className={styles.reportContainer} ref={dropdownRef}>
              <button
                className={styles.reportBtn}
                onClick={() => setReportingId(report.id)}
              >
                ⚠️ Report
              </button>

              {/* Report Dropdown */}
              {reportingId === report.id && (
                <div className={styles.reportDropdown}>
                  <button onClick={() => handleReport(report.id, "Inappropriate location")}>
                    📍 Inappropriate Location
                  </button>
                  <button onClick={() => handleReport(report.id, "Added by mistake")}>
                    ❌ Added by Mistake
                  </button>
                </div>
              )}
            </div>
            <strong>Route:</strong> {report.busNumber} <br />
            <strong>Time:</strong> {report.time}, {report.date} <br />
            <strong>Reason:</strong> {report.reason} <br />
            <strong>Location:</strong> {report.location}
          </div>
        ))}
      </div>
      {loading && <p>Loading more reports...</p>}
    </div>
  );
}
