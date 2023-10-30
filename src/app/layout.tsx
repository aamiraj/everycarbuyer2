import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./responsive.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "everycarbuyer | Your car, Your price Selling made simple",
  description:
    "Find a competitive offer with a personal touch. Sell confidently, sell with everycarbuyer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className} style={{overflowX: "hidden"}}>{children}</body>
    </html>
  );
}
