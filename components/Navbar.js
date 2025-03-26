import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">🚍 No-Show Bus Cork</Link>
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/changelog">Changelog</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
