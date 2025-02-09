import { db } from "../../utils/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const verifyCaptcha = async (token) => {
  const response = await fetch(`https://hcaptcha.com/siteverify`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.HCAPTCHA_SECRET_KEY}&response=${token}`,
  });

  return await response.json();
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { captcha, busNumber, date, time, location, reason, email, additionalInfo } = req.body;
    
    if (!captcha) {
      return res.status(400).json({ error: "Captcha verification failed" });
    }
    
    const verification = await verifyCaptcha(captcha);

    if (!verification.success) {
      return res.status(400).json({ error: "Captcha verification failed" });
    }

    // Validate required fields
    if (!busNumber || !date || !time || !location || !reason) {
      return res.status(400).json({ error: "Please fill in all required fields." });
    }

    // Save report to Firestore
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
      console.error("Error submitting report (SERVER):", error);
      res.status(500).json({ error: "Server error. Please try again later." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
