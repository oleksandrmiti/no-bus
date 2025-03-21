import Navbar from "../components/Navbar"

export default function Terms() {
    return (
        <>    
        <Navbar />
        <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
        <h1>Terms of Service</h1>
    <p><strong>Effective Date:</strong> March 20, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to <strong>No-Show Bus Cork</strong> (<a href="https://nobus.omiti.net">nobus.omiti.net</a>). This is an open-source platform for reporting no-show buses in Cork. Reports are collected for future analysis, with the intention of providing insights to <strong>Bus Éireann</strong>.</p>
    <p>By using this website, you agree to the following <strong>Terms of Service</strong>. If you do not agree, please do not use this website.</p>

    <h2>2. Purpose of the Service</h2>
    <p>No-Show Bus Cork is a <strong>community-driven</strong> platform that allows users to report buses that failed to arrive as scheduled. Reports are collected for potential future analysis and may be reviewed for accuracy.</p>
    <p><strong>This website does not provide real-time bus tracking and is not affiliated with Bus Éireann.</strong></p>

    <h2>3. User-Generated Reports</h2>
    <ul>
        <li>Reports can be submitted <strong>anonymously</strong> without registration.</li>
        <li>Users <strong>may</strong> provide an email address, but it is not required.</li>
        <li>Reports that are found to be <strong>false, misleading, or inaccurate</strong> may be removed at the discretion of the website administrator.</li>
        <li>Users are encouraged to submit truthful and accurate reports.</li>
    </ul>

    <h2>4. Data Collection & Privacy</h2>
    <ul>
        <li><strong>Personal Data:</strong> The website does not require personal data. Providing an email address is <strong>optional</strong> and is stored in Firebase.</li>
        <li><strong>Cookies:</strong> The website may use cookies for essential functionality. Third-party services such as <strong>HCaptcha</strong> and <strong>Firebase</strong> may also collect data in accordance with their respective policies.</li>
        <li><strong>Third-Party Services:</strong> The site integrates Firebase and HCaptcha, which may process data according to their policies.</li>
    </ul>
    <p>For more details, refer to our <a href="/privacy">Privacy Policy</a>.</p>

    <h2>5. Content Moderation & Removal</h2>
    <ul>
        <li>The website owner has the <strong>right to remove</strong> any report that appears to be <strong>spam, false, misleading, or inappropriate</strong>.</li>
        <li>Reports are subject to periodic reviews for accuracy during the <strong>data analysis stage</strong>.</li>
    </ul>

    <h2>6. Disclaimer & Limitation of Liability</h2>
    <ul>
        <li>No-Show Bus Cork <strong>does not guarantee</strong> the accuracy, completeness, or reliability of submitted reports.</li>
        <li>This platform is for <strong>informational purposes only</strong> and should not be used as a sole basis for travel decisions.</li>
        <li>The website owner is <strong>not responsible</strong> for any consequences arising from the use of this website, including but not limited to <strong>delayed travel, incorrect reports, or actions taken by third parties</strong>.</li>
    </ul>

    <h2>7. Changes to the Terms</h2>
    <p>These <strong>Terms of Service</strong> may be updated over time. Continued use of the website after changes are made constitutes acceptance of the new terms.</p>

    <h2>8. Contact Information</h2>
    <p>For any questions regarding these Terms, you can contact:</p>
    <p>📧 <a href="mailto:infoformiti@gmail.com">infoformiti@gmail.com</a></p>
        </div>
      </>
    );
  }
  