import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import { AllData } from "@/contexts/dataContext";
import { HeaderNavBar } from "@/components/HeaderNavBar";
import FooterSection from "@/sections/FooterSection";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "everycarbuyer | Your car, Your price Selling made simple",
    template: "%s - everycarbuyer",
  },
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
      <GoogleAnalytics
        GA_MEASUREMENT_ID={process.env.GOOGLE_MEASUREMENT_ID as string}
      />
      <AllData>
        <body className={poppins.className} style={{ overflowX: "hidden" }}>
          <main className="max-width-1600">
            <HeaderNavBar />
            {children}
            <FooterSection />
            <CookieBanner />
          </main>
        </body>
      </AllData>
    </html>
  );
}
