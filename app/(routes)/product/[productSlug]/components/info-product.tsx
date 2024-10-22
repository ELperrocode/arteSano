import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { FormatPrice } from "@/lib/format-price";
import { ProductType } from "@/types/product";
export type InfoProductProps = {
  producto: ProductType;
};

const InfoProduct = (props: InfoProductProps) => {
  const { producto } = props;
  const {addItem} = useCart();
  return (
    <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex justify-between mb-3">
        <h1 className="text-2xl font-extrabold">{producto.nombre}</h1>
        <div className="flex items-center gap-3">
        
          <span className="px-2 py-1 text-xs text-white bg-blue-950 rounded-full dark:bg-slate-50 dark:text-black">
            {producto.vendedor.nombreVendedor}
          </span>
        </div>
      </div>
      <Separator className="my-4" />
      <p className="mb-4 text-gray-700 dark:text-gray-300">{producto.descripcion}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl font-bold text-gray-900 dark:text-gray-100">{FormatPrice(producto.precio)}</p>
      <div className="flex items-center gap-5">
        <Button className="mr-4 w-full" onClick={()=>addItem(producto)}>Add to cart</Button>
      </div>
    </div>
  );
};

export default InfoProduct;