import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";
import SkillsSection from "../components/SkillsSection";
import ContactCard from "../components/ContactCard";
import { usePageTitle } from "../hooks/usePageTitle";

export default function HomePage() {
  const { showToast } = useOutletContext();
  usePageTitle();

  return (
    <>
      {/* Name, school, about, links, resume */}
      <section className="scroll-mt-24" id="about">
        <Hero showToast={showToast} />
      </section>

      {/* Skills & Tech Stack */}
      <div className="mt-16">
        <SkillsSection />
      </div>

      {/* Contact */}
      <section className="mt-16 scroll-mt-24" id="contact" aria-labelledby="contact-heading">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-mint">{"// contact"}</p>
        <h2 id="contact-heading" className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Contact Me
        </h2>
        <div className="mt-6">
          <ContactCard showToast={showToast} />
        </div>
      </section>
    </>
  );
}
