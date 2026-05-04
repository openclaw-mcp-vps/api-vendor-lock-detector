import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Vendor Lock Detector — Detect Risky API Dependencies",
  description: "Scan your codebase to identify API dependencies, calculate switching costs, and get alerted when vendors show acquisition or shutdown signals."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="74b24446-0e51-47a7-9b06-845a1e60712e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
