import { db } from "../../utils/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { busNumber, date, time, location, reason, email, additionalInfo, captchaToken } = req.body;

    if (!busNumber || !date || !time || !location || !reason) {
      return res.status(400).json({ error: "Please fill in all required fields." });
    }

    if (!captchaToken) {
      return res.status(400).json({ error: "Captcha verification failed." });
    }

    // Verify hCaptcha
    const secret = process.env.HCAPTCHA_SECRET_KEY;
    const verificationResponse = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${captchaToken}`,
    });

    const verificationData = await verificationResponse.json();

    if (!verificationData.success) {
      return res.status(400).json({ error: "Captcha verification failed." });
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
