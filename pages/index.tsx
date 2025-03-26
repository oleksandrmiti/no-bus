import Head from "next/head";
import ReportForm from "../components/ReportForm";
import Stats from "../components/Stats";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Notificaiton from "../components/Notification";

export default function Home() {
  const notificationData = {
    link: "https://forms.gle/fk2MgwADwxcQ73bn9",
    description: "Hi there! We would like to hear your opinion about our service. Please take a moment to fill out our survey. Thank you!",
  };

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
        <Notificaiton notification={notificationData} />
        <ReportForm/>
        <Stats />                   
      </main>
    </div>
  );
}
