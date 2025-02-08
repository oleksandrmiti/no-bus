import { db } from "../../utils/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const reportsRef = collection(db, "reports");
    const q = query(reportsRef, orderBy("createdAt", "desc"), limit(10)); // Changed to match Firestore field
    const snapshot = await getDocs(q);

    const reports = snapshot.docs.map((doc) => ({
      id: doc.id,                     // Include document ID for reference
      ...doc.data(),                  // Spread the document data
      createdAt: doc.data().createdAt?.toDate() || null,  // Handle missing timestamps gracefully
    }));

    res.status(200).json(reports);
  } catch (error) {
    console.error("Error fetching reports:", error);  // Log the error for debugging
    res.status(500).json({ error: "Failed to fetch reports" });
  }
}
