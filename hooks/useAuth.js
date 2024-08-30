import { useSession } from "next-auth/react";
import { useEffect } from "react";


export function useAuth(requireAuth = false) {
  const { data: session, status } = useSession();
  const loading = status === "loading";


  useEffect(() => {
    if (!loading && requireAuth && !session) {
        console.log("Admin login may be required")
    }
  }, [loading, session, requireAuth]);

  return { session, loading };
}
