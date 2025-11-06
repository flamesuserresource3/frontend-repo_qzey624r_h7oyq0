import { ShoppingCart, Search, Store, User } from 'lucide-react';

export default function Header({ query, setQuery, onOpenCart, cartCount }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Store className="h-6 w-6 text-indigo-600" />
            <span className="font-extrabold tracking-tight text-lg">Flames Market</span>
          </div>

          <div className="flex-1 max-w-2xl hidden md:flex">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, vendors, categories..."
                className="w-full rounded-lg border border-neutral-200 bg-white pl-10 pr-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium shadow-sm hover:bg-neutral-50">
              <User className="h-4 w-4" />
              <span>Sign in</span>
            </button>
            <button
              onClick={onOpenCart}
              className="relative inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-indigo-500"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center h-5 min-w-[1.25rem] rounded-full bg-fuchsia-600 px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, vendors, categories..."
              className="w-full rounded-lg border border-neutral-200 bg-white pl-10 pr-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
