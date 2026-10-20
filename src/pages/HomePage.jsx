import { useOutletContext } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import ContactCard from "../components/ContactCard";
import { usePageTitle } from "../hooks/usePageTitle";

export default function HomePage() {
  const { showToast } = useOutletContext();
  usePageTitle();

  return (
    <>
      {/* Profile card at top */}
      <section className="mb-8 scroll-mt-24" id="about">
        <ProfileCard showToast={showToast} />
      </section>

      {/* Separator */}
      <hr className="my-10 border-t border-zinc-200" />

      {/* Contact card */}
      <section className="mt-8 scroll-mt-24" id="contact">
        <div className="grid gap-4 md:grid-cols-2">
          <h2 className="text-2xl font-semibold">Contact Me</h2>
          <div className="md:col-span-2">
            <ContactCard showToast={showToast} />
          </div>
        </div>
      </section>
    </>
  );
}
