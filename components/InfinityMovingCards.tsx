"use client";

import { FC } from "react";
import useGetVendors, { VendorType } from "@/api/getVendors";
import { cn } from "@/lib/utils";

const InfiniteMovingCards: FC = () => {
  const { vendors, loading, error } = useGetVendors();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!Array.isArray(vendors)) {
    return <p>Error: Unexpected response format.</p>;
  }

  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll">
        {vendors.map((vendor: VendorType) => (
          <Card key={vendor.slug} vendor={vendor} />
        ))}
      </div>
    </div>
  );
};

const Card: FC<{ vendor: VendorType }> = ({ vendor }) => {
  return (
    <div className="relative flex-shrink-0 w-64 p-4 group">
      <div className="relative h-60 overflow-hidden rounded-lg group-hover:filter group-hover:saturate-150 transition-all duration-300">
        <img
          src={vendor.imgVendedor.url}
          alt={vendor.nombreVendedor}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-sm font-semibold text-white text-center m-4">
            {vendor.descripcionVendedor}
          </p>
        </div>
      </div>
      <h2 className="mt-2 text-lg font-bold text-center">{vendor.nombreVendedor}</h2>
    </div>
  );
};

export default InfiniteMovingCards;