import Link from "next/link";

const contactEmail = "sentyrn@protonmail.com";
const contactHref = `mailto:${contactEmail}`;

const linkClassName =
  "text-muted hover:text-accent focus-visible:text-accent focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-6 md:px-10">
        <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between py-8 md:py-10">
          <p className="text-[13px] font-medium tracking-[0.22em] text-foreground">
            SENTYRN
          </p>
          <nav aria-label="Primary" className="flex items-center gap-6 md:gap-8">
            <Link href="/why-sentyrn" className={`text-sm ${linkClassName}`}>
              Why Sentyrn
            </Link>
            <a href={contactHref} className={`text-sm ${linkClassName}`}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 px-6 md:px-10">
        <div className="mx-auto w-full max-w-[1100px] pt-16 pb-20 md:pt-28 md:pb-24 lg:pt-36">
          <h1 className="text-[2.75rem] leading-[1.02] tracking-[-0.035em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
            Security beyond the model.
          </h1>

          <p className="mt-10 max-w-[36rem] text-xl leading-snug text-foreground md:mt-12 md:text-2xl">
            Sentyrn is building independent security infrastructure for
            enterprise AI agents.
          </p>

          <p className="mt-6 max-w-[40rem] text-base leading-relaxed text-muted md:text-lg">
            As AI systems gain the ability to interact with tools, access
            sensitive information, and execute actions, Sentyrn focuses on
            keeping those capabilities within explicitly authorized boundaries.
          </p>

          <Link
            href="/why-sentyrn"
            className="group mt-10 inline-flex items-center gap-3 border-b border-line pb-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            What makes Sentyrn different
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          <p className="mt-24 flex items-center gap-3 font-mono text-xs tracking-wide text-muted md:mt-32">
            <span
              className="inline-block size-1.5 bg-muted"
              aria-hidden="true"
            />
            In development
          </p>
        </div>
      </main>

      <footer className="border-t border-line px-6 md:px-10">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sentyrn</p>
          <a
            href={contactHref}
            className={`font-mono text-[13px] ${linkClassName}`}
          >
            {contactEmail}
          </a>
        </div>
      </footer>
    </div>
  );
}
