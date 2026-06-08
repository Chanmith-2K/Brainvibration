import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brainvibration.vercel.app"),
  title: {
    default: "Brain Vibration | Spiritual Psychology, Mind Science and eBooks",
    template: "%s | Brain Vibration"
  },
  description: "Brain Vibration is a premium knowledge library and digital book store for spiritual psychology, neuroscience-inspired self-development, Buddhism, Vedanta and inner clarity.",
  keywords: ["Brain Vibration", "spiritual psychology", "mind science", "self development ebooks", "Buddhist wisdom", "Vedanta", "neuroscience and spirituality"],
  openGraph: { title: "Brain Vibration", description: "Decode the mind. Awaken the inner system.", url: "https://brainvibration.vercel.app", siteName: "Brain Vibration", type: "website" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
