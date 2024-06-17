import HeaderNav from "@/components/navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const poppins = Poppins({ subsets: [], weight: "400" });

export const metadata: Metadata = {
  title: "Probinsyano Vlogs",
  description: "Probinsyano Vlogs is a website blog website. I using this to promoted my videos in facebook. I hope you share this to your friends, Co-workers, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={poppins.className}>
        <Providers>
          <HeaderNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
