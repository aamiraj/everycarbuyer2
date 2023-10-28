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
      <header>
        <HeaderNavBar />
      </header>
      <section>
        <HeaderSection />
      </section>
      <section>
        <GuideSection />
      </section>
      <section>
        <ReasonSection />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <CommitmentSection />
      </section>
      <section>
        <OfferSection />
      </section>
      <section>
        <FooterSection />
      </section>
    </main>
  );
}
