import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GeoBanner } from "@/components/GeoBanner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aizen — Automatisation IA & Web Studio",
  description:
    "Agence spécialisée dans la mise en place d'automatisations avec des agents IA et la création de sites internet pour les entreprises.",
  icons: {
    icon: "/icon.jpeg",
  },
};

const themeInitScript = `
(function(){
  try {
    var stored = localStorage.getItem('aizen-theme');
    if (!stored) {
      var h = new Date().getHours();
      stored = (h < 7 || h >= 19) ? 'dark' : 'light';
    }
    if (stored === 'light') document.documentElement.classList.add('theme-light');
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={montserrat.variable} suppressHydrationWarning>
      <head>
        <script
          id="aizen-theme-init"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <GeoBanner />
      </body>
    </html>
  );
}
