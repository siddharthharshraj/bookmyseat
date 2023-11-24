import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import UILibraryProvider from "@/providers/UILibraryProvider";
import { ClerkProvider } from "@clerk/nextjs";
import LayoutProvider from "@/providers/LayoutProvider";

export const metadata: Metadata = {
  title: "Book My Seat",
  description: "Created by Siddharth Harsh Raj",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-200 h-screen">
          <UILibraryProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </UILibraryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
