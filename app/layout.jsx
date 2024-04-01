import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ReduxProvider } from "@/redux/provider";
import { Toaster } from "sonner";

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
          <ReduxProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
