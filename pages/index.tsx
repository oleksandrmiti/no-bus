import Head from "next/head";
import { useEffect, useState } from "react";
import ReportForm from "../components/ReportForm";
import Stats from "../components/Stats";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [stats, setStats] = useState([]);

  // Fetch reports
  const fetchStats = async () => {
    try {
      const res = await fetch("/api/stats");
      const data = await res.json();
      setStats(data);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div>
      <Head>
        <title>No-Show Bus Tracker - Cork</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>No-Show Bus Tracker - Cork</h1>
        <ReportForm onReportSubmit={fetchStats} />
        <Stats stats={stats} />                   
      </main>
    </div>
  );
}
