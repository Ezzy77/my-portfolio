import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavLayout from "@/app/components/NavLayout";
import FooterLayout from "@/app/components/FooterLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elisio Cabral Sa - Software Engineer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="cupcake">
      <NavLayout />
        {children}
      <FooterLayout />
      </body>
    </html>
  );
}
