import { ProductType } from "@/types/product";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "./use-toast";

interface CartItem {
  product: ProductType;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: ProductType) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product: ProductType) => {
        const existingItem = get().items.find(
          (item) => item.product.id === product.id
        );

        if (existingItem) {
          set((state) => ({
            items: state.items.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }));
        } else {
          set((state) => ({
            items: [...state.items, { product, quantity: 1 }],
          }));
        }
        toast({ title: "Producto añadido al carrito" });
      },
      removeItem: (id: number) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== id),
        }));
        toast({ title: "Producto eliminado del carrito" });
      },
      removeAll: () => set({ items: [] }),
      incrementQuantity: (id: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }));
      },
      decrementQuantity: (id: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }));
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);