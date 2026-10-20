import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFoundPage() {
  usePageTitle("Page not found");

  return (
    <section className="py-16 text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-zinc-400">That page doesn’t exist.</p>
      <Link to="/" className="mt-6 inline-block underline hover:no-underline">
        Back to home
      </Link>
    </section>
  );
}
