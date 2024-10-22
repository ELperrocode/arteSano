"use client";
import { BaggageClaim, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import { useCart } from "@/hooks/use-cart";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const cart = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  // Verificar si el usuario ha iniciado sesión y obtener el nombre del usuario
  const checkAuth = () => {
    const token = localStorage.getItem("authToken");
    const storedUserName = localStorage.getItem("userName");
    setIsAuthenticated(!!token);
    setUserName(storedUserName || "");
  };

  useEffect(() => {
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50  bg-slate-400 bg-opacity-30 backdrop-blur-lg backdrop-filter ">
      <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-5xl">
      <div className="flex items-center rounded-lg p-2 bg-white bg-opacity-20" onClick={() => router.push("/")}>
        <img
          src="/images/logo.jpg"
          alt="Logo"
          width={64}
          height={64}
          className="mr-2"
        />
        <h1 className="text-3xl">
          Arte
          <span className="text-blue-400 font-bold">Sano</span>
        </h1>
      </div>
        <div className="items-center justify-between hidden space-x-4 sm:flex">
          <MenuList />
        </div>
        <div className="flex sm:hidden">
          <ItemsMenuMobile />
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap-7">
          {/* Cart Logic */}
          {cart.items.length === 0 ? (
            <ShoppingCart
              strokeWidth={1}
              className="cursor-pointer"
              onClick={() => router.push("/cart")}
            />
          ) : (
            <div className="flex gap-1" onClick={() => router.push("/cart")}>
              <BaggageClaim strokeWidth={1} className="cursor-pointer" />
              <span className="text-sm text-white bg-black rounded-full p-1">
                {cart.items.length}
              </span>
            </div>
          )}

          {/* User Dropdown */}
          <div className="relative group">
            <User
              strokeWidth={1}
              className="cursor-pointer"
              onMouseEnter={() => setMenuOpen(true)}
            />
            {menuOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white bg-opacity-30 backdrop-blur-md backdrop-filter border rounded shadow-lg group-hover:block"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <ul className="py-1">
                  {isAuthenticated ? (
                    <>
                      <li className="px-4 py-2 bg-gray-500 text-gray-200">Hola, {userName}</li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 bg-gray-500 text-gray-200 hover:bg-gray-800"
                          onClick={() => {
                            localStorage.removeItem("authToken");
                            localStorage.removeItem("userName");
                            setIsAuthenticated(false);
                            router.push("/");
                          }}
                        >
                          Cerrar Sesión
                        </button>
                      </li>
                    </>
                  ) : (
                    <li className="bg-gray-700">
                      <button
                        className="w-full text-left px-4 py-2 bg-gray-500 text-gray-200 hover:bg-gray-800"
                        onClick={() => router.push("/auth")}
                      >
                        Iniciar Sesión
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;