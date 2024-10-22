import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Aquí deberías verificar si el usuario está autenticado
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/auth"); // Redirigir a la página de autenticación si no está autenticado
    }
  }, [router]);

  return isAuthenticated;
}