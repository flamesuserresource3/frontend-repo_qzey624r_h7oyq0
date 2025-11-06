import { useMemo } from 'react';
import { Star } from 'lucide-react';

// Mock catalog for UI demo. Backend/API can replace this later.
const CATEGORIES = ['Apparel', 'Home', 'Tech', 'Outdoors', 'Beauty'];

const generateProducts = () => {
  const items = [];
  for (let i = 1; i <= 24; i++) {
    const price = (Math.random() * 90 + 10).toFixed(2);
    const rating = Math.round(Math.random() * 2 + 3); // 3-5 stars
    const category = CATEGORIES[i % CATEGORIES.length];
    items.push({
      id: i,
      title: `Product ${i}`,
      price: Number(price),
      rating,
      category,
      vendor: `Vendor ${(i % 5) + 1}`,
      image: `https://picsum.photos/seed/p${i}/600/600`,
      stock: Math.floor(Math.random() * 30) + 1,
    });
  }
  return items;
};

const ALL_PRODUCTS = generateProducts();

export default function ProductGrid({ query, onAdd }) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.vendor.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Featured products</h2>
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <span>{filtered.length}</span>
          <span>items</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <article key={p.id} className="group rounded-lg border border-neutral-200 bg-white shadow-sm overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold line-clamp-2 leading-snug">{p.title}</h3>
                <span className="font-bold">${p.price.toFixed(2)}</span>
              </div>
              <div className="mt-1 text-xs text-neutral-500 flex items-center gap-2">
                <span className="inline-flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-3.5 w-3.5 ${i < p.rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'}`} />
                  ))}
                </span>
                <span>•</span>
                <span>{p.vendor}</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className={`text-xs font-medium ${p.stock > 5 ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {p.stock > 5 ? 'In stock' : 'Low stock'}
                </span>
                <button
                  onClick={() => onAdd(p)}
                  className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-3 py-1.5 text-sm font-medium hover:bg-neutral-800"
                >
                  Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
