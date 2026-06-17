import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI 1O1 오프라인 컨설팅",
  description:
    "서비스를 만들고 싶은 초보를 위한 영등포구 인근 1:1 무료 오프라인 Codex 컨설팅입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
