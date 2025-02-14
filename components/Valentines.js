import { useState, useEffect } from "react";
import styles from "../styles/Valentines.module.css";

export default function ValentinesPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true); // Show popup on page load
  }, []);

  return (
    showPopup && (
      <div className={styles.container}>
        <div className={styles.box}>
          <h2 className="text-2xl font-bold text-red-500">❤️ Happy Valentine’s Day! ❤️</h2>
          <p className="text-gray-700 mt-2">
            Wishing you a day filled with love and joy!  
            Thanks for visiting our site. You’re awesome! 💌
          </p>
          <button
            onClick={() => setShowPopup(false)}
            className={styles.button}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}
