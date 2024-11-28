import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import { LanguageProvider } from "./context/LanguageContext";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Thiago Sullivan Portfolio",
  description: "Thiago Sullivan Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
