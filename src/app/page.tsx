import GoToTopButton from "@/components/GoToTopButton";
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
    <div>
      <section id="header">
        <HeaderSection />
      </section>
      <section id="guide">
        <GuideSection />
      </section>
      <section id="reason">
        <ReasonSection />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="commitment">
        <CommitmentSection />
      </section>
      <section id="offer">
        <OfferSection />
      </section>

      <GoToTopButton />
    </div>
  );
}
