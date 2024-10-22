import { useCart } from "@/hooks/use-cart";
import { FormatPrice } from "@/lib/format-price";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItemProps {
  product: ProductType;
  quantity: number;
}

const CartItem = (props: CartItemProps) => {
  const { product, quantity } = props;
  const router = useRouter();
  const { removeItem, incrementQuantity, decrementQuantity } = useCart();

  return (
    <li className="flex py-6 border-b">
      <div
        onClick={() => router.push(`/product/${product.slug}`)}
        className="cursor-pointer"
      >
        {product.imagen_producto && product.imagen_producto.length > 0 ? (
          <img
            src={product.imagen_producto[0].url}
            alt={product.nombre}
            className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
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
          <p className="font-bold">{FormatPrice(product.precio)}</p>
          <div className="flex items-center gap-3">
            {product.vendedor && (
              <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                {product.vendedor.nombreVendedor}
              </p>
            )}
            {product.category && (
              <p className="px-2 py-1 text-white bg-blue-950 rounded-full w-fit">
                {product.category.nombreCategoria}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <button
              className="px-2 py-1 text-white bg-gray-800 rounded-full"
              onClick={() => decrementQuantity(product.id)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="px-2 py-1 text-white bg-gray-800 rounded-full"
              onClick={() => incrementQuantity(product.id)}
            >
              +
            </button>
          </div>
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center bg-white border shadow-md p-1 hover:scale-110 transition"
            )}
          >
            <X size={20} onClick={() => removeItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;