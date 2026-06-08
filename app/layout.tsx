import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brain Vibration | Decode the Mind",
  description: "Articles and eBooks on mind, spirituality, neuroscience and self-development."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
