import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScholarsSpace - Your Gateway to Academic Excellence",
  description: "Discover scholarships, connect with mentors, and unlock your potential with ScholarsSpace - the comprehensive platform for ambitious students worldwide.",
  keywords: "scholarships, education, mentorship, academic resources, students, learning",
  authors: [{ name: "ScholarsSpace Team" }],
  openGraph: {
    title: "ScholarsSpace - Your Gateway to Academic Excellence",
    description: "Discover scholarships, connect with mentors, and unlock your potential with ScholarsSpace.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScholarsSpace - Your Gateway to Academic Excellence",
    description: "Discover scholarships, connect with mentors, and unlock your potential with ScholarsSpace.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
