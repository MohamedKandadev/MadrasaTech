import "@/css/satoshi.css";
import "@/css/style.css";

import { Sidebar } from "@/components/Layouts/sidebar";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import { Header } from "@/components/Layouts/header";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";
import NextAuthProvider from "./NextAuthProvider";
import { StoreProvider, ThemeProvider } from "@/providers";

export const metadata: Metadata = {
  description:
    "Next.js admin dashboard toolkit with 200+ templates, UI components, and integrations for fast dashboard development.",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  // const session = await getSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <StoreProvider>
            <NextAuthProvider>
              <NextTopLoader showSpinner={false} />

              <div className="flex min-h-screen">
                <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
                  <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden">
                    {children}
                  </main>
                </div>
              </div>
            </NextAuthProvider>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
