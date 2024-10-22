"use client"
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./skeleton-schema";
import { Card, CardContent } from "./ui/card";
import { ProductType } from "@/types/product";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import IconButton from "./icon-button";
import { useCart } from "@/hooks/use-cart";
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";

const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();
  const { addItem } = useCart();

  return (
    <div className="py-4 mx-auto sm:py-16 sm:px-8 lg:px-24">
      <h3 className="px-4 text-2xl sm:text-3xl sm:pb-8">Nuestros productos:</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result != null &&
            result.map((product: ProductType) => {
              const { id, slug, imagen_producto } = product;
              return (
                <CarouselItem
                  key={id}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 group"
                >
                  <div className="p-2">
                    <Card className="h-full flex flex-col justify-between border border-gray-200 shadow-none">
                      <CardContent className="relative flex items-center justify-center px-4 py-2 h-48">
                        <img
                          src={`${imagen_producto[0].url}`}
                          alt={`${imagen_producto[0].url}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute w-full px-4 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-4">
                            <IconButton
                              onClick={() => router.push(`product/${slug}`)}
                              icon={<Expand />}
                              className="text-gray-600"
                            />
                            <IconButton
                              onClick={() => addItem(product)}
                              icon={<ShoppingCart />}
                              className="text-gray-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 px-6 py-4">
                        <h3 className="text-base sm:text-lg font-bold">{product.nombre}</h3>
                        <div className="flex items-center justify-between gap-3">
                          <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">${product.precio}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;