import { useState } from "react";
import CookieConsent from "react-cookie-consent";

export default function MyCookieConsent() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="userConsent"
      style={{ background: "#2B373B", fontSize: "14px" }}
      buttonStyle={{ background: "#f1c40f", color: "#000", fontWeight: "bold" }}
      declineButtonStyle={{ background: "#e74c3c", color: "#fff" }}
      onAccept={() => setVisible(false)}
      onDecline={() => setVisible(false)}
    >
      🍪 This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
}
