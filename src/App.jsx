import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [query, setQuery] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const handleChangeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const totals = useMemo(() => {
    const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const shipping = subtotal > 100 ? 0 : subtotal > 0 ? 7.99 : 0;
    const taxes = subtotal * 0.08;
    const total = subtotal + shipping + taxes;
    return { subtotal, shipping, taxes, total };
  }, [cart]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      <Header
        query={query}
        setQuery={setQuery}
        onOpenCart={() => setCartOpen(true)}
        cartCount={cart.reduce((a, b) => a + b.qty, 0)}
      />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute -top-32 -right-16 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/30 to-fuchsia-400/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 blur-3xl" />
          </div>
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-sm font-medium ring-1 ring-indigo-200">
                Marketplace MVP • Vendors welcome
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Modern storefront for your products
              </h1>
              <p className="text-neutral-600 max-w-2xl">
                List up to 1,000 products, manage orders, inventory, shipping, taxes, and vendor payouts — all in one place.
              </p>
            </div>
          </div>
        </section>

        <ProductGrid query={query} onAdd={handleAddToCart} />
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        totals={totals}
        onRemove={handleRemoveFromCart}
        onChangeQty={handleChangeQty}
      />
    </div>
  );
}
