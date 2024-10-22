"use client";
import useGetProductBySlug from "@/api/getProductBySlug";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import SkeletonProduct from "../[productSlug]/components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";

export default function Page() {
  const params = useParams();
  const { productSlug } = params;

  const { result }: ResponseType = useGetProductBySlug(productSlug);
  console.log(result);

  if (result === null) return <SkeletonProduct />;

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
      <div className="grid sm:grid-cols-2">
        <div>
          <CarouselProduct Images={result[0].imagen_producto} />
        </div>

        <div className="sm:px-12">
          <InfoProduct producto={result[0]} />
        </div>
      </div>
    </div>
  );
}