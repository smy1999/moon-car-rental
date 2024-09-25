import type { Metadata } from "next";
import {Raleway} from "next/font/google";
import "./globals.css";
import {ClerkProvider, SignedIn, SignedOut, SignIn} from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moon Car Rental",
  description: "Premium Car Rental in Your Area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedIn>
            <Navbar/>
            {children}
          </SignedIn>
          <SignedOut>
            <SignIn/>
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
