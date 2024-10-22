"use client";
import useGetCategoryProduct from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import SkeletonSchema from "@/components/skeleton-schema";
import { ProductType } from "@/types/product";
import { useState } from "react";
import ProductCard from "../components/product-card";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const router = useRouter();
  const [filterVendedor, setFilterVendedor] = useState("");

  return (
    <div className="max-w-6xl py-4 mx-auto sm:-py-16 sm:px-24">
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium">
          {result[0].category.nombreCategoria}
        </h1>
      )}
      <Separator />
      <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
        {loading && <SkeletonSchema grid={3} />}
        {!loading && result !== null && result.map((product: ProductType) => (
          <ProductCard key={product.id} producto={product} />
        ))}
        {result !== null && !loading && result.length === 0 && (
          <p className="justify-center font-semibold">oh, no products found</p>
        )}
      </div>
    </div>
  );
}