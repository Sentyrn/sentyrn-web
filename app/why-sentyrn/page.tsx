import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Sentyrn | Security Beyond the Model",
  description:
    "Discover Sentyrn's approach to securing enterprise AI agents through independent, zero-trust enforcement at the tool and action boundary.",
};

const contactEmail = "sentyrn@protonmail.com";
const contactHref = `mailto:${contactEmail}`;

const linkClassName =
  "text-muted transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent";

const differentiators = [
  {
    number: "01",
    title: "Enforcement at the point of action",
    description:
      "A model requesting a tool call is not the same as being authorized to make it. Sentyrn gates execution before a tool can affect protected systems or data.",
  },
  {
    number: "02",
    title: "Zero trust, scoped by policy",
    description:
      "Requests are evaluated against explicit permissions, agent identity, and action constraints. Untrusted content cannot grant itself more authority.",
  },
  {
    number: "03",
    title: "Approvals bound to specific actions",
    description:
      "Sensitive actions can require approval tied to the exact request, with single-use enforcement instead of reusable, open-ended permission.",
  },
  {
    number: "04",
    title: "Independent of model behavior",
    description:
      "Controls sit outside the model. Enforcement does not require an AI provider to obey a system prompt or a particular model to behave as expected.",
  },
  {
    number: "05",
    title: "Deterministic checks first",
    description:
      "The architecture prioritizes fast policy checks and reserves more expensive inspection for traffic that warrants it, keeping latency a design constraint.",
  },
  {
    number: "06",
    title: "Decisions with an audit trail",
    description:
      "Structured security events explain what was allowed, denied, or held for approval, without requiring raw prompts or secrets in the event log.",
  },
] as const;

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

      <main className="flex-1">
        <section className="px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
          <div className="mx-auto w-full max-w-[1100px]">
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-accent">
              Why Sentyrn
            </p>
            <h1 className="max-w-[900px] text-[2.75rem] leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Guardrails can advise.
              <span className="block text-accent">Boundaries can enforce.</span>
            </h1>
            <p className="mt-9 max-w-[660px] text-lg leading-relaxed text-muted md:text-xl">
              AI agents do more than generate text. They access files, call
              tools, and change real systems. Sentyrn is being built around
              one principle: an action should not execute just because a model
              requested it.
            </p>
            <p className="mt-6 max-w-[660px] text-sm leading-relaxed text-muted">
              Independent enforcement for the moment an AI agent crosses from
              generating an answer to taking an action.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="boundary-heading"
          className="border-y border-line bg-[#0a0a0a] px-6 py-14 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1100px]">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2
                id="boundary-heading"
                className="text-2xl tracking-tight text-foreground md:text-3xl"
              >
                The security boundary matters.
              </h2>
              <p className="max-w-[360px] text-sm leading-relaxed text-muted">
                The model can propose an action. The enforcement layer decides
                whether it is allowed to proceed.
              </p>
            </div>
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              <div className="border border-line p-6">
                <p className="font-mono text-xs tracking-wide text-muted">01 / UNTRUSTED</p>
                <h3 className="mt-5 text-xl text-foreground">Agent request</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  A model asks to read data, call an API, or run a tool.
                </p>
              </div>
              <div className="border border-accent/50 bg-accent/[0.06] p-6">
                <p className="font-mono text-xs tracking-wide text-accent">02 / ENFORCED</p>
                <h3 className="mt-5 text-xl text-foreground">Sentyrn policy gate</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Check identity, scope, arguments, policy, and required approvals.
                </p>
              </div>
              <div className="border border-line p-6">
                <p className="font-mono text-xs tracking-wide text-muted">03 / CONTROLLED</p>
                <h3 className="mt-5 text-xl text-foreground">Authorized execution</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Only allowed actions reach their destination. Others are denied
                  or held for approval.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="different-heading" className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1100px]">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              Designed for agentic AI
            </p>
            <h2
              id="different-heading"
              className="mt-5 max-w-[620px] text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
            >
              What makes the approach different.
            </h2>
            <div className="mt-12 grid border-t border-line md:grid-cols-2">
              {differentiators.map((item) => (
                <article
                  key={item.number}
                  className="border-b border-line py-8 md:pr-10 md:py-10 md:even:border-l md:even:pl-10"
                >
                  <p className="font-mono text-xs text-accent">{item.number}</p>
                  <h3 className="mt-5 text-xl tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[450px] text-sm leading-relaxed text-muted md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1100px] md:grid md:grid-cols-[1fr_1.35fr] md:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                Beyond content filtering
              </p>
              <h2 className="mt-5 text-3xl tracking-tight text-foreground md:text-4xl">
                Detection is not authorization.
              </h2>
            </div>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:mt-0">
              <p>
                Prompt-injection detection and output scanning are useful
                defenses. But identifying suspicious text is different from
                deciding whether a particular agent may execute a particular
                action on a particular resource.
              </p>
              <p>
                Sentyrn combines content inspection with policy-driven
                authorization at the tool boundary. The objective is to limit
                what compromised or manipulated agents can actually do, even
                when the model&apos;s judgment is unreliable.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-[#0a0a0a] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto flex max-w-[1100px] flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl tracking-tight text-foreground md:text-3xl">
                Built for the moment agents get access.
              </h2>
              <p className="mt-4 max-w-[600px] text-sm leading-relaxed text-muted">
                Sentyrn is in active development. We&apos;re building the
                enforcement infrastructure enterprise AI agents need as their
                capabilities expand.
              </p>
            </div>
            <a
              href={contactHref}
              className="group inline-flex shrink-0 items-center gap-3 self-start border-b border-accent pb-2 text-sm font-medium text-foreground transition-colors hover:text-accent focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Get in touch
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </section>
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
