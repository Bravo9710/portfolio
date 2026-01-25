import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";

export const metadata: Metadata = {
  title: "Ventsislav Venkov",
  description:
    "Persoanl portfolio site of Ventsislav Venkov - Front-end Developer. Filed with detailed information about my work experience, education and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className="bg-background-dark pt-[83px] antialiased"
        suppressHydrationWarning
      >
        <Nav />
        {children}
        {/* <Footer /> - add when created */}
      </body>
    </html>
  );
}
