import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Xerxes International - Global Innovation Solutions",
  description: "Leading provider of cutting-edge technology solutions and consulting services worldwide. Empowering businesses through innovation and digital transformation.",
  keywords: "technology, consulting, innovation, digital transformation, global solutions",
  authors: [{ name: "Xerxes International" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
