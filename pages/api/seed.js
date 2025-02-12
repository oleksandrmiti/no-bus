import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  try {
    const dummyReports = [
      {
        busNumber: "214",
        date: "2024-02-05",
        time: "10:00",
        location: "Grand Parade",
        reason: "Ghost Bus",
        email: "user1@test.com",
        additionalInfo: "Disappeared from live map.",
      },
      {
        busNumber: "220",
        date: "2024-02-06",
        time: "11:30",
        location: "Mahon Point",
        reason: "Cancelled Bus",
        email: "user2@test.com",
        additionalInfo: "No explanation provided.",
      },
    ];

    const reportsCollection = collection(db, "reports");

    for (const report of dummyReports) {
      await addDoc(reportsCollection, report);
    }

    res.status(200).json({ message: "Dummy data added successfully!" });
  } catch (error) {
    console.error("Error seeding database:", error);
    res.status(500).json({ error: "Failed to add dummy data." });
  }
}
