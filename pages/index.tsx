import Head from "next/head";
import ReportForm from "../components/ReportForm";
import Stats from "../components/Stats";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <div>
      <Head>      
        <title>No-Show Bus Tracker / Report - Cork</title>
        <meta name="description" content="Report no-show buses in Cork with real-time updates and insights. Stay informed and plan your travel better!" />
        <meta name="keywords" content="no-show bus, no bus cork, report canceled bus Cork, Cork bus tracker, missing buses, public transport Cork, report bus, cork" />
        <meta name="author" content="Oleksandr Mitichkin" />
      </Head>
      <Navbar />
      <main className={styles.main}>        
        <ReportForm/>
        <Stats />                   
      </main>
    </div>
  );
}
