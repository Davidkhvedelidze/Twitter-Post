import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photofest Experience",
  description: "Photofest - გაიღიმე, გადაიღე, გააზიარე",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  );
}
