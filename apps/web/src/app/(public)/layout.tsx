import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talent Scope",
  description: "Talent Scope is a platform for finding and hiring talent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(inter.className, "bg-[#D9ECFF]")}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
