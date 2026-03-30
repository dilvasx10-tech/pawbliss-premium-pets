import { useState, useEffect } from 'react';

export interface CJProduct {
  productNameEn: string;
  productImageSet: string[];
  sellPrice: number;
  videoUrl: string | null;
}

interface CJProductsState {
  cjProducts: CJProduct[];
  isLoading: boolean;
  error: boolean;
}

const CJ_API_BASE = import.meta.env.VITE_CJ_API_URL || 'http://localhost:3001/api/cj';

// Map CJ products to our product slugs by index order
const SLUG_ORDER = [
  'calm-lick-mat',
  'pure-flow-cat-fountain',
  'arctic-cool-mat',
  'zen-grooming-hammock',
  'shedaway-glove',
  'iq-puzzle-feeder',
];

let cachedData: CJProduct[] | null = null;
let fetchPromise: Promise<CJProduct[]> | null = null;

async function fetchCJProducts(): Promise<CJProduct[]> {
  if (cachedData) return cachedData;
  if (fetchPromise) return fetchPromise;

  fetchPromise = fetch(`${CJ_API_BASE}/pawbliss-products`, { signal: AbortSignal.timeout(8000) })
    .then(res => {
      if (!res.ok) throw new Error(`CJ API ${res.status}`);
      return res.json();
    })
    .then((data: CJProduct[]) => {
      cachedData = data;
      return data;
    })
    .catch(err => {
      console.warn('CJ API unavailable, using static images:', err.message);
      fetchPromise = null;
      throw err;
    });

  return fetchPromise;
}

export function useCJProducts(): CJProductsState {
  const [cjProducts, setCjProducts] = useState<CJProduct[]>(cachedData || []);
  const [isLoading, setIsLoading] = useState(!cachedData);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (cachedData) {
      setCjProducts(cachedData);
      setIsLoading(false);
      return;
    }

    fetchCJProducts()
      .then(data => {
        setCjProducts(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  return { cjProducts, isLoading, error };
}

/** Get CJ data for a specific product slug */
export function getCJProductBySlug(cjProducts: CJProduct[], slug: string): CJProduct | undefined {
  const index = SLUG_ORDER.indexOf(slug);
  if (index === -1 || index >= cjProducts.length) return undefined;
  return cjProducts[index];
}
