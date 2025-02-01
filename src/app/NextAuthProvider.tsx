"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const NextAuthProvider = async ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
