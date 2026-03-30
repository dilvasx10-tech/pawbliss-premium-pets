import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { useCJProducts, getCJProductBySlug } from '@/hooks/useCJProducts';

type Filter = 'all' | 'dogs' | 'cats' | 'bestsellers' | 'bundles';
type Sort = 'bestselling' | 'price-asc' | 'price-desc' | 'newest';

const CollectionsPage = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [sort, setSort] = useState<Sort>('bestselling');
  const { cjProducts, isLoading } = useCJProducts();

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'dogs', label: 'For Dogs' },
    { key: 'cats', label: 'For Cats' },
    { key: 'bestsellers', label: 'Bestsellers' },
  ];

  let filtered = products.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'dogs') return p.category === 'dogs' || p.category === 'both';
    if (filter === 'cats') return p.category === 'cats' || p.category === 'both';
    if (filter === 'bestsellers') return p.badge === 'Bestseller';
    return true;
  });

  filtered = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    return b.reviewCount - a.reviewCount;
  });

  return (
    <div className="container py-12 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Shop</p>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-3">The PawBliss Collection</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">Science-backed solutions for every pet parent. Vet-approved. Happiness guaranteed.</p>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === f.key ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground/70 hover:bg-muted'}`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={e => setSort(e.target.value as Sort)}
          className="px-4 py-2 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="bestselling">Bestselling</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="newest">New Arrivals</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <motion.div key={p.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProductCard
              product={p}
              cjData={getCJProductBySlug(cjProducts, p.slug)}
              isLoading={isLoading}
            />
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No products match your filters.</p>
        </div>
      )}
    </div>
  );
};

export default CollectionsPage;
