import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { SpeedInsights } from '@vercel/speed-insights/next';
import MyCookieConsent from '../components/CookieConsent.';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
              "@type": "Website",
              "name": "No-Show Bus Tracker / Report Tool",
              "url": "https://nobus.omiti.net",
              "description": "Report missing buses in Cork in real-time."
            }),
          }}
        />
        <meta name="google-adsense-account" content="ca-pub-5646367424358440" />
      </Head>
      <Component {...pageProps} />
      <MyCookieConsent />
      <SpeedInsights />
      <Script
        strategy="afterInteractive"
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={JSON.stringify({ token: process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_KEY })}
      />
    </>
  );
}
