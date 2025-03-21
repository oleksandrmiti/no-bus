import Link from "next/link";
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
            style={{ color: "#0070f3", textDecoration: "underline" }} // Link Style
          >
            NoShowBus.ie
          </a>{" "}
          to help Cork commuters track bus delays and no-shows.  
          Cork&apos;s version is open-sourced and developed by{" "}
          <a
            href="https://omiti.net"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0070f3", textDecoration: "underline" }} // Link Style
          >
            Oleksandr Mitichkin
          </a>{" "}
          with the help of ChatGPT. 
          Please feel free to contribute on <a href="https://github.com/oleksandrmiti/no-bus" target="_blank" rel="noopener noreferrer" style={{ color: "#0070f3", textDecoration: "underline" }}>Github</a>
        </p>
        <br/>
        <h3>Contact Us 📩</h3>
        <p>
          Email:{" "}
          <a
            href="mailto:infoformiti@gmail.com"
            style={{ color: "#0070f3", textDecoration: "underline" }} // Link Style
          >
            infoformiti@gmail.com
          </a>
        </p>
        <br></br>
        <h3>
          Data
        </h3>
        <p>
          <Link href="/terms">Terms of Service</Link> | <Link href="/privacy">Privacy Policy</Link>
        </p>
        <br /><br />
        <a
          href="https://www.buymeacoffee.com/omiti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=omiti&button_colour=BD5FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
            alt="Buy me a coffee"
          />
        </a>
      </div>
    </>
  );
}
