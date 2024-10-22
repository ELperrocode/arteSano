import { useEffect,useState } from "react";

export default function useGetProductBySlug(slug:string|string[]) {
    const url = `${process.env.NEXT_PUBLIC_API_HOST}/api/productos?filters[slug][$eq]=${slug}&populate=*`;
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
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
    
};
