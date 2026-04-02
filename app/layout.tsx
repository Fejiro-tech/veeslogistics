import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ShipmentProvider } from '@/app/context/ShipmentContext'
import { AuthProvider } from '@/app/context/AuthContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swift Logistics",
  description: "Delivering trust, one package at a time.",
  icons:  '/SwiftLogo.png'
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html
    lang="en"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
        <ShipmentProvider>
          <AuthProvider>
            <body className="min-h-full flex flex-col">{children}</body>
          </AuthProvider>
        </ShipmentProvider>
      </html>
  );
}
