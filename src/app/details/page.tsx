import { HeaderNavBar } from "@/components/HeaderNavBar";
import BigForm from "@/sections/BigForm";
import ImportantMessage from "@/sections/ImportantMessage";
import FooterSection from "@/sections/FooterSection";

const page = () => {
  return (
    <main className="max-width-1600">
      <header id="navbar">
        <HeaderNavBar />
      </header>
      <section id="detailsForm">
        <div className="custom-shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <BigForm />
      </section>
      <section id="importantMessage">
        <ImportantMessage />
      </section>
      <section id="footer">
        <FooterSection />
      </section>
    </main>
  );
};

export default page;
