// /pages/api/stats.js
import { db } from "../../utils/firebase";
import { collection, getDocs, query, orderBy, limit, startAfter } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { lastVisible } = req.query; // Handle pagination

  try {
    const reportsRef = collection(db, "reports");
    let q = query(reportsRef, orderBy("createdAt", "desc"), limit(9)); // Load 9 reports initially

    if (lastVisible) {
      q = query(reportsRef, orderBy("createdAt", "desc"), startAfter(new Date(lastVisible)), limit(9));
    }

    const snapshot = await getDocs(q);

    const reports = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || null,
    }));

    const lastDoc = snapshot.docs[snapshot.docs.length - 1]; // Track the last document

    res.status(200).json({ reports, lastVisible: lastDoc?.data().createdAt || null });
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ error: "Failed to fetch reports" });
  }
}
