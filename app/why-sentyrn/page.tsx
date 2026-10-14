import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Sentyrn",
  description:
    "How Sentyrn approaches independent security enforcement for AI agents.",
};

const contactEmail = "sentyrn@protonmail.com";
const contactHref = `mailto:${contactEmail}`;

const linkClassName =
  "text-muted transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function WhySentyrn() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-6 md:px-10">
        <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between py-8 md:py-10">
          <Link
            href="/"
            className="text-[13px] font-medium tracking-[0.22em] text-foreground transition-colors hover:text-accent focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            SENTYRN
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-6 md:gap-8">
            <Link href="/" className={`text-sm ${linkClassName}`}>
              Home
            </Link>
            <a href={contactHref} className={`text-sm ${linkClassName}`}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 px-6 md:px-10">
        <div className="mx-auto w-full max-w-[1100px] pt-14 pb-20 md:pt-24 md:pb-28">
          <h1 className="text-[2.5rem] leading-tight tracking-[-0.035em] text-foreground sm:text-5xl">
            Why Sentyrn
          </h1>

          <p className="mt-8 max-w-[690px] text-lg leading-relaxed text-foreground md:text-xl">
            An AI agent can be manipulated into requesting access it shouldn&apos;t
            have. Sentyrn is being built to enforce permissions before those
            requests become real actions.
          </p>

          <div className="mt-14 max-w-[820px] border-t border-line md:mt-20">
            <section className="border-b border-line py-8 md:grid md:grid-cols-[235px_1fr] md:gap-10">
              <h2 className="text-base font-medium text-foreground">
                Before execution
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted md:mt-0">
                Tool calls are checked before they run. Detecting suspicious
                text is useful, but it does not replace authorization.
              </p>
            </section>

            <section className="border-b border-line py-8 md:grid md:grid-cols-[235px_1fr] md:gap-10">
              <h2 className="text-base font-medium text-foreground">
                Scoped permissions
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted md:mt-0">
                Policies define which agents can use which tools and resources.
                Sensitive actions can require approval tied to the exact request.
              </p>
            </section>

            <section className="border-b border-line py-8 md:grid md:grid-cols-[235px_1fr] md:gap-10">
              <h2 className="text-base font-medium text-foreground">
                Outside the model
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted md:mt-0">
                Sentyrn enforces policy independently of model instructions.
                Decisions are logged for review without storing raw prompts or
                secrets.
              </p>
            </section>
          </div>

          <p className="mt-10 text-sm text-muted">
            Sentyrn is in development.
          </p>
        </div>
      </main>

      <footer className="border-t border-line px-6 md:px-10">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sentyrn</p>
          <a href={contactHref} className={`font-mono text-[13px] ${linkClassName}`}>
            {contactEmail}
          </a>
        </div>
      </footer>
    </div>
  );
}
