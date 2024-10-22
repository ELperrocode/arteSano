import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import CartItem from "@/app/(routes)/cart/components/cart-item";

const CartSidebar = ({ isOpen, onClose }) => {
  const { items, removeAll } = useCart();

  return (
    <div className={`fixed right-0 top-0 h-full bg-white shadow-lg transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-4">
        <h2 className="text-2xl font-bold">Carrito de Compras</h2>
        <button onClick={onClose} className="absolute top-4 right-4">Cerrar</button>
        {items.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        )}
        <Button onClick={removeAll}>Vaciar Carrito</Button>
      </div>
    </div>
  );
};

export default CartSidebar;