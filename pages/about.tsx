import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <h1>About No-Show Bus Cork 🚍</h1>
        <p>
          This website is inspired by{" "}
          <a
            href="https://noshowbus.ie"
            target="_blank"
            rel="noopener noreferrer"
          >
            NoShowBus.ie
          </a>{" "}
          to help Cork commuters track bus delays and no-shows.  
          Cork's version is open-sourced and developed by{" "}
          <a href="https://omiti.net" target="_blank" rel="noopener noreferrer">
            Oleksandr Mitichkin
          </a>{" "}
          with the help of ChatGPT.
        </p>
        <h3>Contact Us 📩</h3>
        <p>
          Email:{" "}
          <a href="mailto:infoformiti@gmail.com">infoformiti@gmail.com</a>
        </p>
      </div>
    </>
  );
}
