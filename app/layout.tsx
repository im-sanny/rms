import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rainbow",
  description: "We serve delicious cuisine!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="py-5 flex justify-center mx-auto bg-slate-400">
          <ul className="flex gap-5">
            <li>
              <Button>
                <Link href={'/'}>Home</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link href={'/login'}>Login</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link href={'/register'}>Register</Link>
              </Button>
            </li>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
