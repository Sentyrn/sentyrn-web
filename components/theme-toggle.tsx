"use client";

const STORAGE_KEY = "sentyrn-theme";

type Theme = "dark" | "light";

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;

  const themeColor = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );
  if (themeColor) {
    themeColor.content = theme === "dark" ? "#050505" : "#ffffff";
  }

  const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (icon) {
    icon.href =
      theme === "dark" ? "/sentyrn-icon-dark.svg" : "/sentyrn-icon-light.svg";
  }

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // The visual switch still works when browser storage is unavailable.
  }
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
      onClick={() =>
        setTheme(
          document.documentElement.dataset.theme === "light" ? "dark" : "light",
        )
      }
      className="inline-flex min-h-9 items-center gap-2 text-sm text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <svg
        className="theme-light-choice size-4"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
      <svg
        className="theme-dark-choice size-4"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.2 15.6A8.5 8.5 0 0 1 8.4 3.8 8.5 8.5 0 1 0 20.2 15.6Z" />
      </svg>
      <span className="hidden sm:inline">
        <span className="theme-light-choice">Light</span>
        <span className="theme-dark-choice">Dark</span>
      </span>
    </button>
  );
}
