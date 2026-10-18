import Link from "next/link";

export function SentyrnMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="260 257 735 735"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M952 296H463L299 459V586L456 697L492 664V499L537 455H952V296Z"
      />
      <path
        fill="currentColor"
        d="M955 682L798 572L762 605V758L718 801H300V956H799L955 807V682Z"
      />
      <rect x="556" y="558" width="142" height="146" rx="6" fill="#0044FD" />
    </svg>
  );
}

export default function SiteBrand() {
  return (
    <Link
      href="/"
      aria-label="Sentyrn — home"
      className="inline-flex shrink-0 items-center gap-2.5 text-foreground transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <SentyrnMark className="size-8 shrink-0" />
      <span className="hidden text-[13px] font-semibold tracking-[0.20em] min-[360px]:inline">
        SENTYRN
      </span>
    </Link>
  );
}
