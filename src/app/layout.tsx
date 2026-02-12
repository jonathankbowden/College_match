import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "College Drop | Your Weekly College Match",
  description:
    "One perfect college. Dropped every Monday at 9pm. Take the quiz, get matched.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
