import { useRouter } from "next/navigation";
import { ProductType } from "@/types/product";
import { ExpandableCardDemo } from "./product-expandable";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  producto: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { producto } = props;
  
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(producto);
  };

  const cards = [
    {
      description: producto.descripcion,
      title: producto.nombre,
      src: producto.imagen_producto[0].url,
      content: () => (
        <div className="flex flex-col items-center w-full">
          <p className="text-center">{producto.descripcion}</p>
          <div className="mt-4 flex flex-col items-center w-full">
            <p className="text-lg font-bold">${producto.precio}</p>
            <p className="text-sm text-gray-500">{producto.vendedor.nombreVendedor}</p>
          </div>
          <Button className="mt-4 w-full" onClick={handleAddToCart}>Añadir al carrito</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md w-full">
      <ExpandableCardDemo cards={cards} />
    </div>
  );
};

export default ProductCard;