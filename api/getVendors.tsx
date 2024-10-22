import { useEffect, useState } from "react";

export type VendorType = {
  nombreVendedor: string;
  slug: string;
  descripcionVendedor: string;
  imgVendedor: { url: string };
};

export default function useGetVendors() {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/api/vendors?populate=*`;
  const [vendors, setVendors] = useState<VendorType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setVendors(json.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { vendors, loading, error };
}