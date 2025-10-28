import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ScholarsSpace - Your Gateway to Academic Excellence",
  description:
    "Discover scholarships, connect with mentors, and unlock your potential with ScholarsSpace - the comprehensive platform for ambitious students worldwide.",
  keywords:
    "scholarships, education, mentorship, academic resources, students, learning",
  authors: [{ name: "ScholarsSpace Team" }],
  openGraph: {
    title: "ScholarsSpace - Your Gateway to Academic Excellence",
    description:
      "Discover scholarships, connect with mentors, and unlock your potential with ScholarsSpace.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScholarsSpace - Your Gateway to Academic Excellence",
    description:
      "Discover scholarships, connect with mentors, and unlock your potential with ScholarsSpace.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased relative`}
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/img/bg-dodles-lg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
        </div>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
