"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/sign-in"); // Redirect to login if not authenticated
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // Show loading while checking session
  }

  return <>{session ? children : null}</>;
}
