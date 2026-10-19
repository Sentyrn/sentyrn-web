import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Sentyrn",
  description:
    "Sentyrn is building independent security infrastructure for enterprise AI agents.",
  applicationName: "Sentyrn",
  icons: {
    icon: [{ url: "/favicon-64.png", sizes: "64x64", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark light",
};

// Runs before hydration so a saved light preference never flashes dark.
const initializeTheme = `
  (() => {
    let stored;
    try { stored = localStorage.getItem("sentyrn-theme"); } catch {}
    const theme = stored === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    const syncHead = () => {
      const color = document.querySelector('meta[name="theme-color"]');
      if (color) color.content = theme === "light" ? "#ffffff" : "#050505";
      const icon = document.querySelector('link[rel="icon"]');
      if (icon) icon.href =
        theme === "light" ? "/sentyrn-icon-light.svg" : "/sentyrn-icon-dark.svg";
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", syncHead, { once: true });
    } else {
      syncHead();
    }
  })();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
