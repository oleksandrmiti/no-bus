import { db } from "../../utils/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { busNumber, date, time, location, reason, email, additionalInfo } = req.body;

    // Validate required fields
    if (!busNumber || !date || !time || !location || !reason) {
      return res.status(400).json({ error: "Please fill in all required fields." });
    }

    try {
      await addDoc(collection(db, "reports"), {
        busNumber,
        date,
        time,
        location,
        reason,
        email: email || null,
        additionalInfo: additionalInfo || null,
        createdAt: serverTimestamp(),
      });

      res.status(200).json({ message: "Report submitted successfully!" });
    } catch (error) {
      console.error("Error submitting report:", error);
      res.status(500).json({ error: "Server error. Please try again later." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
