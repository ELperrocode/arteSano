import { useEffect, useState } from "react";
import { ResultFilterTypes } from "@/types/filters";

export function useGetProductField() {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/api/content-type-builder/content-types/api::producto.producto`;
  const [result, setResult] = useState<ResultFilterTypes|null> (null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setResult(json.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);
  return { result, loading, error };
}
