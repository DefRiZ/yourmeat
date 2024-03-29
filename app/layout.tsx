import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./global.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        <div className="container">
          <Categories />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
