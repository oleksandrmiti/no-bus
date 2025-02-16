import Head from "next/head";
import ReportForm from "../components/ReportForm";
import Stats from "../components/Stats";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <div>
      <Head>
        <title>No-Show Bus Tracker - Cork</title>
      </Head>
      <Navbar />
      <main className={styles.main}>        
        <ReportForm/>
        <Stats />                   
      </main>
    </div>
  );
}
