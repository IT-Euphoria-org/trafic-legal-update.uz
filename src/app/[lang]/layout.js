import { Inter } from "next/font/google";
import { getDictionary, i18n } from "../../dictionaries/getDictionary";
import Script from "next/script";
import "./globals.css";

// FSD Widgets import
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

// 1. DYNAMIC METADATA
export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const baseUrl = "https://trafficlegal.uz";

  return {
    title: {
      default: dict.seo.title,
      template: `%s | ${dict.seo.site_name}`,
    },
    description: dict.seo.description,
    keywords: dict.seo.keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "uz-UZ": "/uz",
        "ru-RU": "/ru",
        "en-US": "/en",
      },
    },
    openGraph: {
      title: dict.seo.title,
      description: dict.seo.description,
      url: `${baseUrl}/${lang}`,
      siteName: dict.seo.site_name,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
      locale: lang === "uz" ? "uz_UZ" : lang === "ru" ? "ru_RU" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.title,
      description: dict.seo.description,
      images: ["/og-image.jpg"],
    },
    robots: "index, follow",
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={inter.variable}>
      <head>
        {/* Analytics Scriptlari (Sizning kodingiz o'zgarishsiz qoladi) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1234567890"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1234567890');
          `}
        </Script>
      </head>
      <body className={inter.className}>
      
        <Navbar dict={dict} lang={lang} />

        <main>{children}</main>
        <Footer/>

    
      </body>
    </html>
  );
}
