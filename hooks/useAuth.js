import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export function useAuth(requireAuth = false) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();

  useEffect(() => {
    if (!loading && requireAuth && !session) {
      router.push("/login");
    }
  }, [loading, session, requireAuth]);

  return { session, loading };
}
