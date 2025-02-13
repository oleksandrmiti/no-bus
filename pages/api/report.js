import { db } from "../../utils/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Filter } from 'bad-words'

const validBusRoutes = new Set([
  "200", "201", "202", "202A", "203", "205", "206", "207", "207A", "208",
  "209", "209A", "212", "213", "214", "215", "215A", "216", "219", "220", "220X", "221",
  "223", "223X", "225", "226", "226A", "233", "240", "241", "245", "260", "261"
]);

const isValidBusRoute = (route) => validBusRoutes.has(route.toUpperCase());

const filter = new Filter();
const isValidLocation = (location) => {
  if (typeof location !== "string" && typeof location !== "number") return false;

  const locationStr = String(location).trim();

  if (filter.isProfane(locationStr)) {
      console.log("Bad word detected!")  
    return false;}

  if (/^(.)\1{5,}$/.test(locationStr)) return false;
  if (locationStr.length < 3 || locationStr.length > 20) return false;

  return true;
};

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

    if (!isValidBusRoute(busNumber)) {
      return res.status(400).json({
        error: "Invalid bus route. Please enter a valid Cork bus route. If this is an error, contact infoformiti@gmail.com."
      });
    }
    
    if (!isValidLocation(location)) {
      return res.status(400).json({
        error: "Invalid or inappropriate location. Please provide a proper bus stop or approximate location. If this is an error, contact infoformiti@gmail.com."
      });
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
