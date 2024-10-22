import { useEffect, useState } from "react";
export function useGetFeaturedProducts() {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/api/productos?filters[destacado][$eq]=true&populate=*  `;

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);
  return { loading, result, error };
}
