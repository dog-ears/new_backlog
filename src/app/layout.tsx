import type { Metadata } from "next";
import { M_PLUS_2 } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/app/globals.css";
import styles from "./layout.module.css";

const mplus2 = M_PLUS_2({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEW BACKLOG",
  description: "バックログを改造してみようプロジェクト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={styles.base}>
      <body className={`${mplus2.className}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
