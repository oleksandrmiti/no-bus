import { useState } from "react";
import styles from "../styles/ReportForm.module.css";

export default function ReportForm() {
  const [formData, setFormData] = useState({
    busNumber: "",
    date: "",
    time: "",
    location: "",
    reason: "",
    email: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Report submitted successfully!");
        setFormData({
          busNumber: "",
          date: "",
          time: "",
          location: "",
          reason: "",
          email: "",
          additionalInfo: "",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Error submitting report:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>📝 Report a No-Show Bus</h2>

      <input
        type="text"
        name="busNumber"
        placeholder="Bus Number"
        value={formData.busNumber}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="location"
        placeholder="Location (Bus Stop Name or Number)"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label>Select Date:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label>Select Time:</label>
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />

      <label>Reason for No-Show:</label>
      <div className={styles.radioGroup}>
        <label>
          <input
            type="radio"
            name="reason"
            value="Cancelled Bus"
            checked={formData.reason === "Cancelled Bus"}
            onChange={handleChange}
            required
          />
          Cancelled Bus
        </label>

        <label>
          <input
            type="radio"
            name="reason"
            value="Ghost Bus"
            checked={formData.reason === "Ghost Bus"}
            onChange={handleChange}
            required
          />
          Ghost Bus (on system but never arrived)
        </label>
      </div>

      <input
        type="email"
        name="email"
        placeholder="Your Email (optional)"
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        name="additionalInfo"
        placeholder="Anything else? (optional)"
        value={formData.additionalInfo}
        onChange={handleChange}
      />

      <button type="submit">Submit Report 🚀</button>
    </form>
  );
}
