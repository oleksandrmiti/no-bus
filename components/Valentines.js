import { useState, useEffect } from "react";
import styles from "../styles/Valentines.module.css";

export default function ValentinesPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true); // Show popup on page load
  }, []);

  return (
    showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm text-center" className={styles.container}>
          <h2 className="text-2xl font-bold text-red-500">❤️ Happy Valentine’s Day! ❤️</h2>
          <p className="text-gray-700 mt-2">
            Wishing you a day filled with love and joy!  
            Thanks for visiting our site. You’re awesome! 💌
          </p>
          <button
            onClick={() => setShowPopup(false)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Close 💘
          </button>
        </div>
      </div>
    )
  );
}
