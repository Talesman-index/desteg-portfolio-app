import type { Metadata, Viewport } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  themeColor: "#0B0B14",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Desteg Ahissou — Directeur Artistique & Graphic Designer",
  description: "Portfolio officiel de Desteg Ahissou, directeur artistique et designer graphique basé entre Conakry et Cotonou.",
  keywords: ["Desteg Ahissou", "Graphic Designer", "Direction Artistique", "Branding", "Afrique de l'Ouest", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/nexa-bold" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('desteg-theme') || 'dark';
                  if (t === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#8B5CF6] focus:text-white focus:font-bold focus:outline-none"
        >
          Aller au contenu principal
        </a>
        <CustomCursor />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
