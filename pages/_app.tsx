import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
      <Script
        strategy="afterInteractive"
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={JSON.stringify({ token: process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_KEY })}
      />
    </>
  );
}
