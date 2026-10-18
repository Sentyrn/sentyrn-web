import Link from "next/link";
import SiteBrand from "./site-brand";
import ThemeToggle from "./theme-toggle";

const contactHref = "mailto:sentyrn@protonmail.com";

const linkClassName =
  "text-muted transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function SiteHeader({
  page,
}: {
  page: "home" | "why";
}) {
  return (
    <header className="px-6 md:px-10">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-4 py-8 md:py-10">
        <SiteBrand />
        <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <Link
            href={page === "home" ? "/why-sentyrn" : "/"}
            className={`text-sm ${linkClassName}`}
          >
            {page === "home" ? "Why Sentyrn" : "Home"}
          </Link>
          <a href={contactHref} className={`text-sm ${linkClassName}`}>
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
