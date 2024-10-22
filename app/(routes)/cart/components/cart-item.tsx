import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";

import { X } from "lucide-react";

import { ProductType } from "@/types/product";
import { FormatPrice } from "@/lib/format-price";
import { cn } from "@/lib/utils";

interface CartItemProps {
  product: ProductType;
  quantity: number;
}

const CartItem = (props: CartItemProps) => {
  const { product, quantity } = props;
  const router = useRouter();
  const { removeItem, incrementQuantity, decrementQuantity } = useCart();

  return (
    <li className="flex flex-col sm:flex-row py-6 border-b ">
      <div
        
        className="flex-shrink-0"
      >
        {product.imagen_producto && product.imagen_producto.length > 0 ? (
          <img
            src={product.imagen_producto[0].url}
            alt={product.nombre}
            className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-36"
          />
        ) : (
          <div className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 bg-gray-200 flex items-center justify-center">
            <span>No Image</span>
          </div>
        )}
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.nombre}</h2>
          <p className="px-2 py-1 text-white bg-blue-950 rounded-full w-fit">{FormatPrice(product.precio)}</p>
         
          <div className="flex items-center gap-4 mt-4">
            <button
              className="px-4 py-2 text-white bg-gray-800 rounded-lg"
              onClick={() => decrementQuantity(product.id)}
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              className="px-4 py-2 text-white bg-gray-800 rounded-lg"
              onClick={() => incrementQuantity(product.id)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <button
            className={cn(
              "rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition"
            )}
            onClick={() => removeItem(product.id)}
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;