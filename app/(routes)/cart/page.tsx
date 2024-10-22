"use client";

import { useCart } from "@/hooks/use-cart";
import { Separator } from "@/components/ui/separator";
import { FormatPrice } from "@/lib/format-price";
import { Button } from "@/components/ui/button";
import CartItem from "./components/cart-item";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

export default function Page() {
  const isAuthenticated = useAuth();
  const { items, removeAll } = useCart();
  const totalPrices = items.reduce((total, item) => total + item.product.precio * item.quantity, 0);
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const router = useRouter();

  const handleBuy = () => {
    console.log("Compra realizada");
    removeAll();
    setIsDialogOpen(true);
  };

  useEffect(() => {
    if (isDialogOpen) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsDialogOpen(false);
            router.push("/");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isDialogOpen, router]);

  if (!isAuthenticated) {
    return null; // O puedes mostrar un mensaje de carga o redirección
  }

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && <p>No products</p>}
          <ul>
            {items.map(({ product, quantity }) => (
              <CartItem key={product.id} product={product} quantity={quantity} />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100">
            <p className="mb-3 text-lg font-semibold">Order Summary </p>
            <Separator />
            <div className="flex justify-between gap-5 my-4">
              <p>Subtotal</p>
              <p>{FormatPrice(totalPrices)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full" onClick={handleBuy}>
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">¡Compra realizada con éxito!</DialogTitle>
            <DialogDescription className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto my-4" />
              Te estamos redirigiendo al inicio...
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 text-center">
            <p className="text-lg">Por favor, espera...</p>
            <p className="text-2xl font-bold mt-2">{countdown}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}