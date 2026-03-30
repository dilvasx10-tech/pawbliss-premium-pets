import { useState, useEffect } from 'react';

export interface CJProduct {
  slug: string;
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

let cachedData: CJProduct[] | null = null;
let fetchPromise: Promise<CJProduct[]> | null = null;

async function fetchCJProducts(): Promise<CJProduct[]> {
  if (cachedData) return cachedData;
  if (fetchPromise) return fetchPromise;

  fetchPromise = fetch(`${CJ_API_BASE}/pawbliss-products`, { signal: AbortSignal.timeout(15000) })
    .then(res => {
      if (!res.ok) throw new Error(`CJ API ${res.status}`);
      return res.json();
    })
    .then((data) => {
      // Server returns { fetchedAt, cachedUntil, count, products: [...] }
      const raw: Array<{
        slug: string;
        productNameEn?: string;
        productImages?: string[];
        sellPrice?: number;
        videoUrl?: string | null;
        error?: string;
      }> = data.products ?? data;

      console.log('[CJ API] Raw response products:', JSON.stringify(raw.map(p => ({ slug: p.slug, name: p.productNameEn, imageCount: p.productImages?.length })), null, 2));

      const mapped: CJProduct[] = raw
        .filter(p => !p.error && p.productImages?.length)
        .map(p => ({
          slug: p.slug,
          productNameEn: p.productNameEn ?? '',
          productImageSet: p.productImages ?? [],
          sellPrice: typeof p.sellPrice === 'number' ? p.sellPrice : parseFloat(String(p.sellPrice)) || 0,
          videoUrl: p.videoUrl ?? null,
        }));

      console.log('[CJ API] Mapped products:', mapped.map(p => ({ slug: p.slug, name: p.productNameEn, images: p.productImageSet.length })));
      cachedData = mapped;
      return mapped;
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
  return cjProducts.find(p => p.slug === slug);
}
