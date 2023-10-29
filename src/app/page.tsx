import { HeaderNavBar } from "@/components/HeaderNavBar";
import CommitmentSection from "@/sections/CommitmentSection";
import FooterSection from "@/sections/FooterSection";
import GuideSection from "@/sections/GuideSection";
import HeaderSection from "@/sections/HeaderSection";
import OfferSection from "@/sections/OfferSection";
import ReasonSection from "@/sections/ReasonSection";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <main className="max-width-1600">
      <header id="navbar">
        <HeaderNavBar />
      </header>
      <section id="header">
        <HeaderSection />
      </section>
      <section id="guide">
        <GuideSection />
      </section>
      <section id="reason">
        <ReasonSection />
      </section>
      <section id="testimonial">
        <Testimonials />
      </section>
      <section id="commitment">
        <CommitmentSection />
      </section>
      <section id="offer">
        <OfferSection />
      </section>
      <section id="footer">
        <FooterSection />
      </section>
    </main>
  );
}
