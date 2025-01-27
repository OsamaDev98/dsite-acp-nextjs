import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import FixedSidebar from "../sections/sidebar/FixedSidebar";
import Navbar from "../sections/navbar/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Kufi_Arabic({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "dsite | Admin Control Panel",
    template: "dsite | Admin Control Panel | %s",
  },
  description: "Admin Control Panel",
};

export const viewport = {
  content: "width=device-width, initial-scale=1",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale == "en" ? "ltr" : "rtl"}>
      <body
        className={`${
          locale == "en" ? inter.className : noto.className
        } bg-[#f5f5f5] flex min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
          <FixedSidebar />
          <main className="py-6 px-8 flex-1 dark:bg-mainDark-900">
            <Navbar />
            <div className="flex flex-col items-center justify-center">
              <Toaster richColors />
              {children}
            </div>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
