import Head from "next/head";
import ReportForm from "../components/ReportForm";
import Stats from "../components/Stats";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import ValentinesPopup from "../components/Valentines";

export default function Home() {

  return (
    <div>
      <Head>
        <title>No-Show Bus Tracker - Cork</title>
      </Head>
      <Navbar />
      <main className={styles.main}>        
        <ValentinesPopup />
        <ReportForm/>
        <Stats />                   
      </main>
    </div>
  );
}
